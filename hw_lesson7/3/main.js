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
console.log('obj', obj);

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
console.log('convert', obj);

/*Написать методы push, join, reverse самостоятельно. Их функциональность должна соответствовать стандартным методам массивов.
list.myPush(); list.myJoin(); list.myReverse();*/

//------PUSH
function myPush(obj, newKey, newValue) {
	obj[newKey] = newValue
    return obj
}
console.log('myPush', myPush(obj, 'newKey', 'newValue'));

//----------- JOIN
obj2 = {
    x: 10,
    y: 20,
    inner: 30,
    foo2: 13
}
function myJoin() {
	let objJoined = {}
	for (var i = 0; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	    	objJoined[key] = arguments[i][key]
	    }		
	}
    return objJoined
}
obj = myJoin(obj, obj2)
console.log('myJoin', myJoin(obj, obj2))

//------- REVERSE
function myReverse(obj) {
	let objReversed = {}
    for (let key in obj) {
		objReversed[obj[key]] = key
    }
    obj = objReversed
	return obj
}
console.log('myReverse', myReverse(obj))