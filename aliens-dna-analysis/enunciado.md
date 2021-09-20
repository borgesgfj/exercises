# Alienígenas

A NASA finalmente anunciou a descoberta de vida fora da Terra. Uma sonda enviada à Marte detectou diversas formas de vida, e coletou indivíduos, que foram trazidos de volta a nosso planeta.

Internamente, esses indivíduos alienígenas são bem diferentes das formas de vida terrestres. Enquanto que, por aqui, a ordem das bases no DNA determina as características do indivíduo, nos marcianos só importa quantas cópias de cada base estão presentes.

Mais especificamente, o “mDNA” (ou DNA marciano) é composto de 15 bases, representadas pelas letras de A a O. Uma espécie é unicamente determinada pela quantidade de cada uma dessas bases que aparece em seu mDNA. Dois indivíduos de uma mesma espécie podem ter sequências de mDNA distintas. Por exemplo, um indivíduo com mDNA AABABJJ é da mesma espécie que um indivíduo com mDNA AJBAJBA, pois ambos possuem três bases A, duas bases B e duas bases J. Indivíduos ABACA e ABABCA, porém são de espécies diferentes: enquanto o primeiro possui apenas uma base B, o segundo possui duas cópias dessa base.

São dadas as sequências de mDNA de n indivíduos. Determine quantas espécies distintas estão presentes.
Entrada

A entrada possui vários casos de teste. Cada caso de teste começa com um inteiro n, que representa o número de indivíduos (0 < n < 65536). Em seguida há n linhas, cada uma das quais com a descrição do mDNA de um indivíduo. Essa descrição é composta apenas por letras maiúsculas entre A e O (inclusive), e possui no máximo 100 caracteres.

A entrada termina com n=0, que não deve ser processado.
## Saída

Para cada caso de teste, imprima uma linha na saída contendo um único inteiro e, o número de espécies distintas presentes entre os indivíduos do caso de teste.
Exemplos

## Entrada:
3
AAA
AAB
ABC
4
AAAB
AABA
ABAA
BAAA
0

Saída:
3
1
## link para o problema original:
https://br.spoj.com/problems/ALIENSMG/
