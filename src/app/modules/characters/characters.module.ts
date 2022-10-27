import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './characters-list/characters-list.component';

@NgModule({
  declarations: [
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
