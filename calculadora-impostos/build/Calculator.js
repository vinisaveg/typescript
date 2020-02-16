var Calculator = /** @class */ (function () {
    function Calculator(salario) {
        this.salario = salario;
        var desconto_inss = this.desconto_inss(salario);
        var desconto_irrf = this.desconto_irrf(salario);
        var salario_liquido = salario - (desconto_irrf + desconto_inss);
        console.log("O seu sal\u00E1rio bruto \u00E9: R$" + salario + " e seu sal\u00E1rio liquido \u00E9: R$" + salario_liquido);
    }
    Calculator.prototype.desconto_inss = function (salarioBruto) {
        if (salarioBruto <= 1830.29) {
            return (salarioBruto * 0.08);
        }
        else {
            if (salarioBruto > 1830.29 && salarioBruto < 3050.52) {
                return (salarioBruto * 0.09);
            }
            else {
                if (salarioBruto > 3050.52) {
                    return (salarioBruto * 0.11);
                }
                else {
                    return 0;
                }
            }
        }
    };
    Calculator.prototype.desconto_irrf = function (salarioBruto) {
        if (salarioBruto > 1903.99 && salarioBruto < 2826.65) {
            return (salarioBruto * 0.075);
        }
        else {
            if (salarioBruto > 2826.65 && salarioBruto < 3751.05) {
                return (salarioBruto * 0.15);
            }
            else {
                if (salarioBruto > 3751.05 && salarioBruto < 4664.68) {
                    return (salarioBruto * 0.225);
                }
                else {
                    if (salarioBruto > 4664.68) {
                        return (salarioBruto * 0.275);
                    }
                    else {
                        return 0;
                    }
                }
            }
        }
    };
    return Calculator;
}());
export default Calculator;
