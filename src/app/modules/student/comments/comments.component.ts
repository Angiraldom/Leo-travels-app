import { Component, Input, OnInit, inject } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { IComment } from '../interface/IComments.inerface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  private baseSerive = inject(BaseService);
  
  @Input() idClass!: string;

  comments: IComment[] = [];
  comment = new FormControl(null, { validators: Validators.required });

  ngOnInit(): void {
    this.getComments();
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
        console.log("Agregado correcatamente");
        this.comment.reset();
        this.getComments();
      }
    });
  }

}
