import { createAction, props } from "@ngrx/store";
import { ICoupon } from "src/app/modules/admin/coupons/interfaces/ICoupon.interface";
import { ICourse } from "src/app/modules/admin/courses/interfaces/ICourses.interface";
import { IProduct } from "src/app/modules/admin/products/interfaces/IProduct.interface";


export const addProduct = createAction('Add Product', props<{reference: string; product: IProduct | ICourse}>());

export const updateProduct = createAction('update Product', props<{reference: string; product: IProduct | ICourse}>());

export const deleteProduct = createAction('delete Product', props<{reference: string; product: IProduct | ICourse}>());

export const initCart = createAction('Init Cart', props<{reference: string; products: IProduct[] | ICourse[]}>());

export const clearCart = createAction('Clear Cart');

export const setShippingPrice = createAction('set Shipping Price', props<{ shippingPrice: number }>());

export const setCoupon = createAction('set Coupon', props<{ newCoupon: ICoupon }>());

export const clearCoupon = createAction('clear Coupon');
