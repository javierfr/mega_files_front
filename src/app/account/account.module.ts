import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { SignoutModule } from './signout/signout.module';
import { LockScreenModule } from './lock-screen/lock-screen.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { EmailVerificationModule } from './email-verification/email-verification.module';
import { TwostepVerificationModule } from './twostep-verification/twostep-verification.module';
import { ThankyouModule } from './thankyou/thankyou.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SigninModule,
    SignupModule,
    SignoutModule,
    LockScreenModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    EmailVerificationModule,
    TwostepVerificationModule,
    ThankyouModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule { }
