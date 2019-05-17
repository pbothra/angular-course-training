import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CoursesModule } from './courses/courses.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { StaticpagesModule } from './staticpages/staticpages.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule }        from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    AdminModule,
    AuthModule,
    StaticpagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
