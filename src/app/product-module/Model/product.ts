export class Product{
    

    constructor(private pId:string, private category:string, private pName:string,
        private pDesc:string, private pPrice:number, private pQty:number ){
    }



    public set Pid(pId:string){
        this.pId = pId;
    }
    public get Pid(){
        return this.pId;
    }

    public set Category(category:string){
        this.Category = category;
    }
    public get Category(){
        return this.category;
    }

    public set Pname(pName:string){
        this.pName = pName;
    }
    public get Pname(){
        return this.pName;
    }

    public set Pdesc(pDesc:string){
        this.pDesc = pDesc;
    }
    public get Pdesc(){
        return this.pDesc;
    }

    public set Pprice(pPrice:number){
        this.pPrice = pPrice;
    }
    public get Pprice(){
        return this.pPrice;
    }

    public set Pqty(pQty:number){
        this.pQty = pQty;
    }
    public get Pqty(){
        return this.pQty;
    }
    
}