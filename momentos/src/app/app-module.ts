import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './components/pages/about/about';
import { Home } from './components/pages/home/home';
import { NewMoment } from './components/pages/new-moment/new-moment';
import { MomentsForm } from './components/moments-form/moments-form';
import { Messagens } from './components/messagens/messagens';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Moment } from './components/pages/moment/moment';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    About,
    Home,
    NewMoment,
    MomentsForm,
    Messagens,
    Moment
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule

/*     NgbModule
 */  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
