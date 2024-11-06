// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// name + " plays banjo" 
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками.

// Skills: Strings Fundamentals

// Решение через if

function areYouPlayingBanjo(name) {
    if(name[0] === "R" || name[0] === "r"){         //Проверяем на заданное условие
        return name + " plays banjo"                //Если условие проходит возвращаем результат
    } else {                                        //В противно случае возвращаем другой результат
        return name + " does not play banjo"
    }

}

//   Решение через тернарный оператор

function areYouPlayingBanjo(name) {
    return (name[0] === "R" || name[0] === 'r') ? name + " plays banjo"  : name + " does not play banjo"
  }