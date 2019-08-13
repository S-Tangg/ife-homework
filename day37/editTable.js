tableWrapper.onclick = function(e) {
    var e = e || window.event;
    var target = e.target || e.scrElement;
    /* //鼠标点击的是包含button的单元格
    if (target.children.length === 1) {
        createInputBox(target);   
    }
    //鼠标点击的是button
    if (target.tagName.toLowerCase() === 'button') {
        createInputBox(target.parentNode);     
    } */
    if (target.tagName.toLowerCase() === 'td' && Number(parseInt(target.textContent))) {
        createInputBox(target);     
    }
}

tableWrapper.addEventListener('focusout', function(e) {
    var e = e || window.event;
    var target = e.target || e.scrElement;
    if (target.tagName.toLowerCase() === 'input') {
        /* timer = setTimeout(function() {
            console.log('yes');
            cellAfterEdit(target.parentNode, target.value);
        }, 280); */
        cellAfterEdit(target.parentNode, target.value);
    }
});

function createInputBox(element) {
    var inp = document.createElement('input');
    inp.type = 'text';
    var inpValue = element.childNodes[0].textContent;
    inp.setAttribute('value', inpValue);
    var confirmBtn = createBtn('确认');
    var cancelBtn = createBtn('取消');
    //向单元格添加文本框
    clearChild(element);
    element.appendChild(inp);
    element.appendChild(cancelBtn);
    element.appendChild(confirmBtn);
    inp.focus();
    inp.select();
    //设置文本框失去焦点事件
    /* inp.onblur = function() {
        console.log(timer);
        timer = setTimeout(function() {
            console.log('yes');
            cellAfterEdit(inp.parentNode, inpValue); 
        }, 180);  
        console.log(timer);
    } */ 
    cancelBtn.onmousedown = function() {
        cellAfterEdit(this.parentNode, inpValue);
    }
    confirmBtn.onmousedown = function() {
        var editedValue = this.parentNode.firstElementChild.value;
        updateCurTableData(this.parentNode, editedValue);
        cellAfterEdit(this.parentNode, editedValue);
    }
    inp.onkeydown = function(e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        switch (e.keyCode) {
            case 27:
                cellAfterEdit(target.parentNode, inpValue);
                break;
            case 13:
                updateCurTableData(target.parentNode, target.value);
                cellAfterEdit(target.parentNode, target.value);
                break;
            default:
                break;
        }
    }
}
function cellAfterEdit(element, value) {
    clearChild(element);
    element.innerHTML = value;
}
function createBtn(value) {
    var btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', value);
    btn.innerHTML = value;
    return btn;
}

function clearChild(element) {
    element.style.background = 'none';
    element.innerHTML = '';
}
function updateCurTableData(element, value) {
    var tds = element.parentNode.cells;
    var temp = [];
    var updateSale = element.cellIndex;
    for (i = 0; i < 2; i++ ) {
        temp.push(tds[i].innerHTML);
    }
    for (j = 0; j < sourceData.length; j++) {
        if (temp[0] === sourceData[j].product || temp[0]===sourceData[j].region) {
            if (temp[1] === sourceData[j].product || temp[1] === sourceData[j].region) {
                sourceData[j].sale[updateSale - 2] = value;
                // console.log(sourceData[j].sale[updateSale - 2]);
            }
        }
    }
}