export class UserService{

    constructor(public number:number, public service:string, public plan:string,
        public validfrom:string, public validto:string, public amountdue:number,
        public paymentreceived:number, public paymentstatus:string, public daysleft:number){}

} 