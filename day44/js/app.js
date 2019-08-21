var btn = document.querySelector('button');
var n = 0;
btn.onclick = function() {
    //初始化客户队列
    var cuslist = [];
    for (i = 0; i < customerName.length; i++) {
        cuslist.push(new Customer(customerName[i]));
    };
    //初始化一个服务员
    var waiter = Waiters.getInstance('翠花', 5500);
    var waiterNam = waiter.name;
    var cusNam = cuslist[n].name;
    waiter.welcome(waiterNam, cusNam);
    //客户点菜
    var random = getRandom(0, menulist.length);
    var dish = cuslist[n].orderDish(cusNam, random);
    waiter.getOrder(waiterNam, dish);
    //初始化厨师并做菜
    var cook = Cook.getIntance('哈哈', 7000);
    var finishCook = cook.cooking(dish);
    //服务员上菜
    waiter.passFood(waiterNam, finishCook);
    //客户吃饭
    cuslist[n].eat(cusNam);
    n++;
}
