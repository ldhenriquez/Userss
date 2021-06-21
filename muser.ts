
export class user {
    _id?: any;
    name:any;
    lastname:any;
    email: any;
    identification: any;
    phone: any;

    constructor(  _id: String ,  name:string, lastname:string, email: string, identification: string, phone: string){
        this._id = _id;   
        this.name = name;
        this.lastname= lastname;
        this.email= email;
        this.identification= identification;
        this.phone= phone;

    }
}