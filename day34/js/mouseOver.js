tableWrapper.onmouseover = function(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.tagName.toLowerCase() === 'td') {
        isMouse = 1;
        if ( !target.hasAttribute('rowspan')) {
            var x = target.parentNode.rowIndex;
            chartArr.length = 0;
            for (i = 2; i < target.parentNode.parentNode.rows[x].cells.length; i++) {
                chartArr.push(target.parentNode.parentNode.rows[x].cells[i].textContent);    
            }           
        }
        else {
            return;
        }
        drawLine(chartArr, '#0000FF');
    }
}
tableWrapper.onmouseout = function() {
    isMouse = 0;
    redrawLine();
}