
# Design Patterns
- Command(Comportamento)

## Diagrama de classes para o exemplo a seguir
![Diagrama de classes]()

## Exemplo Node.js
- O **ORM (Object Relational Mapping) Prisma** já possui implícitamente vários patterns de projeto, como o Repository Pattern e o Data Mapper Pattern, também o Singleton Pattern, que é utilizado para garantir que uma classe tenha apenas uma instância e fornecer um **ponto de acesso global** a ela.

### Um exemplo do pattern Command está no arquivo .env
```js

```

### Exemplo do pattern Command
./models/pedido.js
```js

```
.controller/pedido.js
```js

```
- Neste exemplo o padrão Builder é utilizado para criar um pedido com o cliente "Balcão" por padrão, caso não seja informado um cliente no corpo da requisição. O padrão Builder é útil para construir objetos complexos de forma mais legível e organizada.

### Exemplo do pattern Composite
- Com o ORM Prisma este pattern é utilizado para criar uma estrutura de dados em árvore, onde cada nó pode ser um objeto simples ou um objeto composto por outros objetos. O padrão Composite é útil para representar hierarquias de objetos e tratar objetos individuais e composições de forma uniforme.
- No arquivo ./controller/pedido.js
```js

```
- Neste exemplo basta utilizar o include: { itens: true } para incluir os itens do pedido na consulta. O padrão Composite é útil para representar hierarquias de objetos e tratar objetos individuais e composições de forma uniforme.
<br>![Insomnia](./insomnia1.png)
