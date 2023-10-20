export class BillHistory{

    constructor(public mobilenumber:number,public date:Date,public amount:number,public billnumber:string,
        public previousbalance:number, public currentcharge:number){}
}