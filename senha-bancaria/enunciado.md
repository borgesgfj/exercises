## Problema: SENHA proteja sua senha do SPOJ:
- ### Enunciado.

Por questões de segurança, muitos bancos hoje em dia estão alterando a forma como seus clientes digitam as senhas nos caixas eletrônicos, pois alguém pode postar-se atrás do cliente e ver as teclas à medida em que ele as digita.

Uma alternativa bastante utilizada tem sido associar os dez dígitos a cinco letras, de forma que cada letra esteja associada a dois dígitos, conforme o exemplo abaixo:

 ___ ___    ___ ___    ___ ___    ___ ___    ___ ___   
|   |   |  |   |   |  |   |   |  |   |   |  |   |   |  
|   | 1 |  |   | 3 |  |   | 0 |  |   | 5 |  |   | 2 |  
|   |   |  |   |   |  |   |   |  |   |   |  |   |   |  
| A |---|  | B |---|  | C |---|  | D |---|  | E |---|  
|   |   |  |   |   |  |   |   |  |   |   |  |   |   |  
|   | 7 |  |   | 9 |  |   | 8 |  |   | 6 |  |   | 4 |  
|___|___|  |___|___|  |___|___|  |___|___|  |___|___|  

As associações entre números e letras são mostradas como botões numa tela sensível ao toque, permitindo que o cliente selecione os botões correspondentes à senha. Considerando a disposição dos botões da figura acima, a senha 384729 seria digitada como BCEAEB (note que a mesma seqüência de letras seria digitada para outras senhas, como por exemplo 982123). Cada vez que o cliente usa o caixa eletrônico, as letras utilizadas são as mesmas (de 'A’ a 'E’), com os botões nas mesmas posições, mas os dígitos são trocados de lugar. Assim, caso um intruso veja (mesmo que mais de uma vez) a seqüência de letras digitada, não é possível notar facilmente qual a senha do cliente do banco.
Tarefa

Dada uma seqüência de associações entre letras e números, e as letras digitadas pelo cliente do banco para cada uma dessas associações, você deve escrever um programa para determinar qual é a senha do cliente.
Entrada

A entrada é composta de vários conjuntos de testes. A primeira linha de um conjunto de testes contém um inteiro N, que indica o número de associações entre letras e números e as senhas digitadas (2 <= N <= 10). As N linhas seguintes contêm as entradas da seguinte forma: 10 dígitos, em ordem de associação, para as letras de 'A’ a 'E’ (2 dígitos para a letra A, 2 para a B e assim sucessivamente) e 6 letras que representam a senha codificada conforme os dígitos anteriores. As N associações fornecidas em um conjunto de testes serão sempre suficientes para definir univocamente a senha do cliente. O final da entrada é indicado por N = 0.

Exemplo de Entrada
2
1 7 3 9 0 8 5 6 2 4 B C E A E B
9 0 7 5 8 4 6 2 3 1 E C C B D A
3
0 1 2 3 4 5 6 7 8 9 B C D D E E
1 3 5 4 6 8 7 9 0 2 E B C D C D
3 2 0 4 5 9 7 6 8 1 A C D D E C
0

### Referência:

- (https://br.spoj.com/problems/SENHA/)
