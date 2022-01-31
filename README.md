# INTERHUBX - API

API para o projeto INTERHUBX

  

# Instruções para rodar o projeto

  

 Após fazer o clone do projeto no GITHUB, abra o projeto e execute o comando npm install para que baixe as dependências necessárias para o projeto roda.
  

### Após instalar as dependências Execute o comando npm run dev para rodar o projeto

O projeto da API rodar no endereço http://localhost:3001

  
  

# Rotas

GET ( / ) -> Rota default da API.

POST ( /registrocliente ) -> Rota para fazer o registro de novos clientes.
 - Recebe como parâmetro:
   - Nome:  Nome do novo cliente registrado
  
POST ( /registrocolaborador ) -> Rota para fazer o registro de novos colaboradores.
 - Recebe como parâmetro:
   - Nome:  Nome do novo colaborador
   - Email: Email do novo colaborador
   - Senha: senha do novo colaborador
   - Perfil: perfil do novo colaborador, se é colaborador ou coordenador

POST ( /registroordem ) -> Rota para fazer o registro de novas O.S.
 - Recebe como parâmetro:
   - Titulo: Titulo da O.S
   - Descrição: Descriçao da O.S
   - Colaborador: Colaborador designado para atender a O.S
   - Cliente: Cliente que solicitou a O.S
   - Status: Por padrão vem o status aberta
   - Latitude e Longitude: Informações de onde foi aberta a O.S
   - Autor: Autor que abriu a ordem de serviço.
   
GET ( /clientes ) -> Rota que faz a listagem de todos os clientes cadastrados

GET ( /colaboradores ) -> Rota que faz a listagem de todos os colaboradores cadastrados

GET ( /ordens ) -> Rota que faz a listagem de todas as ordens cadastradas

GET ( /dadospainel ) -> Rota que Informa a quantidade de O.S que foram abertas por dia no mês atual.

GET ( /mapapainel ) -> Rota que repassa a localização de onde foi aberta a ultima ordem de serviço de cada colaborador.

POST ( /login ) -> Rota de login com email e senha.

PUT ( /ordem ) -> Rota que faz a atualização de status da ordem de serviço para Finalizada