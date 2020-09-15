# AVALIAÇÃO TÉCNICA DESENVOLVEDOR C#

### Projeto TestDgBar - Front-End

### Decisões técnicas
  - Pagina web em Vue.js;
  - Biblioteca de componentes com Vuetify;  
  - Gerenciador de estados com Vuex;

### Estrutura do projeto
  - **package.json**: Possui as referências do projeto;
  - **node_modules**: Pasta criada ao baixar os arquivos das dependências da aplicação depois de rodar npm intall;
  - **src/api**: Possui o mapeamanto das requisições http que consomem a api, utilizando o pacote axios;
  - **src/components**:  Possue as instâncias de componentes reutilizáveis do Vue: ComandaItem, Comandas, Items, NotaFiscalComanda e NavigationBar, cada um com sua responsabilidade;
  - **src/puglins**: Pastra criada ao instalar o Vuetify, framework responsivo em Vue, baseado no Material Design que possui uma boa gama de componentes;   
  - **src/views**: Possui as páginas que são redenrizadas utilizando os componentes vue;    
  - **App.vue**: Componente raiz da aplicação. Define o modelo da páginas;
  - **main.js**:  Arquivo javaScript que inicializará o App em um elemento da página e configurar o vuetify e store utilizados na aplicação.
  - **store.js**: Possui o gerenciador de estados da aplicação com Vuex. É basicamente um recipiente centralizado para todos componentes que contém o estado da aplicação, com regras que garante que o estado só é mutado de forma previsivel e reativa.
  
### Pontos de melhorias e evolução
  - Melhorar a estilização do layout da aplicação.
  
## Instruções instalação e execução

 É necessário instalar as seguintes dependências na seguinte ordem:
 
  - Instalar o node.js:
  ``` https://nodejs.org/en/download/```
  - Rodar o comanda npm install no diretório raiz do projeto:
    ``` 
    npm install 
    ``` 
  - Caso ocorra problema de autorização do vue no powershell, execute o comanda abaixo
    ``` 
    set-executionpolicy remotesigned
    ```
  - Executar a aplicação e abrir http://localhost:8080/
    ``` 
    npm run serve
    ```
  - Para abrir o código, utilizar o Visual Studio Code
    ``` 
    code .
    ```    
