class CalcController {

  constructor() {

    this._displayCalc = "0";
    this._currentDate;
    this.initialize;

  }

  initialize() {
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#date");
    let timeEl = document.querySelector("#time");

    displayCalcEl.innerHTML = "4567";
    dateEl.innerHTML = "19/11/2019";
    timeEl.innerHTML = "20:06";

  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(valor) {
    this._currentDate = valor;
  }

}