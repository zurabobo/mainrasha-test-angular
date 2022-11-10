import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BloggersComponent } from './bloggers/bloggers.component';
import { TitleComponent } from './title/title.component';
import { SortMenuComponent } from './sort-menu/sort-menu.component';
import { MainComponent } from './main/main.component';
import { RouteBarComponent } from './route-bar/route-bar.component';
import { CasesComponent } from './cases/cases.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { BloggersCardComponent } from './bloggers-card/bloggers-card.component';
import { ExitAgencyComponent } from './exit-agency/exit-agency.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { BloggerComponent } from './blogger/blogger.component';
import { SidebarModule } from 'ng-sidebar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CardService } from './card.service';
import { SidenavService } from './sidenav/sidenav.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LangBarComponent } from './lang-bar/lang-bar.component';
import { VideosComponent } from './videos/videos.component';
import { VideosCardComponent } from './videos-card/videos-card.component';
import { VideoCardService } from './videos-card/videos-card.service';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    BloggersComponent,
    TitleComponent,
    SortMenuComponent,
    MainComponent,
    RouteBarComponent,
    CasesComponent,
    UnderConstructionComponent,
    BloggersCardComponent,
    ExitAgencyComponent,
    ContactsComponent,
    FooterComponent,
    BloggerComponent,
    SidenavComponent,
    LangBarComponent,
    VideosComponent,
    VideosCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    SidebarModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [CardService, SidenavService, VideoCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
