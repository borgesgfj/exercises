# Considerações sobre a busca binária.
  Considerando um array **ordenado** com **N** elementos, o primeiro elemento do array tem índice 0 enquanto o último tem índice `(array.length - 1)`.
  Se nosso problema é  buscar por um dado número **x** no array e retornar o seu índice caso o array contenha **x**, e retornar -1 caso o array não contenha **x**, podemos fazer isso utilizando o algorítimo de busca binária sem a necessidade de percorrer todo o array (o que seria uma busca linear).
  O algoritmo funciona de forma interativa (ou recursiva) e a cada interação subdivide o array reduzindo o espaço de busca, basicamente ele funciona da seguinte maneira:
    1. No ínicio o espaço de busca é o array todo, então o menor índice do array que vamos considerar `min = 0` e o maior índice `max = (array.length - 1)`. O elemento central do array corresponde a média entre _max_ e _min_ arredondada para baixo, a essa média podemos atribuir uma variável `middle`
    2. Então conferimos se **x** é igual ao elemento `array[middle]`, se for demos sorte e retornamos `middle`. Se não for então fazemos as análises abaixo;
    3. Se `x < array[middle]` então nosso espaço de busca pode ser reduzido aos elementos à esquerda de `array[middle]`. Portanto podemos fazer `max = middle -1`, atualizar `middle` e voltar ao passo 2.
    4. Se `x > array[middle]` então nosso espaço de busca pode ser reduzido aos elementos à direita de `array[middle]`. Portanto podemos fazer `min = middle +1`, atualizar `middle` e voltar ao passo 2.

  Fazemos isso até que nosso intervalo de busca corresponda a um elemento apenas, ou `min > max`.
  Essa descrição funcionará apenas se o array não conter elementos repetidos. Se o array pode conter elementos repetidos e se busque _a primeira ocorrêcnia de um elemento_, então é melhor armazenarmos a variável `middle` em alguma outra variável auxiliar quando `x == array[middle]` e fazer: `max = middle - 1`, atualizar `middle` e continuar a busca, pois caso exista outro elemento igual à `array[middle]` com um índice menor o algoritmo sempre irá encontrá-lo.
## Neste problema.
  Neste problema são permitidos valores repetidos no array, portanto não podemos retornar imediatemnte `middle`assim que `x == array[middle]`. Porém é conveniente que uma primeira implementação do problema seja feita desconsiderando este fato (para efeito de aprendizado).
  ### Referêcnias:
   - [Busca binária](https://pt.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
   - [Busca binária para encontrar a primiera ocorrência](https://www.algorithmsandme.com/first-occurrence-of-element/)
