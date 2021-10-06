# Enunciado
Dado duas listas com números inteiros e um inteiro X, retornar os pares de números das listas cuja a soma é igual a X.

# Considerações:
Considere duas listas A e B, podemos pensar que cada passo computacional para resolver este problema consite em fazer a seguinte pergunta: Dado um elemento A[i] da lista A queremos descobrir qual elemento da lista B somado com A[i] resulta em X.
 - Solução proposta no arquivo somaDePares.js:
    Nesta solução percorre-se todos os elementos das duas listas de números. Se uma lista possui tamanho _n_
    e a outra tamanho _m <= n_ então o algoritmo requer _m*n_ interações para se completar. Podemos dizer que o tempo computacional para o algorimo se completar é da ordem de grandeza no máximo até _n²_, ou
    O(n²).
 - Solução proposta no arquivo somaDeParesWithOrdenation.js:
    Nesta solução foi proposta a ordenação das duas listas antes de se realizar a busca dos pares cuja soma é X. Com a ordenação quando a soma de A[i] com o elemento B[j] da lista B excede o valor de X podemos parar de percorrer a lista B e passar ao elemento A[i+1] da lista A. Embora não mude o cenário em relação ao algoritmo em somaDePares.js já ajuda a poupar alguns passos.
 - Solução proposta no arquivo somaDeParesWithBinarySearch.js:
   Nesta solução é realizada uma busca binária em uma das listas, a qual deve estar ordenada.
   O algoritmo de busca binária é útil para determinar se um determinado número existe em uma lista, chamaremos esse número de _alvo_ (ou do inglês: _target_). A realização dessa tarefa se dá sem a necessidade de percorrer elemento a elemento da lista, [clicando aqui](https://github.com/borgesgfj/exercises/tree/main/binary-search) é possível visualzar a implementação deste algoritmo e algumas considerações sobre. Na situação presente tomamos um elemento A[i] da lista A e utilizamos o algoritmo de busca binária para determinar qual elemento da lista B somado com A[i] resulta em X, ou seja, nosso _alvo_ será o resultado de: _X - A[i]_.
   Embora temos de percorrer a lista A elemento à elemento não precisamos percorrer a lista B elemento à elemento, com isso podemos concluir que esta solução se dá em um tempo computacional menor do que as duas anteriores.