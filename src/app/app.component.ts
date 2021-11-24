// import { Component } from '@angular/core';
// import { FormControl} from '@angular/forms';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angular-forms';
//   tab = 1;
//   fname = new FormControl(formState ''); // buat ambil value dari field pada form
//   email = new FormControl(formState '');
//   lname = new FormControl(formState '');
//   nim = new FormControl(formState '');
//   setData(){
//     alert('Data has been set');
//     localStorage.setItem('fname', this.fname.value);
//     localStorage.setItem('lname', this.lname.value);
//     localStorage.setItem('nim', this.nim.value);
//     localStorage.setItem('email', this.email.value);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: '.app.component.html',
  styleUrls: ['.app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-forms';
  dataForm: FormGroup; // deklarasi form groups
  submitted = false;
  check = false;
  tab = 1;

  constructor(private formBuilder:  FormBuilder){ } // parameter constructor ini akan digunakan untuk get

  ngOnInit(): void { // disini kita akan deklarasi data form, kita taruh input field di html ini
    this.dataForm = this.formBuilder.group(controlsConfig: {   
    fname:['', Validators.required],
    lname:['', Validators.required],
    nim:['', Validators.required],
    email:['', Validators.required, Validators.email],
    password:['', [Validators.required, Validators.minLength(minLength:8)]],
    cpassword:['', [Validators.required]]
    }, options: {validators: this.checlPasswords});
  }

  checkPassword(fg: FormGroup){ // untuk check password dan confirm password sama atau tidak
    const pass = fg.controls.password.value;
    const cpass = fg.controls.cpassword.value;
    // console.log();
    const control = fg.controls.password;
    const matchcontrol = fg.controls.cpassword;
    if (pass === cpass){
      matchcontrol.setErrors(errors: null);
      return true;
    }else {
      matchcontrol.setErrors( errors: {mustMatch: true} );
      return false;
    }

  }
  get f(){ // getter untuk ambil value dari data form 
    return this.dataForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.dataForm.invalid){
      alert('Input data error');
      return;
    } else{
      alert('Data has been set');
      localStorage.setItem('fname', this.f.fname.value);
      localStorage.setItem('lname', this.f.lname.value);
      localStorage.setItem('nim', this.f.nim.value);
      localStorage.setItem('email', this.f.email.value);
    }
  }
}
