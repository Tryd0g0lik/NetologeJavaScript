const { Main } = require("./main");
const fs = require("fs");
class Good extends Main {
    constructor(id = 0, names, descriptions, sizes = 0, prices = 0, availbles = false) {
        super(id, names, descriptions, sizes, prices, availbles);
    }
    getFile(path = null) {
        let __data = fs.readFileSync(path);
        return JSON.parse(__data);
    }
    setAvailable(valueBoolen = false, id = null, name = null, path) {
        //Активация товара , поштучая. Списком товара работать не получится.
        let __i = 0;
        let __ind = 0;
        let __value = [id, name];
        let __prop = ['id', 'name'];
        try {
            for (let atr of __value) {
                if (atr != null) {
                    let __arr = (this.getFile(path))['products'];
                    for (__ind; __ind < (__arr).length; __ind++) {
                        if (Number(__arr[__ind][__prop[__i]]) === Number(atr) ||
                            String(__arr[__ind][__prop[__i]]) === String(atr)) {
                            __arr[__ind].avaibles = String(__arr[__ind].avaibles).replace(String(__arr[__ind].avaibles), String(valueBoolen));
                            fs.writeFileSync('./root.json', JSON.stringify({ "products": __arr }), 'utf-8'), (err) => {
                                if (err) {
                                    console.log((`ERROR: ${err.name}` + ` ERROR-message ${err.message}`));
                                }
                                else {
                                    console.log("Rewrite too this's file!");
                                }
                            };
                        }
                    }
                }
                __i++;
            }
        }
        catch (e) {
            let __err = `Error message: ${e.message}, stack ${String(e.stack)}`;
            console.log(__err);
            return;
        }
    }
}
module.exports = { Good };
