Alura

Formação Angular</br>

Angular: Começando com o framework (10 horas)
## <br />

[Angular.io](https://angular.io/)</br>

[CLI Angular](https://angular.io/cli)</br>

Instalação versão específica:
```js
npm install -g @angular/cli@10.1.6
```
</br>

Consultar versão instalada Angular CLI:
```js
ng version
```
</br>

Criar projeto
```js
ng new "nome do projeto (sem aspas)"
```
</br>

* Percorrer até a pasta do projeto (cd ../../pasta do projeto):</br>

Instalar node_modules dentro da pasta do projeto:
```js
npm install
```
</br>

Rodar o projeto
```js
ng serve //OU
ng serve --open
```
</br>

* Extensão VsCode (Angular Extension Pack - Loiane Groner)

Gerar componente:
```js
ng generate component extrato
``` 

* [Manipulando formulários](https://angular.io/api/forms/Form)</br>

* [Manipulando datas](https://angular.io/api/common/DatePipe)</br>

* [Manipulando localicade](https://angular.io/api/core/LOCALE_ID)</br>

Acessando uma API REST [Documentação json-server](https://github.com/typicode/json-server):
```js
npm install -g json-server
```
</br>

* Percorrer até a pasta onde se encontra o arquivo db.json (cd ../../dados)</br>

Rodar o servidor:
```js
json-server --watch db.json
```

* Gerar os dados de JSON em JS para TypeScript [json2js](http://json2ts.com/)