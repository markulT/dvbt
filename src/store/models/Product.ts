
export interface Product {
    name:string,
    title:string,
    description:string,
    price:number,
    length:number,
    chanel:string,
    amplification:number,
    outputImpedance:number,
    currentConsumption:string,
    packagement:string,
    imgName:string,
    id?:string,
    complementary: Product[],
}
export interface ShortProduct {
    name:string,
    title:string,
    price:number,
    imgName:string,
    desc:string
}
