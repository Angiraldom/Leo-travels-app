import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { typeDocuments } from '../documents/type-documents';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);

  @Output() emitForm = new EventEmitter();

  typeDocument = typeDocuments;
  $form!: Subscription;
  form: FormGroup = this.fb.group({
    name: ['johnatan', Validators.required],
    lastName: ['ramos', Validators.required],
    legalId: ['', Validators.required],
    legalIdType: [''],
    email: ['johnatan.r1000@gmail.com', [Validators.required, Validators.email]],
    phoneNumber: ['3218903991'],
    phoneNumberPrefix: ['57']
  });

  ngOnInit(): void {
    this.$form = this.form.statusChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: (res) => {
        this.emitForm.emit({
          data: this.form.getRawValue(),
          statusForm: res
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.$form.unsubscribe();
  }
}
