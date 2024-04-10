import {FormControl,FormGroup} from '@angular/forms';

export default class validateForm
{
    static validateAllFormField(formGroup:FormGroup)
    {
      Object.keys(formGroup.controls).forEach(field=>{
        const control = formGroup.get(field);
        if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        }
        else if(control instanceof FormGroup)
        {
          this.validateAllFormField(control)
        }
      })
    }

    static validateAllFormFeild(formGroup:FormGroup)
{
  Object.keys(formGroup.controls).forEach(field=>{
    const control = formGroup.get(field);
    if(control instanceof FormControl){
      control.markAsDirty({onlySelf:true});
    }
    else if(control instanceof FormGroup)
    {
      this.validateAllFormField(control)
    }
  })
}
}