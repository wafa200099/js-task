function myMap(list,callback){
    let mappedArray = [];
    for (let index in list) {
    mappedArray.push(callback(list[index],index,list))
    
    }
    return mappedArray;
    
    }

let oldArray=[1,2,3,4,5]
let newArray=myMap(oldArray,function(value){return value * 2})
console.log(newArray);