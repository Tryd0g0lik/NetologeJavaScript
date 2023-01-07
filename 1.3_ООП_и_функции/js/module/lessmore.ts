import {inflate, inflateRaw} from "zlib";

function lessMore(
    arr:any,
    less: boolean = false,
    more: boolean = false,
    name: string,
    word:string,
    len: number,
    ){
    /* Params:  'arr' : Array<Array<any>> -    this's an array wich be get  with a outside arrays  insert.
                'less' or/and
                'more' : charaster '<' or '>' - this's determines, at value a length 'word' is the more
                than a 'len' or not.

                'name' : type string    -       this's property title, length wich  we want to define.
                'word' : type string -          this's simbol's set.
                'len' type number -             this's integer which defining a word length.
    */
    interface Result{
        __id: number;
        __prop: string;
    }

    let __result: Array<Array<Result>> = [];

    if (less === true) {
       const __response = arr.filter((word, length, name) => {
           for (let __i = 0; __i < arr.length; __i++){
               if(String(arr[__i].name).length < len) {

                   let __res = [arr[__i].id, String(arr[__i].name)]
                   __result.push(__res)
               }
           }
           return __result

        })
        // console.log(`lessMore: ${lessMore}`)
        return __response
    }else if (more === true) {
        const __response = arr.filter((word, length, name) => {
            for (let __i = 0; __i < arr.length; __i++) {
                if (String(arr[__i].name).length > len) {

                    let __res = [arr[__i].id, String(arr[__i].name)]
                    __result.push(__res)
                }
            }
            return __result
        });
        // __response = arr.filter(name => name.length > len)
        return __response
    }
}
module.exports = {lessMore}