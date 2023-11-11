describe('Caso de teste para o site de teste de login', function() {
  it('Registrando um usuário com sucesso', function() {
    browser.get('http://192.168.56.1:8080');
    // Clicando no botao register
    element(by.partialLinkText('Register')).click();
    // Criando um usuario
    var firstName = element(by.model('vm.user.firstName'));
    var lastName = element(by.model('vm.user.lastName'));
    var username = element(by.model('vm.user.username'));
    var passw = element(by.model('vm.user.password'));
    firstName.sendKeys('123')
    lastName.sendKeys('456');
    username.sendKeys('789')
    passw.sendKeys('101112')
    element(by.buttonText('Register')).click();
    var nome = element(by.model('vm.username'))
    var passw = element(by.model('vm.password'))
    nome.sendKeys('789')
    passw.sendKeys('101112')
    element(by.buttonText('Login')).click();
    var h1 = element(by.css('h1.ng-binding.ng-scope'));
    expect(h1.getText()).toMatch('Hi');
    browser.sleep(2000)
  });

  it('Registrando um usuario faltando senha', function(){
    //  var nome = element(by.model(''))
  });
});