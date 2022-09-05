function myFind (list, callback)  {

    for (let item of list) {
   
        if (callback(item)) {
            return item;
        }
    }
  
    return undefined;
  
  }

  let array =[1,2,3,4,5]
  let found=myFind(array,element => element > 1)
  console.log(found);
