import { Action, createReducer, on } from "@ngrx/store";

import * as actions from "../actions/cart.actions";
import { ICart } from "src/app/modules/admin/products/interfaces/ICart.interface";
import { IProduct } from "src/app/modules/admin/products/interfaces/IProduct.interface";

export const initialState: ICart = { reference: '', products: [], shippingPrice: 0 };

const _cartReducer = createReducer(initialState,

    on( actions.addProduct, (state, { reference, product }) => {
        const products = [...state.products, {...product}];
        const newProducts = structuredClone(products);
        return { ...state ,reference, products: [...newProducts] }
    }),

    on( actions.updateProduct, (state, { product }) => {

        const result = state.products.map((item) => {
            if (product._id !== item._id) {
                return item;
            }
            return { ...product };
        });
        const newProducts = structuredClone(result);
        
        return { ...state, products: [...newProducts] }
    }),

    on( actions.deleteProduct, (state, { product }) => {
        const newArray: any[] = [...state.products];
        return { ...state, products: newArray.filter((item: any) => product._id !== item._id)};
    }),

    on( actions.initCart, (state, { reference, products }) => {
        const newProducts = structuredClone(updateDiscountProducts(state, products));
        return { ...state, reference, products: [...newProducts] };
    }),

    on( actions.clearCart, () => {
        return { reference: '', products: [], shippingPrice: 0};
    }),

    on( actions.setShippingPrice, (state, { shippingPrice }) => {
        return { ...state, shippingPrice: shippingPrice };
    }),

    on( actions.setCoupon, (state, { newCoupon }) => {
        const arrayProducts = structuredClone(state.products);

        const newProducts = arrayProducts.map((item: any) => {
            const hasDiscountInCoupon = newCoupon.products.some((product) => product === item._id);

            if (hasDiscountInCoupon) {
                item.discount = newCoupon.discount;
                item.coupon = newCoupon;
            }
            return item;
        });

        return { ...state, coupon: {...newCoupon}, products: structuredClone(newProducts) };
    }),

    on( actions.clearCoupon, (state) => {
        const newState = structuredClone(state) as ICart;
        delete newState.coupon;
        newState.products = updateDiscountProducts(newState, newState.products);
        return { ...structuredClone(newState) };
    })
)

const updateDiscountProducts = (state: ICart, products: IProduct[]) => {
    if (Object.hasOwn(state, 'coupon') || !products.some((item) => item.discount)) {
        return products;
    }
    return structuredClone(products).map((item: any) => {
        delete item.discount;
        delete item.coupon;
        return item;
    });
}

export function cartReducer(state: any, action: Action) {
    return _cartReducer(state, action);
}