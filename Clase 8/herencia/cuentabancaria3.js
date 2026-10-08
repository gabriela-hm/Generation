class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  consignar(monto) {
    this.saldo += monto;
    return `${this.titular} consignó $${monto}. Saldo: $${this.saldo}`;
  }

  retirar(monto) {
    if (monto > this.saldo) {
      return "Fondos insuficientes";
    }
    this.saldo -= monto;
    return `${this.titular} retiró $${monto}. Saldo: $${this.saldo}`;
  }
}

class CuentaAhorros extends CuentaBancaria {
  constructor(titular, saldo, tasaInteres) {
    super(titular, saldo);
    this.tasaInteres = tasaInteres;
  }

  retirar(monto) {
    if (this.saldo - monto < 50000) {
      return "No puedes dejar la cuenta con menos de $50000";
    }
    return super.retirar(monto);
  }

  calcularRendimiento() {
    const rendimiento = this.saldo * (this.tasaInteres / 100);
    return `${this.titular} gana $${rendimiento} de interés.`;
  }
}

const ana = new CuentaBancaria("Ana", 100000);
const laura = new CuentaAhorros("Laura", 100000, 5);
const cuentas = [ana, laura];

for (const cuenta of cuentas) {
  console.log(cuenta.retirar(60000));
}

console.log(laura.retirar(40000));
console.log(laura.calcularRendimiento());