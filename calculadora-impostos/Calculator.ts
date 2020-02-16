class Calculator {

    public salario: number

    constructor(salario: number){

        this.salario = salario

        let desconto_inss = this.desconto_inss(salario)
        let desconto_irrf = this.desconto_irrf(salario)

        let salario_liquido = salario - (desconto_irrf + desconto_inss) 

        console.log(`O seu salário bruto é: R$${salario} e seu salário liquido é: R$${salario_liquido}`)

    }

    public desconto_inss(salarioBruto: number): number{
        if(salarioBruto <= 1830.29){
            return (salarioBruto * 0.08)

        }else{
            if(salarioBruto > 1830.29 && salarioBruto < 3050.52){
                return (salarioBruto * 0.09)

            }else{
                if(salarioBruto > 3050.52){
                    return (salarioBruto * 0.11)

                }else{
                    return 0
                }
            }
        }
    }

    public desconto_irrf(salarioBruto: number): number{

        if(salarioBruto > 1903.99 && salarioBruto < 2826.65){
            return (salarioBruto * 0.075)

        }else{
            if(salarioBruto > 2826.65 && salarioBruto < 3751.05){
                return (salarioBruto * 0.15)

            }else{
                if(salarioBruto > 3751.05 && salarioBruto < 4664.68){
                    return (salarioBruto * 0.225)

                }else{
                    if(salarioBruto > 4664.68){
                        return (salarioBruto * 0.275)

                    }else{
                        return 0
                    }
                }
            }
        }

    }

}

export default Calculator