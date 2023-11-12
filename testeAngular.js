describe('Caso de teste para o site de teste de login', function() {
  it('Registrando um usuário com sucesso', function() {
    register('123', '456', '789', '101112')
    element(by.buttonText('Register')).click();
    var nome = element(by.model('vm.username'))
    var passw = element(by.model('vm.password'))
    nome.sendKeys('789')
    passw.sendKeys('101112')
    element(by.buttonText('Login')).click();
    var h1 = element(by.css('h1.ng-binding.ng-scope'));
    expect(h1.getText()).toMatch('Hi');
    element(by.linkText('Logout')).click();
  });

  it('Registrando um usuario faltando senha', function(){
    register('123', '456', '789', '101112')
    var passw = element(by.model('vm.user.password'));
    passw.clear();
    expect(element(by.css('[ng-show="form.password.$dirty && form.password.$error.required"]')).isDisplayed()).toBeTruthy();
    browser.sleep(5000)
  });

  function register(f_name, l_name, user_name, password){
    browser.get('http://192.168.56.1:8080');
    // Clicando no botao register
    element(by.partialLinkText('Register')).click();
    // Criando um usuario
    var firstName = element(by.model('vm.user.firstName'));
    var lastName = element(by.model('vm.user.lastName'));
    var username = element(by.model('vm.user.username'));
    var passw = element(by.model('vm.user.password'));
    firstName.sendKeys(f_name)
    lastName.sendKeys(l_name);
    username.sendKeys(user_name)
    passw.sendKeys(password)
  }
});