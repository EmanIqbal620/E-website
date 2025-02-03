export interface Products{
    id_ : string;
    title : string;
    _type : "products";
    image? :{
        asset : {
            _ref : string;
            _type : "image";

        }
    };
    price : number;
    description?: string;

}