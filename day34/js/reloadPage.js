function renderPage() {
    //删除table重新绘制

    if(tableWrapper.childNodes.length !== 0) {
        tableWrapper.removeChild(tableWrapper.childNodes[0]);   
             
    }
    if (isChangeProduct && isChangeRegion) {
        getDate();
        drawTable();
        redrawLine();
    }
}
//draw line base on table
function redrawLine() {
    var temp = new Array();
    ctx.clearRect(40, 0, 440, 229);
    for (i = 0; i < baseOnTarget.length; i++) {
        temp.push(baseOnTarget[i].sale);
    }
    for (j = 0; j < temp.length; j++) {
        drawLine(temp[j], colorArr[j]);
        console.log(colorArr[j]);   
    }
}

