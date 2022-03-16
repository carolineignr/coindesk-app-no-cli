# Vue Sample File without vue-cli

### Passos para criar um projeto Vue do zero

1 - Criar um diretório para o projeto
2 - Adicionar as dependências necessárias (https://medium.com/@yonghong/how-to-setup-webpack-with-vue-js-without-cli-989ca60008c4 aqui tem um exemplo de algumas pro webpack funcionar)
3 - Adicionar a seção de 'nome' etc dentro do package.json
4 - Adicionar os loaders no webpack para que seja possível fazer o bundle para cada extensão, o 'entry' para informar o arquivo de entrada, e o 'output' para informar o output após o bundle.
5 - Criar um componente Vue dentro do arquivo de entrada definido no webpack.config


### Anotações importantes 
- SPA (Single Page Application) != SFC (Single File Component)
- SFC é porque um dos padrões p/ escrever componentes em Vue é usando as tags <template>, <style> e <script> dentro do mesmo arquivo, possibilitanto html, javascript e css no mesmo arquivo.
- Como os componentes SFC possuem a extensão '.vue' e o navegador não entende isso, nesses casos é necessário realizar a transformação desse arquivo para HTML, JS e CSS antes de enviar pro navegador.
O Webpack faz essa transformação através de loaders e plugins.
- Em casos onde o componentes Vue for usado pontualmente dentro de um arquivo JS, não é necessário que essa transformação seja feita (não é necessário webpack para realizar essa função).
- O 'npm start' usa o webpack porque são arquivos '.vue', ou seja, não podem ser rodados diretamente pelo Node através do npm run.