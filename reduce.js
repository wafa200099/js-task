
function myReduce (list, callback, initialValue= 0)  {
 
    let result = initialValue;
  
    for (let item of list) {
        
        result = callback(result, item);
    }
  
    return result;
  }

  let arr=[1,2,3,4,5]
  let sumOfArr= myReduce(arr,(prev,curr)=>prev+curr,0)
  console.log(sumOfArr);
  