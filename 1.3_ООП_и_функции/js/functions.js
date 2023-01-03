function _generatingId(_lis) {
    let _lengs = _lis.length;
    if (_lengs == 0 || _lengs == null) {
        return 0;
    }
    return _lengs;
}

function drawShelves() {
    // здесь отрисовка канвы

    // здесь ajax запрос

    return false;
   }

function callbacks() {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
       document.getElementById('file').innerText = this.result;
    });
    reader.readAsText(document.querySelector('input').files[0]);

 }

module.exports = {_generatingId, }