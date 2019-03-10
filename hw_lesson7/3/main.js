/*Лекция 7
Создать объект с такой структурой:
obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}
Написать функцию convert(obj), который будет хранится в window, он получает аргументом obj. Функция должна вернуть объект:
newObj = {
    x: 20,
    y: 20,
    z: 30,
    k: 23,
    p: 13
}
*/
obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

function convert(obj) {
    for (var key in obj) {
        if (typeof obj[key] == 'object') {
            for (innerKey in obj[key]) {
                obj[innerKey] = obj[key][innerKey];
            }
            delete obj[key];
        }
    }
}

convert(obj);
console.log(obj);

/*Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.
list.myPush(); list.myJoin(); list.myReverse();*/
function myPush(obj) {
    for (var key in obj) {

    }
}

myPush(obj);
console.log(obj);