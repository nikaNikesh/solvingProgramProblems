/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

*/

/*let firstPlayer = {
    name: 'name1',
    goals: 3,
    passes: 5
};

let secondPlayer = {
    name: 'name2',
    goals: 0,
    passes: 0
};

let players = [];*/




/*
let getStatistics = function (players) {
    players.push(firstPlayer, secondPlayer);
    firstPlayer.coefficient = firstPlayer.goals * 2 + firstPlayer.passes;
    firstPlayer.percent = Math.round( (firstPlayer.goals * 100) / firstPlayer.goals);
    return console.log(players);
}
getStatistics(players);
*/

let allGoals = function (players) {
  let quantityGoals = 0;
    for (let i = 0; i < players.length; i++) {
      quantityGoals += players[i].goals;
    }
    return quantityGoals;
}

let getStatistics = function (players) {
    let quantityGoals = allGoals(players);
    for (let i = 0; i < players.length; i++) {
        players[i].coefficient = players[i].goals * 2 + players[i].passes;
        players[i].percent = Math.round( (players[i].goals * 100) / quantityGoals);
    }
    return players;
}



