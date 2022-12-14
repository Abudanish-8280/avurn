import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { TopbarComponent } from './header/topbar/topbar.component';
import { ContactDetailsComponent } from './header/topbar/contact-details/contact-details.component';
import { SmoiconsComponent } from './header/topbar/smoicons/smoicons.component';
import { MenubarComponent } from './header/menubar/menubar.component';
import { LogoComponent } from './header/menubar/logo/logo.component';
import { NavMenuComponent } from './header/menubar/nav-menu/nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { TestapiComponent } from './testapi/testapi.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TestpageComponent } from './testpage/testpage.component';
import { ReusableComponent } from './reusable/reusable.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms'; '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    TestimonialsComponent,
    ServicesComponent,
    BlogComponent,
    TopbarComponent,
    ContactDetailsComponent,
    SmoiconsComponent,
    MenubarComponent,
    LogoComponent,
    NavMenuComponent,
    PortfolioComponent,
    WhoweareComponent,
    TestapiComponent,
    ErrorpageComponent,
    TestpageComponent,
    ReusableComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
