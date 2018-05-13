import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { EventService } from './services/event.service';
import { LinkComponent } from './link/link.component';
import { LinkService } from './services/link.service';
import { LinkDirective } from './link.directive';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HomeComponent,
    EventsComponent,
    UserComponent,
    LoginComponent,
    LinkComponent,
    LinkDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, EventService, LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
