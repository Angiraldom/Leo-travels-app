import { inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { BaseService } from './services/base.service';
import { MesaggeService } from './services/message.service';
import { ConversionesService } from './services/conversiones.service';

export class BaseClass {
  public static pageSize = 10;
  public static pageIndex = 0;
  protected baseService = inject(BaseService);
  protected messageService = inject(MesaggeService);
  protected fb = inject(FormBuilder);
  protected dialog = inject(MatDialog);
  protected conversionesService = inject(ConversionesService);
}
