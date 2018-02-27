import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule, enableProdMode }         from '@angular/core';
import { NgbModule }                        from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule }        from 'angular2-fontawesome/angular2-fontawesome'
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Main App
import { AppComponent }                     from './app.component';

//Views
import { HomeComponent }                    from './views/home/home.component';
import { AboutComponent }                   from './views/about/about.component';
import { NavbarComponent }                  from './views/navbar/navbar.component';
import { FooterComponent }                  from './views/footer/footer.component';
import { ProjectsComponent }                from './views/projects/projects.component';
import { BlogComponent }                    from './views/blog/blog.component';
import { ContactComponent }                 from './views/contact/contact.component';

//Routing
import { RoutingModule }                    from './/routing.module';

//Services
import { BlogService }                      from './services/blog.service';
import { EmailService }                     from './services/email.service';

//Pipes
import { AlertTextPipe }                    from './pipes/AlertTextPipe';

import { HashLocationStrategy, 
         LocationStrategy }                  from '@angular/common';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FullBlogComponent } from './views/full-blog/full-blog.component';

// enableProdMode();  //TODO: UNCOMMENT BEFORE PUSHING TO PROD.

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    BlogComponent,
    ContactComponent,
    AlertTextPipe,
    PageNotFoundComponent,
    FullBlogComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BlogService,
    EmailService, 
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
