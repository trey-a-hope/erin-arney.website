import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { HttpModule }                   from '@angular/http';

import { AppComponent } from './app.component';

//Views
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';

//Routing
import { RoutingModule } from './/routing.module';

//Services
import { BlogService }                  from './services/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    HttpModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
