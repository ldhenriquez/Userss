import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import { user } from '../models/muser';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {


  listuser : user[]=[];
  myform!: FormGroup;

  isUpdate:boolean = false
  
  User: user = {
    _id: null, 
    name:null,
    lastname:null,
    email: null,
    identification: null,
    phone: null
  } 


  constructor(private _userservice: UsersService) {
    
  }
  
  ngOnInit(): void {
     this.buildForm(); 
    this.obteneruser();
  }

  reset(){
    this.myform.reset()
    this.isUpdate = false
  }

  
  saveuser(){
        
        this._userservice.saveuser(this.User).subscribe((data: any) =>{
          console.log(this.User)
          alert(data.message)
          this.obteneruser()
          this.reset()
        }, Error =>{
          console.log(Error)
          alert('error al guardar');
        });
    
  }

  saveactuser(){
    if(this.User._id !==null){
      //editar user
      this._userservice.editar(this.User._id, this.User).subscribe(data => {
        alert('Usuario actualizado');
        this.obteneruser()
        this.reset()
        
      }, Error =>{
        alert('error al actualizar');
      })
    }
  }

   private buildForm() {
    this.myform = new FormGroup({
      _id: new FormControl('', [Validators.required]), 
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      identification: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    });

    this.myform.valueChanges
    .subscribe(value => {
      this.User = value
    });
  } 
   
  obteneruser(){
    this._userservice.getuser().subscribe(data => {
      this.listuser=data;
      console.log(data);
      }, error =>{
        console.log(error);
      })
  }
  


   cambiaruser(user:any){
    console.log(user)
     this.myform.setValue({_id : user._id,
      name:user.name?user.name:"",
      lastname:user.lastname?user.lastname:"",
      email: user.email? user.email:"",
      identification: user.identification?user.identification:"",
      phone: user.phone?user.phone:""

    }
    ); 
    
    this.isUpdate = true
      
  } 
    
   
};
