import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhonenumbervalidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting:PhonenumbervalidatorDirective,
    multi: true
  }]
})
export class PhonenumbervalidatorDirective implements Validator{
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.length != 10) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
  }
  constructor() { }


}