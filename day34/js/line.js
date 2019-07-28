var c = document.getElementById('line-container');
var ctx = c.getContext('2d');
c.setAttribute('width', 500);
c.setAttribute('height', 250);
var containerPadding = 20;
var saleArr = sourceData[0].sale;
//if mouse has move over the table, if yes, the value is 1
var isMouse = 0;
//draw axis
ctx.beginPath();
ctx.moveTo(containerPadding, containerPadding);
ctx.lineTo(containerPadding, 250 - containerPadding);
ctx.lineTo(500 - containerPadding, 250 - containerPadding);
ctx.stroke();

function drawLine(Arr, color) {
    if (isMouse === 1) {
        ctx.clearRect(40, 0, 440, 229);
    }
    //find the max value 
    var saleMax = Number(Arr[0]);
    for (i = 1; i < Arr.length; i++) {
        if (Number(Arr[i]) > saleMax) {
            saleMax = Arr[i];
        }
    }
    ctx.beginPath();
    var rate = 210 / saleMax;
    var botGap = parseInt(460 / 13);
    for (i = 0; i < Arr.length; i++) {
        var y = 250 - 20 - rate * Arr[i];
        var x = (i + 1) * botGap + containerPadding;
        if (i === 0) {
            ctx.moveTo(x, y);
        }
        else {
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    
    for (i = 0; i < Arr.length; i++) {
        var y = 250 - 20 - rate * Arr[i];
        var x = (i + 1) * botGap + containerPadding;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0 , 2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
}
drawLine(saleArr, '#0000FF');

