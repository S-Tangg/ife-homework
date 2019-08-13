function drawTable() {
    //draw tablehead
    var tableEle = document.createElement('table');
    var tableHeadRow = document.createElement('tr');
    tableWrapper.appendChild(tableEle);  
    tableEle.appendChild(tableHeadRow);
    tableEle.setAttribute('cellspacing', '0');
    for (i = 0; i < tableHeadData.length; i++) {
        var tableHead = document.createElement('th');
        tableHead.innerHTML = tableHeadData[i];
        tableHeadRow.appendChild(tableHead);
    }
    // draw data
    for (j = 0; j < baseOnTarget.length; j++) {
        var tableRow = document.createElement('tr'); 
        tableEle.appendChild(tableRow);
        for (var keys in baseOnTarget[j]) {
            if (keys !== 'sale') {
                var tableData = document.createElement('td');
                tableData.innerHTML = baseOnTarget[j][keys];
                tableRow.appendChild(tableData);
            }
            else {
                for (x = 0; x < baseOnTarget[j][keys].length; x++) {
                    var tableDataSale =document.createElement('td');
                    tableDataSale.innerHTML = baseOnTarget[j][keys][x];
                    tableRow.appendChild(tableDataSale);
                }
            }    
        }
    }
    var tr = tableEle.rows;
    //如果地区选择了一个，商品选择了多个
    if (regionArr.length === 1 && productArr.length > 1) {
        for (i = 0; i < tr.length; i++) {
            tr[i].insertBefore(tr[i].cells[1], tr[i].cells[0]);
        }
    }
    //合并单元格  
    function merger(rowNum) {
        var k = 1;
        for (i = rowNum; i > 0; i--) {
            if (tr[i].firstElementChild.textContent === tr[i-1].firstElementChild.textContent) {
                tr[i].cells[0].style.display = 'none';
                k++;
            }
            else {
                tr[i].cells[0].setAttribute('rowspan', k);
                rowNum -= k;
                merger(rowNum);
            }
        }
    }
    //如果行数大于2就执行合并单元格
    if (tr.length > 2) {
        merger(tr.length-1);
    } 
}
