function getDate() {
    baseOnTarget.length = 0;
     //判读存储以点击地区和商品的数组是否为空
    if (regionArr && productArr) {                                        
        for (i = 0; i < sourceData.length; i++) {
            for ( j = 0; j < productArr.length; j++) {
                if (sourceData[i].product === productArr[j]) {
                    for (k = 0; k < regionArr.length; k++) {
                        if (sourceData[i].region === regionArr[k]) {
                            baseOnTarget.push(sourceData[i])
                        }
                    }
                }
            }
        }
    }   
}