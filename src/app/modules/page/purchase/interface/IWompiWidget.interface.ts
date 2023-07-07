export interface IWompiInterface {
  currency: string;
  amountInCents: number;
  reference: string;
  publicKey: string;
  redirectUrl: string;
  shippingAddress?: {
    country: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    phoneNumber: string;
    region: string;
  };
  customerData?: {
    email: string;
    fullName: string;
    legalId: string;
    legalIdType: string;
  };
}
