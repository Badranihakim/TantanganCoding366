var min = function(list){
    let minValue = list[0];
    for (let i = 1; i < list.length; i++) {
    if (minValue > list[i]) {
        inValue = list[i];
        }
    }
    return minValue;
}

var max = function(list){
    
    return list[0];
}