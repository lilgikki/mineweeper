const BombsCount = 40;
const FieldSize = 16;

// Рандомные одномерные координаты бомб
const generateArrayRandomNumber = (min:number, max:number, firstNum:number) => {
	let totalNumbers = max - min + 1;
  const arrayTotalNumbers = [];
  const arrayRandomNumbers = [];
  let tempRandomNumber;

	while (totalNumbers--) {
		arrayTotalNumbers.push(totalNumbers + min);
	}

  while (arrayRandomNumbers.length < BombsCount) {
    tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));

    // Условие того, бомба не поставится на первую нажаю ячейку или не станет соседкой этой ячейки
    // const emptyFirstClick = (arrayTotalNumbers[tempRandomNumber] !== firstNum) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum - 1)) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum + 1)) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum - 1 + FieldSize)) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum + 1 + FieldSize)) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum + FieldSize)) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum - 1 - FieldSize)) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum + 1 - FieldSize)) && (arrayTotalNumbers[tempRandomNumber] !== (firstNum - FieldSize));

    // Условие того, что бомба не поставится на первую нажаю ячейку
    const emptyFirstClick = arrayTotalNumbers[tempRandomNumber] !== firstNum;
    // Бомба не попадает на первую ячейке или на ее соседей, то она записывается в массив "бомб"
    if (emptyFirstClick) {
      arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
      arrayTotalNumbers.splice(tempRandomNumber, 1);
    }
  }
	return arrayRandomNumbers;
};

// Генерация массива
const renderArray = (l:number) => {
  const arr:number[][] = [];

  for (let i = 0; i < FieldSize; i++) {
    arr[i] = [];
    for (let j = 0; j < FieldSize; j++) {
      arr[i][j] = 0;
    }
  }

  const bombs = generateArrayRandomNumber(0, 255, l);

  //Перенос расположение мин в одномерныхь координатах на двумерный массив
  for (let i = 0; i < BombsCount; i++) {
    const n = Math.floor(bombs[i] / FieldSize);
    const m = bombs[i] % FieldSize;
    arr[n][m] = 9;
  }

  //Заполнение массива, где 0 - соседей нет, а 9 - ячейка заложена миной (от 1 до 8 - количество "опасных" соседей)
  for (let i = 0; i < FieldSize; i++) {
    for (let j = 0; j < FieldSize; j++) {
      if (arr[i][j] != 9) {
        let k = 0;

        // Считаю соседей-мины
        if ((i > 0) && (j > 0) && (arr[i-1][j-1] == 9)) {k++;}
        if ((i > 0) && (arr[i-1][j] == 9)) {k++;}
        if ((i > 0) && (j < FieldSize - 1) && (arr[i-1][j+1] == 9)) {k++;}
        if ((j > 0) && (arr[i][j-1] == 9)) {k++;}
        if ((j < FieldSize - 1) && (arr[i][j+1] == 9)) {k++;}
        if ((i < FieldSize - 1) && (j > 0) && (arr[i+1][j-1] == 9)) {k++;}
        if ((i < FieldSize - 1) && (arr[i+1][j] == 9)) {k++;}
        if ((i < FieldSize - 1) && (j < FieldSize - 1) && (arr[i+1][j+1] == 9)) {k++;}

        arr[i][j] = k;
      }
    }
  }

  return arr;
};

export {FieldSize, renderArray}
