// loadLocalStorage();
drawLine(saleArr, '#0000FF');
drawBar();
funShowLocationStatue();
renderPage();
function renderPage() {
    //删除table重新绘制
    tableWrapper.innerHTML = '';
    // if (isChangeProduct && isChangeRegion) {
        getDate();
        drawTable();
        redrawLine();
        document.getElementById('save').style.display = 'block';
    // }
}
//draw line base on table
function redrawLine() {
    var temp = [];
    ctx.clearRect(40, 0, 440, 229);
    for (i = 0; i < baseOnTarget.length; i++) {
        temp.push(baseOnTarget[i].sale);
    }
    for (j = 0; j < temp.length; j++) {
        drawLine(temp[j], colorArr[j]);
        // console.log(colorArr[j]);   
    }
}
function stopPropagation(e) {
    var e = e || window.event;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        e.cancelBubble = true;
    }
}

document.getElementById('save').onclick = function() {
    saveLocalStorage();
}
window.onpopstate = function() {
    funShowLocationStatue();
    renderPage();
}