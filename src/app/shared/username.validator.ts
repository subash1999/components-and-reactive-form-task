import { AbstractControl, ValidatorFn } from '@angular/forms';


export function forbiddenStringValidator(forbiddenRegExp: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key:string]: any } | null => {
    const forbidden  = forbiddenRegExp.test(control.value);
    return forbidden ? {'forbiddenString':{value:control.value}} : null;
   }
}
