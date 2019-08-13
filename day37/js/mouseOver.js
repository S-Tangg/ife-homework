tableWrapper.onmouseover = function(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var fromTarget = e.relatedTarget || e.fromElement;
    /* if (fromTarget.contains(target)) {
        return;
    } */
    //如果没有单元格是被编辑的状态，才能够执行mouse over函数，mouseout同上
    
        if (target.tagName.toLowerCase() === 'td') {
            isMouse = 1;
            if ( !target.hasAttribute('rowspan')) {
                var x = target.parentNode.rowIndex;
                chartArr.length = 0;
                for (i = 2; i < target.parentNode.parentNode.rows[x].cells.length; i++) {
                    chartArr.push(target.parentNode.parentNode.rows[x].cells[i].firstChild.textContent);    
                }          
            }
            else {
                return false;
            }
            //show edit icon if mouse hover the td
            /* if (target.cellIndex > 1) {
                if (target.childNodes.length > 1) {
                    target.removeChild(target.firstElementChild);
                }
                var editIcon = document.createElement('button');
                editIcon.textContent = '编辑';
                editIcon.setAttribute('type', 'button');
                editIcon.setAttribute('id', 'edit-icon');
                target.appendChild(editIcon);
            } */
            if (Number(parseInt(target.textContent))) {
                target.style = 'background: url("images/edit.png") no-repeat 60px center;';   
            }
            drawLine(chartArr, '#0000FF');
        }
    
    
}
tableWrapper.onmouseout = function(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var fromTarget = e.relatedTarget || e.fromElement;

        /* if (target.contains(fromTarget)) {
            return false;
        }
        if (target.cellIndex > 1 && target.tagName.toLowerCase() === 'td') {
            target.removeChild(target.firstElementChild);
        } */
        target.style = 'background: none;';
        isMouse = 0;
        redrawLine();
   
    
    
}