var axisY = 190;
var axisX = 460;
var barGap = 20;
var barContainer = document.getElementById('bar-container');
var saleArr = sourceData[0].sale;
// var saleMax = saleArr.sort(function(a, b) {return b - a;})[0];
var saleMax = saleArr[0];
var barWidth = (axisX - 13 * barGap) / 12;
for (i = 1; i < saleArr.length; i++) {
    if (saleArr[i] > saleMax) {
        saleMax = saleArr[i];
    }
}
//draw bar
drawBar();
function drawBar() {
    for (i = 0; i < saleArr.length; i++) {
        var rate = axisY / saleMax;
        var barHeight = saleArr[i] * rate;
        var x = (i + 1) * barGap + i * barWidth + 20;
        var y = 250 - 20 - barHeight - 2;
        var rec = document.createElementNS('http://www.w3.org/2000/svg','rect');
        rec.setAttribute('width', barWidth);
        rec.setAttribute('height', barHeight);
        rec.setAttribute('x', x);
        rec.setAttribute('y', y);
        rec.setAttribute('fill', '#66B3FF');
        // console.log(rec);
        barContainer.appendChild(rec);
    }
}


