export async function promiseStack(promises, countProcessedPromises) {
    if (countProcessedPromises) {
      let temp = [];
  
      for (let i = 0; i < promises.length; i++) {
        if (temp.length < countProcessedPromises) {
          temp.push(promises[i]());
        } else {
          await Promise.all(temp);
  
          temp = [];
  
          temp.push(promises[i]())
        }
  
        
      }
  
     
    } else {
      for (let promise of promises) {
          console.log(await promise());
        }
    }
  }



