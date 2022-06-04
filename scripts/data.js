
//числовой массив, содержит числа для сортировки
const arr = [
    5, 3, 55, 8, 11, 22, 15, 21, 4, 2
]

//arrDataBubble, arrDataSelect, arrDataInsert - 3 массива, содержат числа из массива arr
//для каждого графика создается отдельный массив, дабы данные не пересекались и были независимы друг от друга
//если этого не сделать, каждый график будет ссылатся на один и тот же массив и будут конфликты приводящие к багам
let arrDataBubble = arr.slice(0);
let arrDataSelect = arr.slice(0);
let arrDataInsert = arr.slice(0);

//массивы цветов для каждого графика
//с помощью функции setColor() для каждого графика создается случайный набор цветов
let colorArrBubble = setColor(arrDataBubble);
let colorArrSelect = setColor(arrDataSelect)
let colorArrInsert = setColor(arrDataInsert)

//функция возвращает рандомный набор цветов
function setColor(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length ; i++) {
        newArr.push(`rgba(163,${getRandomArbitrary(0,255)},${getRandomArbitrary(0,255)},0.8)`)
    }
   return newArr;
}

//функция создает объект из наших чисел и цветов
//сделано для того, чтобы привязать каждое число к определенному цвету
//благодаря тому что мы используем объект, каждый цвет привязывает к конкретному числу и изменяет свое положение в графике вместе с ним
function setArrObj(arr, color) {
    const arrObj = [];
    for(let i = 0; i < arr.length; i++){
        arrObj.push({
            num: arr[i],
            color: color[i]
        })
    }
    return arrObj;
}

//bubleObj - сформированный благодаря функции setArrObj массив объектов для сортировки пузырьком
//содержит поля:
//num - числовой элемент
//color - цвет элемента
//остальные массивы объектов созданы по аналогии
const bubleObj = setArrObj(arrDataBubble, colorArrBubble);
const selectObj = setArrObj(arrDataSelect, colorArrSelect);
const insertObj = setArrObj(arrDataInsert, colorArrInsert);
