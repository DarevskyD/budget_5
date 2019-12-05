'use strict';

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),

	expensesItemBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBudgetBtn = document.getElementsByTagName('button')[2],

	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

	chooseIncome = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	chooseSum = document.querySelector('.choose-sum'),
	choosePercent = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("ок");
        appData.expenses[a] = b;
      } else {
        console.log("Возвращаемся к статье расходов");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 500) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else "Произошла ошибка";
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let optionalItem = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = optionalItem;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function () {
    let items = prompt(
      "Что принесет дополнительный доход? (Перечислите через запятую)",
      ""
    );
    while (typeof (items) != "string" || typeof (items) == null || items == "") {
      items = prompt(
        "Что принесет дополнительный доход? (Перечислите через запятую)",
        ""
      );
    }
    appData.income = items.split(", ");
    appData.income.push(prompt("Может что-то ещё?", ""));
    appData.income.sort();

    appData.income.forEach(function (item, i) {
      alert("Способы доп. заработка: " + (i + 1) + ". " + item);
    });
  }
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + ": " +
    appData[key]);
}