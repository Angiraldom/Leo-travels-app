import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ButtonsModalComponent } from 'src/app/shared/buttons-modal/buttons-modal.component';

@Component({
  selector: 'app-cookies-window',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsModalComponent,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    InputSwitchModule,
    FormsModule
  ],
  templateUrl: './cookies-window.component.html',
  styleUrls: ['./cookies-window.component.scss'],
})
export class CookiesWindowComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<this>);
  data: { isConfiguring: boolean } = inject(MAT_DIALOG_DATA);

  isConfiguring!: boolean;
  listCookies = [
    {
      name: 'Vilean',
      description: 'Cookies técnicas y funcionales',
      accepted: true,
      disabled: true,
    },
    {
      name: 'Facebook',
      accepted: false,
      disabled: false
    },
  ];

  ngOnInit(): void {
    this.isConfiguring = this.data.isConfiguring;
  }

  enabledAndDisabledCookies(value: boolean) {
    this.listCookies.map((item) => {
      if (!item.disabled) item.accepted = value;
      return item;
    });
    this.showMessageCookies();
  }

  showMessageCookies(messageCookies = false) {
    if (!messageCookies) {
      localStorage.setItem('showModal', 'true');
    }
    this.dialogRef.close({
      messageCookies
    });
  }
}
