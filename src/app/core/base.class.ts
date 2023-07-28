import { inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";

import { BaseService } from "./services/base.service";
import { MesaggeService } from "./services/message.service";

export class BaseClass {
    protected baseService = inject(BaseService);
    protected messageService = inject(MesaggeService);
    protected fb = inject(FormBuilder);
    protected dialog = inject(MatDialog);
}