Alura

Formação Angular</br>

Angular: Boas práticas em arquiteturas e formulários (10 horas)
## <br />

Instalação Angular:
```js
npm install -g @angular
```
</br>

Criar projeto
```js
ng new "nome do projeto (sem aspas)" --strict // ng new gatitoBook --strict
```
</br>

Instalar bibliotecas na pasta do projeto (BootStrap + font-awesome)
```js
npm i bootstrap font-awesome
```
</br>

Adicionar BootStrap e FontAwesome no escopo global do Angular (angular.json):
```js
"styles": [
    "src/styles.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    "./node_modules/font-awesome/css/font-awesome.css"
],
```
</br>

Criar modulo linha de comando:
```js
// -d gera apenas uma simulação para verificar se o caminho do arquivo, foi realizado de forma correta
ng generate module home --routing -d 
```
</br>

Criar componente linha de comando:
```js
ng generate component home // ng g c home
```
</br>

Criar sub-componente linha de comando:
```js
ng generate component home/login
```
</br>

Ordem criação e manipulação modulo/componentes:
* Criar o módulo (ng g c animais)
* Criar o componente (ng g c lista-animais)
* Adicionar a rota app-routing-module.ts (import animais module)
* Adicionar a rota animais-routing.module.ts (import lista-animais component)
* 