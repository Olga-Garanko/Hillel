/*Домашнее задание 17
#2
Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый, который состоит из свойство обоих объектов (склеить). Если свойство повторяется, то взять значение второго объекта

```
assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
```

------------------------------------------------------------------------------

В задачу  добавить 3ий аргумента flag, который является boolean. Если флаг true, тогда при наличии свойства в обоих объектов в результат пойдет значение из первого обьекта, false - из второго. Значение false - это значение по умолчанию.
```
assignObjects({...}, {...}, false);*/