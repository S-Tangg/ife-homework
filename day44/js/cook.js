function Cook(name, salary) {
    Staff.call(this, name, salary);
}
Cook.prototype = Object.create(Staff.prototype);
Cook.prototype = {
    construct: Cook,
    cooking: function(dish) {
        console.log('厨师：' + dish + '做好了');
        return true;
    }
}
Cook.getIntance = (function(name, salary) {
    var instance;
    return function(name,salary) {
        if (!instance) {
            instance = new Cook(name, salary);
        }
        return instance;
    }
})();
