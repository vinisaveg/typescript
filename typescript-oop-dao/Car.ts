import Vehicle from "./Vehicle"

class Car extends Vehicle{

    private doorsNum: number

    constructor(model: string, doorsNum: number){
        super()
        this.model = model
        this.doorsNum = doorsNum
    }


}

export default Car