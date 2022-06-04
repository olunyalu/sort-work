//функция возвращает рандомное число
//используется для создание уникальных цветовых схем для графиков
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//функция создает задержку в указанный промежуток
//в нашем случае используем для задержки между перестановками элементов в графике
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

//функция реализует алгоритм сортировки вставками
async function insertionSortObj(arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1].num > current.num) {
            arr[j] = arr[j - 1];
            j--;
            updateDate(arrDataInsert, arr);
            updateColor(colorArrInsert, arr);
            //вызываем задержку в 1 секунду
            await timer(1000);

            chartInsert.update();
        }
        //вызываем задержку в 1 секунду
        await timer(1000);

        arr[j] = current;
        updateDate(arrDataInsert, arr);
        updateColor(colorArrInsert, arr);
        //обновление данных в графике
        //происходит после каждой итерации, т.е. замены элементов в массиве
        chartInsert.update();

    }
};

//функция реализует алгоритм сортировки пузырьком
async function bubbleSortObj(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].num > arr[j + 1].num) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
                updateDate(arrDataBubble, arr);
                updateColor(colorArrBubble, arr);
                //вызываем задержку в 1 секунду
                await timer(1000);
                //обновление данных в графике
                //происходит после каждой итерации, т.е. замены элементов в массиве
                chart.update();
            }
        }
    }
}

//функция реализует алгоритм сортировки выбором
async function selectionSortObj(arr) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin].num > arr[j].num) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            //вызываем задержку в 1 секунду
            await timer(1000);
            chartSelect.update();
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
            updateDate(arrDataSelect, arr);
            updateColor(colorArrSelect, arr)
            //обновление данных в графике
            //происходит после каждой итерации, т.е. замены элементов в массиве
            chartSelect.update();
        }
    }
};

//находим и объявляем кнопки, расположенные под графиками
//чтобы в дальнейшем использовать их для вызова функции сортировки
const buttonBubble = document.querySelector('.btn__bubble');
const buttonSelect = document.querySelector('.btn__select');
const buttonInsert = document.querySelector('.btn__insert');

//функция используется для обновления чисел внутри массива объектов для каждого графика
function updateDate(arr, objArr){
    for (i = 0; i< arr.length; i++) {
        arr[i] = objArr[i].num;
    }
}
//функция используется для обновления схемы цветов внутри массива объектов для каждого графика
function updateColor(arr, objArr){
    for (i = 0; i< arr.length; i++) {
        arr[i] = objArr[i].color;
    }
}
