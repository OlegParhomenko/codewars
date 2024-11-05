// Решение с помощью метода for

function maps(x){
    const newArr = []
 for (let i = 0; i < x.length; i++){
     newArr.push((x[i] * 2))
   }
     return newArr
 }


//  Решение с помощью метода map

function maps(array){
    const newArr = array.map(elem => {
      return elem * 2
    })
    return newArr
  }


  //  Решение с помощью метода forEach - не возможно!!!
