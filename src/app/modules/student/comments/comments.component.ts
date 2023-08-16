import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, delay, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';

import { BaseService } from 'src/app/core/services/base.service';
import { IComment } from '../interface/IComments.inerface';
import { AppState } from 'src/app/store/app.reducer';
import { MesaggeService } from 'src/app/core/services/message.service';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { IClass } from '../../admin/courses/interfaces/IClass.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  private baseSerive = inject(BaseService);
  private store = inject(Store<AppState>);
  private messageService = inject(MesaggeService);
  
  @Input() class!: IClass;
  @Input() idCourse!: string;
  @Input() idModule!: string;

  $store!: Subscription;
  user!: IUser;
  $profile!: Subscription;
  comments: IComment[] = [];
  comment = new FormControl(null, { validators: Validators.required });

  ngOnInit(): void {
    this.$store = this.store.select('activeClass')
    .pipe(
      delay(2000)
    )
    .subscribe({
      next: () => {
        this.getComments();
      }
    });
    this.$profile = this.store.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
    this.$profile.unsubscribe();
  }

  getComments() {
    this.baseSerive.getMethod('comments/' + this.class._id).
    pipe(
      map((res: any) => {
        return res.data.map((item: IComment) => {
          item.showTextAreaAnswer = false;
          item.answer = '';
          return item;
        })
      })
    )
    .subscribe({
      next: (res: IComment[]) => {
        this.comments = res;
      }
    });
  }

  sendComment() {
    if (!this.comment.valid) {
      return;
    }
    const payload = {
      class: this.class,
      comment: this.comment.value,
      idModule: this.idModule,
      idCourse: this.idCourse
    };
    
    this.baseSerive.postMethod('comments', payload).subscribe({
      next: () => {
        this.messageService.commentAlert('succes.commentAgregated')
        this.comment.reset();
        this.getComments();
      }
    });
  }

  removeComment(idComment: string) {
    this.baseSerive.deleteMethod('comments/' + idComment).subscribe({
      next: () => {
        this.messageService.commentAlert('succes.commentRemoved')
        this.getComments();
      }
    });
  }

  saveAnswer(comment: IComment) {
    this.baseSerive.postMethod(`comments/saveAnswer/${comment._id}`, { answer: comment.answer, idCreatorComment: comment.user._id }).subscribe({
      next: () => {
        this.messageService.commentAlert('succes.commentAgregated')
        this.getComments();
      }
    });
  }
}
