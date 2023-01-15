import { Component } from '@angular/core';


interface Contacto{
  name: string;
  lastname:string;
  email:string;
  telephone: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  
  public onValidateBtn:boolean=false;

  public name:any='';
  public lastname:any='';
  public telephone:any='';
  public email:any='';


  formObject: Contacto={
    name: '',
    lastname: '',
    email:'',
    telephone:'',
  }

  public onSave():void{
   
    if(this.formObject.name.trim().length===0 || this.formObject.lastname.trim().length===0 || this.formObject.email.trim().length===0 || this.formObject.telephone.trim().length===0){
      
      return;
    }

      this.name = this.formObject.name;
      this.lastname = this.formObject.lastname;
      this.email = this.formObject.email;
      this.telephone = this.formObject.telephone;

      this.formObject={
      name:'',
      lastname:'',
      email:'',
      telephone:'',  
      }



  }
  public isVisibleButton(){
 

   if(!this.onValidateBtn){
      if( this.formObject.name.trim().length===0 || this.formObject.lastname.trim().length===0 || this.formObject.email.trim().length===0 
      || this.formObject.telephone.trim().length===0){
      
      return;
    }
    this.onValidateBtn = !this.onValidateBtn
   }
   else{
      this.onValidateBtn = !this.onValidateBtn
    }
  }

}
