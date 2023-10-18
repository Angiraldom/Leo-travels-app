export interface IEpaycoTransaction {
  // Parametros compra (obligatorio)
  name: string;
  description: string;
  invoice: string;
  currency: string;
  amount: number;
  tax_base?: string;
  tax?: string;
  tax_ico?: string;
  country: string;
  lang: string;

  external: string;

  // Atributos opcionales
  extra1?: string; // -> Datos del usuario.
  extra2?: string; // -> Datos de entrega.
  extra3?: string;
  confirmation: string;
  response: string;

  // Atributos cliente
  name_billing?: string;
  address_billing?: string;
  type_doc_billing?: string;
  mobilephone_billing?: string;
  number_doc_billing?: string;

  // Atributo deshabilitación método de pago
  methodsDisable: string[];
}
