Feature: Acesso ao Serviço Cielo Farol
  Quero acessar o Serviço Cielo Farol
  Para acompanhar informações sobre os meu negócio e os meus clientes

  Scenario: Validar o acesso ao Serviço Cielo Farol
    Given que o estabelecimento está logado no portal da Cielo
    When acessar o serviço Cielo Farol pela primeira vez após a contratação
    Then deve ser vizualidada a página Termo de Uso