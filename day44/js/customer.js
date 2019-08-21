function Customer(name) {
    this.name = name;
}
Customer.prototype = {
    construct: Customer,
    orderDish: function(custom, n) {
        var dish = menulist[n].dishName;
        console.log(custom + ':我想点一份' + dish)
        return dish;
    },
    eat: function(custom) {
        console.log(custom + ':我吃完了，真好吃，下次还会来！');
    }
}
