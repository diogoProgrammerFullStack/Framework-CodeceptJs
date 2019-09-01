const I = actor();

module.exports = {

  // insert your locators and methods here
  
  fields:{
    campo_pesquisa: '//*[@id="twotabsearchtextbox"]'
  },

  submitButton:{
    button_lupa: '#nav-search > form > div.nav-right > div > input'
  },

  pesquisar(item){
    I.fillField(this.fields.campo_pesquisa, item);
    //I.pressKey('Enter');
    //Ou
    I.click(this.submitButton.button_lupa);
  }

}
