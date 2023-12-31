const atm = { // DESENVOLVA AQUI O OBJETO ATM
  numeroSerie: 2344499,
  notas5: 0,
  notas10: 0,
  notas20: 0,
  notas50: 0,
  notas100: 0,

  get valor() {
    return (this.notas5 * 5) + (this.notas10 * 10) + (this.notas20 * 20)
      + (this.notas50 * 50) + (this.notas100 * 100)
  },
  abastecerCedulas(qnt, nota) {
    if (nota === 5) {
      this.notas5 += qnt
    }
    else if (nota === 10) {
      this.notas10 += qnt
    }
    else if (nota === 20) {
      this.notas20 += qnt
    }
    else if (nota === 50) {
      this.notas50 += qnt
    }
    else if (nota === 100) {
      this.notas100 += qnt
    }
    else {
      throw 'Insira uma nota válida.'
    }
  },
  retirarValor(saque) {
    if (saque > this.valor) {
      return
    }
    const qntnotas = [];
    if (this.notas100 !== 0) {
      qntnotas.push(parseInt(saque / 100))
      saque %= 100;
    }
    else {
      qntnotas.push(0)
    }
    if (this.notas50 !== 0) {
      qntnotas.push(parseInt(saque / 50))
      saque %= 50;
    }
    else {
      qntnotas.push(0)
    }
    if (this.notas20 !== 0) {
      qntnotas.push(parseInt(saque / 20))
      saque %= 20;
    }
    else {
      qntnotas.push(0)
    }
    if (this.notas10 !== 0) {
      qntnotas.push(parseInt(saque / 10))
      saque %= 10;
    }
    else {
      qntnotas.push(0)
    }
    if (this.notas5 !== 0) {
      qntnotas.push(parseInt(saque / 5))
      saque %= 5;
    }
    else {
      qntnotas.push(0)
    }
    if (saque !== 0) {
      return
    }
    this.notas100 -= qntnotas[0]
    this.notas50 -= qntnotas[1]
    this.notas20 -= qntnotas[2]
    this.notas10 -= qntnotas[3]
    this.notas5 -= qntnotas[4]
  }
}

console.log(atm.numeroSerie) // 2344499
atm.numeroSerie = 34883444
console.log(atm.numeroSerie) // 34883444
// o ATM não tem dinheiro no início
console.log(atm.valor) // 0
// abastecendo com 33 notas de 100
atm.abastecerCedulas(33, 100)
// verificando a quantidade de cédulas de 100
// espera-se 33 cédulas
console.log(atm.notas100) // 33
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.notas5) // 0
console.log(atm.notas50) // 0
// abastecimento de cédulas não existentes são rejeitados
try {
  atm.abastecerCedulas(8, 3) // 8 cédulas de R$ 3,00
} catch (erro) {
  console.log(erro) // Não existem cédulas de 3 reais
}
// consultando o valor
console.log(atm.valor) // 33 * 100 = 3300 reais
// retirada rejeitada
atm.retirarValor(350) // não há cédulas de R$ 50,00, apenas não efetua, sem erros
console.log(atm.notas100) // 33
console.log(atm.valor) // 3300
// retirada válida
atm.retirarValor(300) // 3 cédulas de 100
console.log(atm.notas100) // 30
console.log(atm.valor) // 3000
// retirada rejeitada
atm.retirarValor(3100) // não há cédulas suficientes
console.log(atm.notas100) // 30
console.log(atm.valor) // 3000
// retirada válida
atm.retirarValor(3000) // vai esvaziar o ATM
console.log(atm.notas100) // 0
console.log(atm.valor) // 0
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecerCedulas(10, 10) // 10 cédulas de R$ 10,00
atm.abastecerCedulas(10, 50) // 10 cédulas de R$ 50,00
console.log(atm.notas10) // 10
console.log(atm.notas50) // 10
console.log(atm.valor) // 600 = 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirarValor(100) // retira 2 cédulas de R$ 50,00
console.log(atm.notas10) // 10
console.log(atm.notas50) // 8
console.log(atm.valor) // 500 = 10 * 10 + 8 * 50
// retirada combinada
atm.retirarValor(90) // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.notas10) // 6
console.log(atm.notas50) // 7
console.log(atm.valor) //  410 = 6 * 10 + 7 * 50
// incluir casos de teste com retiradas
// quem combinam 3 e 4 cédulas diferentes
// ---------------------------------------------------
atm.abastecerCedulas(10, 100)
atm.abastecerCedulas(10, 50)
atm.abastecerCedulas(10, 20)
atm.abastecerCedulas(10, 10)
atm.abastecerCedulas(10, 5)
console.log('Notas:')
console.log(atm.notas100)
console.log(atm.notas50)
console.log(atm.notas20)
console.log(atm.notas10)
console.log(atm.notas5)
atm.retirarValor(125)
console.log('Novas Notas:')
console.log(atm.notas100)
console.log(atm.notas50)
console.log(atm.notas20)
console.log(atm.notas10)
console.log(atm.notas5)
atm.retirarValor(75)
console.log('Novas Notas:')
console.log(atm.notas100)
console.log(atm.notas50)
console.log(atm.notas20)
console.log(atm.notas10)
console.log(atm.notas5)
atm.retirarValor(35)
console.log('Novas Notas:')
console.log(atm.notas100)
console.log(atm.notas50)
console.log(atm.notas20)
console.log(atm.notas10)
console.log(atm.notas5)
