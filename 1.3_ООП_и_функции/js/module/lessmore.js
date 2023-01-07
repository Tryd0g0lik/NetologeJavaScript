function lessMore(arr, less = false, more = false, name, word, len) {
    let __result = [];
    if (less === true) {
        const __response = arr.filter((word, length, name) => {
            for (let __i = 0; __i < arr.length; __i++) {
                if (String(arr[__i].name).length < len) {
                    let __res = [arr[__i].id, String(arr[__i].name)];
                    __result.push(__res);
                }
            }
            return __result;
        });
        // console.log(`lessMore: ${lessMore}`)
        return __response;
    }
    else if (more === true) {
        const __response = arr.filter((word, length, name) => {
            for (let __i = 0; __i < arr.length; __i++) {
                if (String(arr[__i].name).length > len) {
                    let __res = [arr[__i].id, String(arr[__i].name)];
                    __result.push(__res);
                }
            }
            return __result;
        });
        // __response = arr.filter(name => name.length > len)
        return __response;
    }
}
module.exports = { lessMore };

