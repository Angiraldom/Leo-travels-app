import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as cartActions from '../actions/cart.actions';
import { BaseService } from 'src/app/core/services/base.service';
import { catchError, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { of } from 'rxjs';

@Injectable()
export class EffectCart {
  private actions$ = inject(Actions);
  private baseService = inject(BaseService);
  private store = inject(Store<AppState>);

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartActions.addProduct),
      mergeMap((data) =>
        this.baseService.postMethod('payments/saveProduct', data).pipe(
          catchError(() => of(console.log('No registro')))
        )
      )
    );
  }, { dispatch: false });

  updateProduct$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(cartActions.updateProduct),
        withLatestFrom(this.store.pipe(select('cart'))),
        mergeMap(([action, state]) => {
          return this.baseService.patchMethod('payments/updateAllProducts', state).pipe(
            catchError(() => of(console.log('No edito')))
          );
        })
      );
    },
    { dispatch: false }
  );

  deleteProduct$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(cartActions.deleteProduct),
        withLatestFrom(this.store.pipe(select('cart'))),
        mergeMap(([action, state]) => {
          return this.baseService.patchMethod('payments/updateAllProducts', state).pipe(
            catchError(() => of(console.log('No elimino')))
          );
        })
      );
    },
    { dispatch: false }
  );

  addFieldCuponProduct$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(cartActions.setCoupon),
        withLatestFrom(this.store.pipe(select('cart'))),
        mergeMap(([action, state]) => {
          return this.baseService.patchMethod('payments/updateAllProducts', state).pipe(
            catchError(() => of(console.log('No agrego el campo coupon y discount')))
          );
        })
      );
    },
    { dispatch: false }
  );

  removeFieldCuponProduct$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(cartActions.clearCoupon),
        withLatestFrom(this.store.pipe(select('cart'))),
        mergeMap(([action, state]) => {
          return this.baseService.patchMethod('payments/updateAllProducts', state).pipe(
            catchError(() => of(console.log('No elimino campo coupon y discount')))
          );
        })
      );
    },
    { dispatch: false }
  );

  updateShippingPrice$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(cartActions.setShippingPrice),
        withLatestFrom(this.store.pipe(select('cart'))),
        mergeMap(([action, state]) => {
          return this.baseService.patchMethod('payments/updateAllProducts', state).pipe(
            catchError(() => of(console.log('No actualizo el shippingPrice')))
          );
        })
      );
    },
    { dispatch: false }
  );
}
