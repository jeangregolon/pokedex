# Pokédex
Este repositório contém um projeto Vue que implementa uma Pokédex, com recursos de testes unitários utilizando Jest e integração contínua com GitHub Actions.

## Descrição do Projeto
A aplicação é uma Pokédex que oferece um dashboard com gráficos estatísticos sobre os Pokémons, permitindo visualizar informações relevantes de forma intuitiva. Além disso, a aplicação conta com uma página de pesquisa que utiliza a funcionalidade de live search, tornando mais fácil encontrar Pokémons específicos. Também há uma página dedicada para exibir informações detalhadas de um Pokémon em particular.

## Pré-requisitos
- Node
- Yarn
- Vue CLI
- Jest

## Como usar
```
# clonar repositório
git clone https://github.com/jeangregolon/pokedex.git

# navegar até o diretório do projeto
cd pokedex

# instalar as dependências
yarn

# executar a aplicação
yarn serve
```
Isso iniciará o servidor de desenvolvimento e a aplicação estará disponível em http://localhost:8080.

## Integração Contínua com GitHub Actions
Este projeto está configurado com GitHub Actions para executar testes unitários automaticamente em cada push para o repositório. Os arquivos de configuração para as ações estão localizados na pasta .github/workflows.

Quando você envia um novo push para o repositório, as ações serão acionadas e os testes unitários serão executados automaticamente. Você pode verificar o status das ações na aba "Actions" do repositório no GitHub.

## Testes Unitários
Este projeto utiliza Jest como framework de testes unitários. Para executar os testes, utilize o seguinte comando:
```
yarn test:unit
```
## Screenshots
![Detalhes Pikachu](https://github.com/jeangregolon/assets/blob/main/Captura%20de%20tela%20de%202023-05-15%2015-29-38.png)

![Página de busca](https://github.com/jeangregolon/assets/blob/main/Captura%20de%20tela%20de%202023-05-15%2015-29-01.png)

