
import { Good } from "./goodJS";
const f = require( './root.txt');

class GoodsList extends Good{

    filter?: string;
    sortPrice: boolean;
    sortDir: boolean;
    private __lenResponse: number;

    constructor(
        id,
        names,
        descriptions,
        sizes = 0,
        prices = 0,
        availble,
        filter,
        sortPrices = false,
        sortDirs = false,
        ){
        super(
            id,
            names,
            descriptions,
            sizes,
            prices,
            availble,
        )

        this.filter = filter;
        this.sortPrice = sortPrices;
        this.sortDir = sortDirs;
        this.__lenResponse = null;

    }


    getProducts(): void {
         return require('./root.txt',)
    }

    protected getProductsJson(): any {
        let __response: any = (this.getProducts);
        return JSON.stringify(__response);
    }
    setProducts(): any {

        let __response: any = (this.getProducts);
        let __newVar: any = (this.getProductsJson());

        let products = {
            id: __response.length,
            name: this.name,
            descriptions: this.description,
            sizes: this.size,
            prices: this.price,
            avaibles: this.availble,
            filter: this.filter,
            sortPrices: this.sortPrice,
            sortDirs: this.sortDir,
        }

        const addedInDbResponse: any = __newVar.push(products);

        return addedInDbResponse
        // вызываем список товаров и подаем в
        // _generatingId, для формирования id
    }

    findProducts(view: number | string): string{
       let __elem: any;

       let __response: any = this.getProductsJson();

        for (let __i = 0; __i < (__response['products']).length; ++__i ){
            try {
                if (view === JSON.stringify(__response['products'][__i])['id'] ||
                view === JSON.stringify(__response['products'][__i])['name']){

                    __elem = JSON.stringify(__response['products'][__i])
                    return String(__elem)
                }
            } catch (err) {
                continue;
            }
        }

        return "Not found"
    }

    setAvailable(value: boolean,
                 index?: number,
                 name?: string){


        for (let __elenValues in [Number(index), String(name)]){
            return this.findProducts(__elenValues)
        }
    }
}

