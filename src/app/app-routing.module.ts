import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { TestapiComponent } from './testapi/testapi.component';
import { TestpageComponent } from './testpage/testpage.component';
import { WhoweareComponent } from './whoweare/whoweare.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'whoweare',
    component: WhoweareComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
{
  path: 'contactus',
  component: ContactusComponent
},
{
  path: 'testapi',
  component: TestapiComponent
},
{
  path: 'testpage',
  component: TestpageComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
  path: '**',
  component: ErrorpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
