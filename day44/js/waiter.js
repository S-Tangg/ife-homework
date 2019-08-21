function Waiters(name, salary) {
    Staff.call(this, name, salary);
}
Waiters.prototype = Object.create(Staff.prototype);
Waiters.prototype = {
    constructor: Waiters,
    welcome: function(waiter, cus) {
        console.log(waiter + ':欢迎光临' + cus);
    },
    getOrder: function(waiter, dish) {
        console.log(waiter + ':好的，一份' +dish);
    },
    passFood: function(waiter, args) {
        if (args) {
            console.log(waiter + ':请慢慢享用');
        }
    }
}
Waiters.getInstance = (function(name, salary) {
    var instance;
    return function(name, salary) {
        if(!instance) {
            instance = new Waiters(name, salary);
        }
        return instance;
    }
})();
/* Waiters.getInstance = function(id, name, salary) {
    if (!this.instance) {
        this.instance = new Waiters(id, name, salary);
    }
    return this.instance;
} */




