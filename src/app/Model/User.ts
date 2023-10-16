 export class User{
    constructor(public fname:string, public lname:string, public dob:Date, public email:string,
                public number:number, public plan:string, public service:string, public data:number,
                public address:string, public dataleft:number, public dataused:number, public validfrom:Date,
                public validto:Date, public billingdate:Date, public isfresher:boolean, public paymentstatus:string,
                public state:string, public zip:string){}
}