
Feature('Amazon');

const amazonPage = require('../pages/amazon_page');

Before((I) => {
    I.amOnPage('/');
});

Scenario('Validar pesquisa na Amazon @CT001', (I) => {
    amazonPage.pesquisar('Iphone');
    I.see('Apple iPhone XR');
});

Scenario('Validar pesquisa Amazon com validação negativa @CT002', (I) => {
    amazonPage.pesquisar('Iphone');
    I.seeElement('blablabla');
});
