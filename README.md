Alura

Formação Angular</br>

Angular: Controle o fluxo de navegação (12 horas)
## <br />

Guarda rota Angular:
```js
ng g guard "nome da pasta (sem parenteses)" // ng generate guard autenticacao/autenticacao
CanLoad // por utilizar o lazy-loading
```
</br>

Criar um interceptor:
```js
ng g interceptor "nome da pasta (sem parenteses)" // ng generate interceptor autenticacao/autenticacao
```
</br>

Criar um resolver:
```js
ng g resolver "nome da pasta (sem parenteses)" // ng generate resolver animais/lista-animais/lista-animais
```
</br>

Criar o módulo para rota:
```js
ng g m shared
```
</br>

Passo a passo de criação:
* Criar o componente    
* Criar o service do componente
* Criar a interface do componente
* Declarar as variáveis de interface
* Configurar o service para conexão e as funções <!-- comentarios.service.ts -->
* Importar no módulo principal o componente e recursos <!-- animais.module.ts -->
* Desenvolver o observable do componente <!-- comentarios.componentes.ts -->
* Montar o template <!-- comentarios.component.html -->

Subir aplicação para produção:</br>

Criar o servidor
```js
npm install -g http-server
```
</br>

Gerar o bundler
```js
ng build --prod
```
</br>

Localização do bundle:
* dist/"nome do projeto"

Subir o bundle para reprodução:
```js
http-server
```
</br>
