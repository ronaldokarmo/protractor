const { Given, When, Then, Before } = require('cucumber');
const { browser } = require('protractor');

var firstNumber = element(by.model('first'));
var secondNumber = element(by.model('second'));
var goButton = element(by.id('gobutton'));
var latestResult = element(by.binding('latest'));
var history = element.all(by.repeater('result in memory'));

function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
}

Before(function (){

});

Given('que o estabelecimento está logado no portal da Cielo', function () {
    return expect(browser.getTitle()).to.eventually.equal("CIelo Farol");
});

When('acessar o serviço Cielo Farol pela primeira vez após a contratação', function () {

});

Then('deve ser vizualidada a página Termo de Uso', function () {

});