# Enunciado.
## PLACAR - Quem vai ser reprovado
Prof. Wallywow da Universidade da Columbia Britânica está muito preocupado com a queda do nível de atenção de seus estudantes. Ele já tentou várias técnicas mundialmente conhecidas para incentivar os alunos a prestar atenção nas suas aulas e fazer as tarefas que ele passa para a turma: deu nota para os alunos mais participativos, ofereceu chocolates aos alunos, levou seu karaokê e cantava nas aulas etc. Como tais medidas não levaram a uma melhora no comparecimento às aulas (a idéia do karaokê, inclusive, mostrou-se bastante infeliz... na segunda aula com karaokê a turma reduziu-se a um aluno -- que tinha problemas auditivos) ele teve uma brilhante idéia: faria uma competição entre os alunos.

Prof. Wallywow passou um conjunto de problemas aos alunos, e deu um mês para que eles os resolvessem. No final do mês os alunos mandaram o número de problemas resolvidos corretamente. A promessa do brilhante didata era reprovar sumariamente o último colocado da competição. Os alunos seriam ordenados conforme o número de problemas resolvidos, com empates resolvidos de acordo com a ordem alfabética dos nomes (não há homônimos na turma). Isso fez com que alunos com nomes iniciados nas últimas letras do alfabeto se esforçassem muito nas tarefas, e não compartilhassem suas soluções com colegas (especialmente aqueles cujos nomes começassem com letras anteriores). Sua tarefa neste problema é escrever um programa que lê os resultados dos alunos do Prof. Wallywow e imprime o nome do infeliz reprovado.

## Entrada
A entrada é composta de diversas instâncias. A primeira linha de cada instância consiste em um inteiro n (1 <= n <= 100) indicando o número de alunos na competição. Cada uma das n linhas seguintes contém o nome do aluno e o número de problemas resolvidos por ele. O nome consiste em uma seqüência de letras [a-z] com no máximo 20 letras e cada time resolve entre 0 a 10 problemas.

A entrada termina com final de arquivo.
## Saída
Para cada instância, você deverá imprimir um identificador Instancia k, onde k é o número da instância atual. Na linha seguinte imprima o nome do infeliz reprovado.
Após cada instância imprima uma linha em branco.

## Problema original em:
https://br.spoj.com/problems/PLACAR/