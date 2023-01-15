import { Component, OnInit } from '@angular/core';


interface linkMenu{
  titulo: string;
  icon:string;
  routerLink:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  opened=false;
  itemsMenu: linkMenu[] = [
    {
      'titulo':'Home',
     'icon':'bi bi-house',
     'routerLink':''
    },
    {
     'titulo':'Curriculo',
     'icon':'bi bi-file-text',
     'routerLink':'/cv'
    },
    {
     'titulo':'Contacto',
     'icon':'bi bi-clipboard2-check',
     'routerLink':'/contact',
     
    },
    {
      'titulo':'Formulario',
      'icon':'bi bi-arrow-up-right-square',
      'routerLink':'/formulario',
      
     },
     {
      'titulo':'Pokemons',
      'icon':'bi bi-disc',
      'routerLink':'/pokemons', 
     }

  ];

  showIcon:boolean = true;
  addClass:string = "hidden";
  noAddClass:string = "visible";
  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
