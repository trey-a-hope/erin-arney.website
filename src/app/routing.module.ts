import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//Views
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FullBlogComponent } from './views/full-blog/full-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },   
  { path: 'full-blog', component: FullBlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',   redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],  
  declarations: []
})
export class RoutingModule { }
