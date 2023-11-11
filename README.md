# S206_Proj
Projeto da disciplina de qualidade de software.
## Alunos:
- Felipe da Silva Inácio
- Giovani Finazzi
- Luca Felipe
- Marcos Vinícus
## Dependências do ambiente
- nodejs: https://nodejs.org/en/
- Chromium 114: https://chromium.cypress.io/win64/stable/114.0.5735.199 (64 bits) ou https://chromium.cypress.io/win/stable/114.0.5735.199 (32 bits)
## Instalando o Protractor
1. Clone desse repositório
```
git clone https://github.com/Giv314/S206_Proj.git
```
2. Mude o diretório para S206_Proj
```
cd S206_Proj
```
3. Instale o Protractor e o webdriver-manager
```
npm install -g protractor
```
4. Atualize o webdriver-manager
```
webdriver-manager update
```
5. Inicie o servidor do wedriver
```
webdriver-manager start
```
6. Clone o respositório do teste de login utilizado
```
git clone https://github.com/cornflourblue/angular-registration-login-example.git
```
7. Instale algumas dependências do npm para servidor local.
```
npm install -g http-server
```
```
cd angular-registration-login-example
```
```
npm install -g http-server
```
```
http-server
```

8. Rode o teste de exemplo
```
protractor conf.js
```

## Referências
- https://www.protractortest.org/#/
- https://www.youtube.com/watch?v=u_awobQ1fws
- https://www.protractortest.org/#/api?view=ProtractorBy.prototype.model
