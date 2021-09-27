import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AllDetailsComponent } from './all-details/all-details.component';
import { AuthguardGuard } from './authguard.guard';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  
  {path:"",component:MainComponent},
  {path:'register', component: LoginComponent},
  {path:'alldetails', component: AllDetailsComponent,canActivate:[AuthguardGuard]},
  {path:'delete',component:DeleteComponent,canActivate:[AuthguardGuard]},
  {path:'update',component:UpdateComponent,canActivate:[AuthguardGuard]},
  {path:'signin',component:SigninComponent},
  {path:'adminsignin',component:AdminsigninComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**',redirectTo:""},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[LoginComponent,AllDetailsComponent,MainComponent,DeleteComponent,UpdateComponent,SigninComponent,AdminsigninComponent,ProfileComponent]
