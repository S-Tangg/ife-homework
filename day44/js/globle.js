var menulist = [
    {
        dishName: '糖醋排骨',
        price: 98
    },
    {
        dishName: '拍黄瓜',
        price: 24
    },
    {
        dishName: '皮蛋粥',
        price: 23
    },
    {
        dishName: '水煮肉',
        price: 56
    },
    {
        dishName: '羊肉串',
        price: 6
    },
    {
        dishName: '大盘鸡',
        price: 64
    },
    {
        dishName: '火锅粉',
        price: 10
    },
    {
        dishName: '麻辣烫',
        price: 31
    },
    {
        dishName: '鱼香肉丝',
        price: 29
    },
    {
        dishName: '地三鲜',
        price: 27
    },
    {
        dishName: '粉蒸肉',
        price: 25
    },
    {
        dishName: '宫保鸡丁',
        price: 28
    },
    {
        dishName: '北京烤鸭',
        price: 67
    },
    {
        dishName: '锅巴肉片',
        price: 34
    }
];
var customerName = ['章三', '里斯', '哈哈', '梨花', '邹哥', '科网', '娜扎', '诺哥', '翠丝', '百里', '芳芳', '数十', '艾斯', '丽丽', '哗哗', '小粉', '鲜闲', '巨饿', '篱笆', '气氛', '科华', '高新'];
/* function getRandom(cont) {
    var orignalArr = [];
    for (i = 0; i < cont - 1; i++) {
        orignalArr[i] = i+1;
    }
    orignalArr.sort(function() { return 0.5 - Math.random();})
    return orignalArr;
} */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }