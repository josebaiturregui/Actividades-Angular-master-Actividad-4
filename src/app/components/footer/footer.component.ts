import { Component, OnInit } from '@angular/core';

interface linkFooter{
  titulo: string;
  icon:string;
  url:string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  datosMenuFooter: linkFooter[] = [
    {
      'titulo':'Github',
      'icon':'bi bi-github',
      'url':'https://github.com/'
    },
    {
      'titulo':'Twitter',
      'icon':'bi bi-twitter',
      'url':'https://twitter.com/'
    },
    {
      'titulo':'LinkedIn',
      'icon':'bi bi-linkedin',
      'url':'https://www.linkedin.com/'
    },
    {
      'titulo':'Google',
      'icon':'bi bi-google',
      'url':'https://www.google.com/'
    },
    {
      'titulo':'youtube',
      'icon':'bi bi-youtube',
      'url':'https://www.youtube.com/'
    },
    {
      'titulo':'StackOverflow',
      'icon':'bi bi-stack-overflow',
      'url':'https://stackoverflow.com/'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
