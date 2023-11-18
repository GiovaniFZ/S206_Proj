exports.config = {
    framework: 'jasmine', // ou 'mocha', se preferir outro framework de teste
    seleniumAddress: 'http://localhost:4444/wd/hub', // endereço do servidor do Selenium WebDriver
  
    // Especificação dos casos de teste
    specs: ['testeNaoAngular.js'],
  };