function getObj(id, arr) {
    var objDiv = document.getElementById(id);
    var objAll = objDiv.getElementsByTagName('input');
    for (i = 1; i < objAll.length; i++) {
        if (objAll[i].checked) {
            arr.push(objAll[i].value);
        }
    }
}

function getDate() {
    baseOnTarget.length = 0;
    productArr.length = 0;
    regionArr.length = 0;
     //判断地区和商品是否都已经有被选择的对象
     getObj('product-select', productArr);
     getObj('region-select', regionArr);
    if (regionArr && productArr) {                                   
        for (i = 0; i < sourceData.length; i++) {
            for ( j = 0; j < productArr.length; j++) {
                if (sourceData[i].product === productArr[j]) {
                    for (k = 0; k < regionArr.length; k++) {
                        if (sourceData[i].region === regionArr[k]) {
                            baseOnTarget.push(sourceData[i])                            
                        }
                    }
                }
            }
        }
    }
}
