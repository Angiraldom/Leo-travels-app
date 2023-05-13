import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as cartActions from "../actions/cart.actions";
import { BaseService } from "src/app/core/services/base.service";
import { map, mergeMap } from "rxjs/operators";


@Injectable()
export class EffectCart {

    constructor(
        private actions$: Actions,
        private baseService: BaseService
    ) {}

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType( cartActions.addProduct ),
            mergeMap((data) => 
            this.baseService.postMethod('payments/saveProduct', data)
            .pipe(
                map((res:any) => {
                    return cartActions.initCart({ reference: res['reference'], products: res['products'] })
                })
            ))
        )
    });
}