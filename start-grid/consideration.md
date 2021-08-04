# Considerações sobre as soluções.

## Versão 01.
Aqui pega um elemento _i_ do grid de chegada, e compara a sua posição inicial com a posição de todos os competidores que chegaram depois dele. Se a posição inicial do elemento _i_ é maior que a posição inicial de algum competidor que chegou atrás dele então contabilizo uma ultrapassagem.
  ### Principais problemas da solução:
  Embora consiga retornar o valor correto de _número mínimo de ultrapassagens_ a solução peca por um número excessivo de interações em cada elementos do array. Além das interações advindas do laço _for_ existem ainda interações feitas "por baixo dos panos" quando se utiliza o metódo _indexOf_. Isso aumenta muito o custo computacional para listas maiores.
  Outro problema é que a variável _numOfparticipants_ está sendo criada fora do escopo da função, mas sendo usada no escopo da função apenas, isso não é uma boa prática, pois é preciso que ela esteja dentro do escopo da função para que a mesma possa ter controle sobre a variável.

## Versão 02.
Nesta versão parti para uma abordagem diferente, principalmente para evitar interações excessivas sobre os _arrays_. A idéia básica é ir gerando um grid parcial a partir do grid inicial dependendo se um participante realizou ou não uma ultrapassagem. O grid parcial é montado analisando as posições de cada participante durante a corrida, considere o seguinte exemplo:
  #### Exemplo grid parcial.
  - Seja o array com as posições iniciais: startArray = [3,1,2,5,4];
  - O array com as posições finais: finishArray = [5,3,2,1,4]
  Iniciando do primeiro colocado no grid de chegada (participante 5) ele estava em 4º na largada. Após calcular quantas posições ele ganhou o array _startArray_ é transformado para o array _partialPositArray_ ( de posições parciais): [5,3,1,2,4]. Para isso removemos o competidor 5 da posição inicial e passamos ele para sua posição final.
Para realizar o cálculo necessário percorremos o array do grid de chegada e para cada participante analisamos se sua posição no grid parcial é maior que a sua posição na chegada, caso seja contamos o número de ultrapassagens realizada por ele que corresponde à diferença:
**posição parcial - posição final**. Depois disso geramos um novo grid parcial.

**Note que:** Para o primeiro elemento do array _finishArray_ o array posição parcial é justamente o _startArray_ da forma como ele foi fornecido na entrada. Caso o primeiro elemento do _finishArray_ tenha ultrapassado para chegar a esta posição então o vetor parcial no momento que analisamos o segundo colocado não é mais igual ao _startArray_ como fornecido na entrada.
