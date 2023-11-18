describe('Teste de Login', function() {
  it('Teste de login positivo', function() {

    browser.ignoreSynchronization = true;
    browser.get('https://practicetestautomation.com/practice-test-login/');

    var campoUsuario = element(by.id('username'));
    var campoSenha = element(by.id('password'));
    var botaoLogin = element(by.id('submit'));


    browser.wait(ExpectedConditions.presenceOf(campoUsuario), 5000, 'Campo de usuário não encontrado');
    // Insere o nome de usuário e senha nos campos
    campoUsuario.sendKeys('student');
    campoSenha.sendKeys('Password123');

    // Clica no botão de login
    botaoLogin.click();

    browser.wait(ExpectedConditions.urlContains('practicetestautomation.com/logged-in-successfully/'), 5000, 'URL incorreta após o login');
    // Verifica se a URL após o login está correta
    browser.getCurrentUrl().then(function(actualUrl) {
      expect(actualUrl).toContain('practicetestautomation.com/logged-in-successfully/');
    });
    browser.sleep(3000);

    browser.waitForAngularEnabled().then(function(isEnabled) {
      console.log('waitForAngularEnabled:', isEnabled); // Exibirá true ou false para saber se a detecção automática do Angular
    });
  });

  it('Teste de login com username errado', function() {

    browser.ignoreSynchronization = true;
    browser.get('https://practicetestautomation.com/practice-test-login/');

    var campoUsuario = element(by.id('username'));
    var campoSenha = element(by.id('password'));
    var botaoLogin = element(by.id('submit'));


    browser.wait(ExpectedConditions.presenceOf(campoUsuario), 5000, 'Campo de usuário não encontrado');
    // Insere o nome de usuário e senha nos campos
    campoUsuario.sendKeys('IncorrectUser');
    campoSenha.sendKeys('Password123');

    // Clica no botão de login
    botaoLogin.click();

    browser.sleep(2000);

    var mensagemErro = element(by.css('#error.show')); // Seletor para o elemento <div>

    // Obtém o texto do elemento
    mensagemErro.getText().then(function(texto) {
      // Verifica se o texto contém a mensagem desejada
      expect(texto).toContain('Your username is invalid!');
    });
    
    browser.sleep(3000);

    browser.waitForAngularEnabled().then(function(isEnabled) {
      console.log('waitForAngularEnabled:', isEnabled); // Exibirá true ou false para saber se a detecção automática do Angular
    });
  });
});