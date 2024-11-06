// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своих местах. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает присутствие).

// Например, 
// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

// Правильный ответ будет таким 17.

// Подсказка: не забудьте проверить наличие неверных значений, таких как null/undefined

// Skills: Arrays Fundamentals

// Решение через for

function countSheeps(sheep) {
    counter = 0                                         // создаём счётчик для подсчёта овец
    for (let i = 0; i < sheep.length; i++){             // проходимся по массиву
        if(sheep[i]){                                   // проверяем условие (true = наличие овцы)
            counter += 1
        }
    }
    return counter
  }

  //   Метод filter в JavaScript используется для создания нового массива, содержащего все элементы исходного массива, которые проходят проверку, заданную в виде функции-колбэка. Этот метод не изменяет исходный массив, а возвращает новый массив, содержащий только те элементы, для которых функция-колбэк вернула true.

  // Решение через filter


  function countSheeps(sheep) {
    return sheep.filter(sheep => sheep === true).length;
}