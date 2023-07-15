import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';

import { BaseService } from 'src/app/core/services/base.service';
import { IComment } from '../interface/IComments.inerface';
import { AppState } from 'src/app/store/app.reducer';
import { MesaggeService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  private baseSerive = inject(BaseService);
  private store = inject(Store<AppState>);
  private messageService = inject(MesaggeService);
  
  @Input() idClass!: string;

  $store!: Subscription;
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
    })
    this.getComments();
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  getComments() {
    this.baseSerive.getMethod('comments/' + this.idClass).subscribe({
      next: (res: any) => {
        this.comments = res.data;
      }
    });
  }

  sendComment() {
    if (!this.comment.valid) {
      return;
    }
    const payload = {
      idClass: this.idClass,
      comment: this.comment.value
    };
    
    this.baseSerive.postMethod('comments', payload).subscribe({
      next: () => {
        this.messageService.succesMessage('succes.commentAgregated')
        this.comment.reset();
        this.getComments();
      }
    });
  }

}
