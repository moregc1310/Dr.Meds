import { AbstractControl, ValidationErrors } from "@angular/forms";


export function passwordValidator(control:AbstractControl):ValidationErrors | null {
    const confirmPassword =control.value ;
    const password =control.root.get('password')?.value;
    if(confirmPassword !=password && password !=confirmPassword){
        return {isPasswordMisMatch:true}
    }else{
        return null ;
    }
}