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
    setAvailableRemove(valueBoolen = false, id = null, name = null, path, remove = false) {
        //1. Активация товара путем замены 'valueBoolen' на значение 'true'.
        // Работа проходит с единичным товаром/объектом. Работато со списком товара не
        // получится.
        // 2. Найти товар возможно через 'ID' или 'name'-наименование товара.
        // 3. remove() работает если 'remove=true'. Но т.к. работа проводится с форматом JSON,
        // а не DOM, вместо 'remove()' используется 'replice()'
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
                            if (remove == false) {
                                __arr[__ind].avaibles = String(__arr[__ind].avaibles).replace(String(__arr[__ind].avaibles), String(valueBoolen));
                            }
                            else {
                                (__arr).splice(__ind, 1);
                            }
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
