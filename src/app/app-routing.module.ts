import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { HeaderPcComponent } from './header-pc/header-pc.component'
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'header-pc', component: HeaderPcComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'order-page', component: OrderPageComponent },
  { path: 'contact-page', component: ContactPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
