/* Техническое задание

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/

//way 1 Предполагаем, что нулевой элемент и есть самый маленький
let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;


for (let j = 0; j < attempts.length - 1; j++) {
    for (let i = j + 1; i < attempts.length; i++) {
        if (attempts[i] < attempts[j]) {
            let swap = attempts[j];
            attempts[j] = attempts[i];
            attempts[i] = swap;

        }
    }
}
console.log(attempts);

//вычисляем среднее значение
averageBest = (attempts[attempts.length -1] + attempts[attempts.length -2] + attempts[attempts.length -3]) / 3;
      console.log(averageBest);
      if (averageBest > qualificationDistance) {
            qualified = true;
      }


// way 2 Использование цикла while

/*
let j = 0;
while (j < attempts.length - 1) {
    let i = 1;
    while (i < attempts.length - j) {

        if (attempts[i - 1] > attempts[i]) {
            let swap = attempts[i - 1];
            attempts[i - 1] = attempts[i];
            attempts[i] = swap;
        }
        i = i + 1;
    }
    // console.log(attempts);
    j++;
}
*/

//way 3 Сравнение двух соседних элементов И! прерывание цикла для сокращения количества итераций
/*for (let j = 0; j < attempts.length - 1; j++) {
    let isSort = true;

    for (let i = 1; i < attempts.length - j; i++) {
        if (attempts[i - 1] > attempts[i]) {
            let swap = attempts[i - 1];
            attempts[i - 1] = attempts[i];
            attempts[i] = swap;
            isSort = false;
        }
    }
    console.log(isSort);
    console.log("Iteration " + j);
    console.log(attempts);
    if (isSort) {
        break;
    }
}*/



