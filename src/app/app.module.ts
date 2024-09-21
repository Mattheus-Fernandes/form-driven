import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormsModule } from '@angular/forms';

import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FlipperComponent } from './components/flipper/flipper.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LengthValidatorDirective } from './directives/length-validator.directive';
import { EmailValidatorDirective } from './directives/register/email-validator.directive';
import { PhoneValidatorDirective } from './directives/register/phone-validator.directive';
import { PhoneMaskDirective } from './directives/register/phone-mask.directive';
import { FormLabelDirective } from './directives/form/form-label.directive';
import { FormRowDirective } from './directives/form/form-row.directive';
import { FormTitleDirective } from './directives/form/form-title.directive';
import { FormErrorDirective } from './directives/form/form-error.directive';
import { UserGenrePipe } from './pipes/user-genre.pipe';
import { UserPasswordPipe } from './pipes/user-password.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    PasswordValidatorDirective,
    FormRegisterComponent,
    FlipperComponent,
    ErrorMessageComponent,
    LengthValidatorDirective,
    EmailValidatorDirective,
    PhoneValidatorDirective,
    PhoneMaskDirective,   
    FormLabelDirective,
    FormRowDirective,
    FormTitleDirective,
    FormErrorDirective,
    UserGenrePipe,
    UserPasswordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
