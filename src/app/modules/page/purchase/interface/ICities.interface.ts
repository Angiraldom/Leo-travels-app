export interface ICities {
    codigoDeapartamento: string;

    nombreDepartamento: string;

    codigoMunicipio: string;

    nombreMunicipio: string;
    
    shippingPrice: {
        valor1: number;
        valor2: number;
    };
}

export interface ICollectionCities {
    _id: string;
    municipalities: ICities[];
}