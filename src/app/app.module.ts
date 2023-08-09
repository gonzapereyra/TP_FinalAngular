import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ISectionComponent } from './isection/isection.component';
import { ASectionComponent } from './asection/asection.component';
import { ServicesComponent } from './services/services.component';
import { WSectionComponent } from './wsection/wsection.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { OClientsComponent } from './oclients/oclients.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ISectionComponent,
    ASectionComponent,
    ServicesComponent,
    WSectionComponent,
    PortfolioComponent,
    ClientsComponent,
    TeamComponent,
    OClientsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
