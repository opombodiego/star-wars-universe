import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  menuItems: any = [];

  constructor() { }

  ngOnInit() {
    this.menuBuilder();
  }

  menuBuilder() {
    this.menuItems = [
      { label:'Dashboard', icon:'pi pi-fw pi-home', routerLink: '/dashboard' },
      { label:'Filmes', icon:'pi pi-fw pi-play', routerLink: '/movies' },
      { label:'Personagens', icon:'pi pi-fw pi-users', routerLink: '/characters' }
    ];
  }

}
