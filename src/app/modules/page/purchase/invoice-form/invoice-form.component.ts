import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { typeDocuments } from '../documents/type-documents';
import { BaseService } from 'src/app/core/services/base.service';
import { IPrefix } from '../interface/IPrefixes.interface';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private baseService = inject(BaseService);

  @Output() emitForm = new EventEmitter();

  typeDocument = typeDocuments;
  $form!: Subscription;
  prefixes : IPrefix[] = [];

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    legalId: ['', Validators.required],
    legalIdType: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    phoneNumberPrefix: ['', Validators.required]
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
    this.getPrefixes();
  }

  ngOnDestroy(): void {
    this.$form.unsubscribe();
  }

  formatLowerCase() {
    const email = this.form.get('email')?.value as string;
    this.form.get('email')?.setValue(email.toLowerCase());
  }

  getPrefixes() {
    this.baseService.getMethod('prefixes').subscribe({
      next: (res: any) => {
        this.prefixes = res.data;
      }
    });
  }
}
