function funSetLocationStatue() {
    var arrProductCheckbox = [];
    var arrRegionCheckbox = [];
    arrCheckbox.length = 0;

    var objWrapper = document.getElementById("product-select");
    var objInput = objWrapper.getElementsByTagName("input");
    for (var i = 0; i < objInput.length; i++) {
        arrProductCheckbox[i] = objInput[i].checked;
    }
    var strProduct = arrProductCheckbox.join("|")
    arrCheckbox.push(strProduct);

    var objWrapper = document.getElementById("region-select");
    var objInput = objWrapper.getElementsByTagName("input");
    for (var i = 0; i < objInput.length; i++) {
        arrRegionCheckbox[i] = objInput[i].checked;
    }

    var strRegion = arrRegionCheckbox.join("|");
    arrCheckbox.push(strRegion);

    // location.hash = _arrCheckbox.join("-");
    history.pushState(null, "title", location.href.split("?")[0] + "?"  + arrCheckbox.join("-"));
}
function funShowLocationStatue() {
    if (String(location.href).includes("?")) {
        // var str = String(location.hash).replace(/(?)/, "");
        var str = String(location.href).split("?");
        console.log(str[1]);
        var arr = str[1].split("-");
        var arrProduct = arr[0].split("|");
        var objWrapper = document.getElementById("product-select");
        var objInput = objWrapper.getElementsByTagName("input");
        console.log(arrProduct);
        for (var i = 0; i < objInput.length; i++) {
            objInput[i].checked = (arrProduct[i] !== "false");
        }
    
        var arrRegion = arr[1].split("|");
        var objWrapper = document.getElementById("region-select");
        var objInput = objWrapper.getElementsByTagName("input");
        console.log(arrRegion);
        for (var i = 0; i < objInput.length; i++) {
            objInput[i].checked = (arrRegion[i] !== "false");
        }
    }
}


document.body.onclick = function(e, containerId) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.name === 'area') {
        isChangeRegion = true;
        regionArr.length = 0; 
        containerId = region.querySelectorAll('input');
    }
    if (target.name === 'product') {
        isChangeProduct = true;
        productArr.length = 0; 
        containerId = product.querySelectorAll('input');
    }
    //防止点击label触发两次onclick事件
    if (target.tagName.toLowerCase() === 'input' && target.getAttribute('type') === 'checkbox') {
        //全选功能逻辑
        if (target.getAttribute('checkboxType') === 'all') {
            if (target.checked) {
                for (i = 1; i < containerId.length; i++) {
                    containerId[i].checked = true;
                }
            }
            else {
                for (i = 2; i < containerId.length; i++) {
                    containerId[i].checked = false;
                }
            }   
        }
        //子选项功能逻辑
        if (target.getAttribute('checkboxType') === 'child') {
            var a = 0;
            var b = 0;
            for (i = 1; i < containerId.length; i++) {
                if (containerId[i].checked === false) {
                    a++;
                }
                else if (containerId[i].checked === true) {
                    b++;
                }
            }
            //如果有未选择的子选项，取消全选按钮
            if (a > 0) {
                containerId[0].checked = false;
            }
            //如果子选项全部被选，勾选全选按钮
            if (b === containerId.length - 1) {
                containerId[0].checked = true;
            }
            //如果点击的子选项为最后一个被选择的选项，不允许取消选择
            else if ( b === 0) {
                target.checked = true;
            }
        }
        /* for (i = 1; i < containerId.length; i++) {
            if (containerId[i].checked && containerId[i].name === 'area') {
                regionArr.push(containerId[i].value);
            }
            else if (containerId[i].checked && containerId[i].name === 'product') {
                productArr.push(containerId[i].value);
            }
        } */
        /* console.log(regionArr);
        console.log(productArr); */ 
        funSetLocationStatue(); 
        renderPage();
    }
}