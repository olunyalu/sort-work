let ctxBubble = document.getElementById('myChart').getContext('2d'); // график с пузырьковой сортировокой
let ctxSelect = document.getElementById('myChartSelect').getContext('2d'); // график с сортировокой выборкой
let ctxInsert = document.getElementById('myChartInsert').getContext('2d'); // график с сортировокой вставками

Chart.defaults.global.defaultFontSize = 16; // размер шрифта на графиках, равен 16 пикселей

//функция, создающая объект с данными для каждого графика
//принимает 3 параметра:
//nameLabel - имя отображаемое на графике
//colors - массив цветов содержащихся в графике, генерируется для каждого графика рандомный цвет
//arrData - массив чисел для графика
function setData(nameLabel, colors, arrData) {
  const data = {
    labels: arrData,
    datasets: [{
      label: nameLabel,
      data: arrData,
      backgroundColor: colors,
  
      borderWidth: 1
    }]
  };

//объект возвращаемый функцией setData, содержит данные для каждого графика
return config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
}

/**создание конфига для сортировки пузырьком */
const configBuble = setData('Bubble Sort', colorArrBubble, arrDataBubble)
const chart = new Chart(ctxBubble, configBuble);

/**создание конфига для сортировки выборкой */
const configSelect = setData('Select Sort', colorArrSelect, arrDataSelect)
const chartSelect = new Chart(ctxSelect, configSelect);

/**создание конфига для сортировки вставками */
const configInsert = setData('Insert Sort', colorArrInsert, arrDataInsert)
const chartInsert = new Chart(ctxInsert, configInsert);

//buttonBubble - кнопка, находящаяся под графиком с пузырьковой сортировкой
//при событии click запускает сортировку пузырьком
buttonBubble.addEventListener('click', function(){
  bubbleSortObj(bubleObj)
});

//buttonSelect - кнопка, находящаяся под графиком с сортировкой выборкой
//при событии click запускает сортировку выборкой
buttonSelect.addEventListener('click', function(){
  selectionSortObj(selectObj);
});

//buttonInsert - кнопка, находящаяся под графиком с сортировкой выборкой
//при событии click запускает сортировку вставками
buttonInsert.addEventListener('click', function(){
  insertionSortObj(insertObj);
});