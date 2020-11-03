# Desafio DeliverIT

<p>Desafio Deliver IT - API REST para registro de contas a pagar</>

## Instalação

Use o git clone [git](https://github.com/danielortiz3/desafio_deliverit/) para clonar a Gympoint.

```bash
git clone https://github.com/danielortiz3/desafio_deliverit
```
## Database ##
Foi criada uma database em <b>postgres</b>, dentro de um <b>docker</b>.

<a href="https://drive.google.com/file/d/17aEoQFCBWsR_olF6Cl5eA-N3s0pLhrKI/view?usp=sharing" rel="nofollow">Database</a>

## Orientações ##

<ul>
  <li>1 - Clonar o reposítório conforme orientação acima ( git clone )</li>
  <li>2 - Realizar o download do container contendo a base de dados</li>
  <li>3 - Importar o container, pode ser usado o comando:  zcat NAME.gz | docker import - <container_name></li>
  <li>4 - Baixar as dependencias rodando o comando yarn dentro da raiz do projeto</li>
  <li>5 - Para testar as rotas, foi utilizado o <b>Insomnia</b>, pode fazer o download do arquivo insomnia.json e importar para testar as rotas</li>
</ul>

<h2>Rotas</h2>
<ul>
  <li><b>POST - /bills</b> - Cadastrar uma conta nova</li>
    <ul>
      <li> Nome: Texto</li>
      <li> Valor: Texto</li>
      <li> Data de vencimento: Texto</li>
      <li> Data do pagamento: Texto</li>
    </ul>
    </br>
  <li><b>GET - /bills</b> - Listar as contas cadastradas</li>
    <ul>
      <li> Nome: Texto</li>
      <li> Valor: Texto</li>
      <li> Valor corrigido: Texto</li>
      <li> Qtde dias em atraso: Texto</li>
      <li> Data do pagamento: Texto</li>
    </ul>
    </br>
    <li><b>GET - /bills/details</b> - Listar as contas cadastradas</li>
    <ul>
      <li> Nome: Texto</li>
      <li> Valor: Número</li>
      <li> Valor corrigido: Número</li>
      <li> Qtde dias em atraso: Número</li>
      <li> Data do pagamento: Data</li>
      <li> Multa: Número</li>
      <li> Juros: Número</li>
    </ul>
</ul>

<h2>Tecnologias</h2>
<ul>
 <li><a href="https://nodejs.org/en/" rel="nofollow">Node.js</a></li>
 <li><a href="https://www.postgresql.org/about/" rel="nofollow">PostgreSQL</a></li>
 <li><a href="https://www.docker.com/" rel="nofollow">Docker</a></li>
 <li><a href="https://www.genymotion.com/" rel="nofollow">Genymotion</a></li> 
</ul>

## License
[MIT](https://choosealicense.com/licenses/mit/)
