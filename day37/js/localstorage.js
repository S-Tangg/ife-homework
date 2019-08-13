//读取localstorage
function loadLocalStorage() {
    var items = localStorage.getItem('aData');
    if (items == null) {
        sourceData = initialData;
    }
    else {
        sourceData = JSON.parse(items);
    }
    console.log(sourceData);
}
loadLocalStorage();
//localstorage存储
function saveLocalStorage() {
    localStorage.clear();
    var strLocalStorage = JSON.stringify(sourceData);
    localStorage.setItem('aData', strLocalStorage);
}