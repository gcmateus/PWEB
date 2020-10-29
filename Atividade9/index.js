function Conta() {
    var nome;
    var banco;
    var numeroConta;
    var saldo;
    
    this.setNome = function (value) {
        nome = value;
    }

    this.setBanco = function (vBanco) {
        banco = vBanco;
    }
    
    this.setNumeroConta = function (vNumeroConta) {
        numeroConta = vNumeroConta;
    }

    this.setSaldo = function (vSaldo) {
        saldo = vSaldo;
    }

    this.getNome = function () {
        return nome;
    } 

    this.getBanco = function () {
        return banco;
    }

    this.getNumeroBanco = function () {
        return numeroConta;
    }

    this.getSaldo = function () {
        return saldo;
    }
}

function ContaCorrente(){
    var saldoEspecial;

    this.setSaldoEspecial = function (vSaldoEspecial) {
        this.saldoEspecial = vSaldoEspecial;
    }

    this.getSaldoEspecial = function () {
        return this.saldoEspecial;
    } 
}

function ContaPoupanca(){
    var juros;

    this.setJuros = function (vJuros) {
        this.juros = vJuros;
    }

    this.getJuros = function () {
        return this.juros;
    } 
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

nContaCorrente = new ContaCorrente();
nContaCorrente.setNome('MATEUS CAMARGO');
nContaCorrente.setBanco('BANCO BANCO');
nContaCorrente.setNumeroConta('1111100000');
nContaCorrente.setSaldo('10000');
nContaCorrente.setSaldoEspecial('20000');

nContaPoupanca = new ContaPoupanca();
nContaPoupanca.setNome('MATEUS SEGUNDO');
nContaPoupanca.setBanco('BANQUINHO BANQUINHO');
nContaPoupanca.setNumeroConta('22222111111');
nContaPoupanca.setSaldo('30000');
nContaPoupanca.setJuros('15')

        alert(`CONTA CORRENTE 
        \n Nome: ${nContaCorrente.getNome()}
        \n Banco: ${nContaCorrente.getBanco()}
        \n Numero da Conta: ${nContaCorrente.getNumeroBanco()}
        \n Saldo: R$${nContaCorrente.getSaldo()}
        \n Juros: ${nContaCorrente.getSaldoEspecial()}%`)



        alert(`CONTA POUPANÇA 
        \n Nome: ${nContaPoupanca.getNome()}
        \n Banco: ${nContaPoupanca.getBanco()}
        \n Numero da Conta: ${nContaPoupanca.getNumeroBanco()}
        \n Saldo: R$${nContaPoupanca.getSaldo()}
        \n Juros: ${nContaPoupanca.getJuros()}%`)

