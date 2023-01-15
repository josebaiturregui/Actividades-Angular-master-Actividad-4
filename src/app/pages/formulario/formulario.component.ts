import { Component } from '@angular/core';



interface FormLogin{
  
  email:string;
  password: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent{
  
  public emailValidatorPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  public onValidateBtn:boolean=false;

  public email:any='';
  public password:any='';


  formObject: FormLogin={
   
    password:'',
    email:'',
  }

  public onLogin():void{
   
    if(this.formObject.email.trim().length===0 && !this.formObject.email.match(this.emailValidatorPattern) || this.formObject.password.length < 9){
      
      return;
     } else if(!this.formObject.email.match(this.emailValidatorPattern)){
      return;
     }

      
      this.email = this.formObject.email;
      this.password = this.formObject.password;

      this.formObject={
      
      email:'',
      password:'',  
      }



  }
  public isVisibleButton(){
 

   if(!this.onValidateBtn){
      if( this.formObject.email.trim().length===0
      || this.formObject.password.trim().length < 9){
      
      return;
    } else if(!this.formObject.email.match(this.emailValidatorPattern)){
      return;
    }
    this.onValidateBtn = !this.onValidateBtn
   }
   else{
      this.onValidateBtn = !this.onValidateBtn
    }
  }

}
