import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports: [ 
  		BrowserModule,
   		FormsModule,
      HttpModule, 
      AppRoutingModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      

   ],
  declarations: [ 
  	AppComponent,
   	DashboardComponent,
   	HeroDetailComponent,
   	HeroesComponent
  ],
  providers: [HeroService],
  bootstrap:  [ AppComponent ]
  
})

export class AppModule { }
