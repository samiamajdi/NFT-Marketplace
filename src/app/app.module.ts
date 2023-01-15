import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {Routes} from '@angular/router';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { Home1Component } from './home1/home1.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilecontainerComponent } from './profilecontainer/profilecontainer.component';
import { FooterComponent } from './footer/footer.component';
import { CreateCategorieComponent } from './create-categorie/create-categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { ViewCategorieComponent } from './view-categorie/view-categorie.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mint/:cat', component: Home1Component },
  { path: 'mint', component: Home1Component },
  {path:'createCategorie',component:CreateCategorieComponent},
  {path:'listeCategorie',component:ListeCategorieComponent},
  {path:'viewCategorie/:a',component:ViewCategorieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    ProfileComponent,
    ProfilecontainerComponent,
    FooterComponent,
    CreateCategorieComponent,
    ListeCategorieComponent,
    ViewCategorieComponent,
    

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,


    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
