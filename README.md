# Avaliação #03: Event, Object-Model e Renderer

Classroom link: <https://classroom.github.com/a/xWBTe4vx>

Vídeo explicativo: <https://youtu.be/PmeMtHCgDCk>

### Implementar um ATM, suas propriedades e operações

Considere a especificação de um **Caixa Eletrônico** (ATM) e um _software_ que opere no _hardware_, ou seja, as contas, cartões, senhas e outras informações bancárias são irrelevantes, importando apenas o tratamento do abastecimento de dinheiro físico (em espécie) do **ATM** e subsequentes retiradas. Considere que o **ATM** têm 5 compartimentos internos (1 a 5) cada um com capacidade para até 100 cédulas de `R$ 5,00`, `R$ 10,00`, `R$ 20,00`, `R$ 50,00` e `R$ 100,00` respectivamente. Os vigilantes abastecem o **ATM** com cédulas, no limite de cada compartimento, rejeitando abastecimentos que excedem o limite. Os clientes fazem suas retiradas no **ATM**, sendo irrelevante a operação (saque conta corrente, poupança, empréstimo), bastanto apenas ter cédulas (dinheiro físico) disponível no **ATM** e sendo possível atender o valor informado conforme a combinação disponível de cédulas, isto é, se o cliente solicitar `R$ 60,00` o **ATM** pode entregar 3 cédulas de `R$ 20`, uma de `R$ 50,00` e uma de `R$ 10,00`, mas, por exemplo, se o **ATM** estiver abastecido apenas com cédulas de `R$ 50,00` e `R$ 100,00` ele não poderá atender à solicitação de retirada de `R$ 60,00`, rejeitando a mesma. O algoritmo de retirada deve priorizar a saída de cédulas de maior valor. O **ATM** deve ter, ainda, uma interface para consultar o valor total e quantidade de cédulas de cada compartimento. Ademais, todo **ATM** tem um número de série, único e intransferível.

Dada essa especificação, a implementação deve aderir aos seguintes casos de teste que demonstram a interação básica com o ATM e **devem ser introduzidos mais casos teste que realizem retiradas que combinem 3 e 4 cédulas.**

O ATM está em [atm.js](atm.js).



### Implementar Biblioteca

Observe o _sketch_ em [biblioteca.drawio](biblioteca.drawio).

Implemente conforme _design_ de modo que as funcionalidades na página 2 sejam operacionais.

Podes mudar de livro pra jogos, filmes, séries ou outro tipo de item para a tua biblioteca, desde que sejam preservadas as funcionalidades.

O tratamento de eventos e renderizadores devem ser separados em funções específicas.

A lógica da biblioteca deve ser implementada e testada em um arquivo separado [bib.js](bib.js). Este não deve fazer menção aos eventos, HTML, CSS e detalhes de renderização, **deve ser só lógica na forma de objeto**.
