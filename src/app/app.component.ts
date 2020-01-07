import { Component, NgModule, VERSION } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      email: new FormControl('',
        [Validators.required, Validators.maxLength(5)]),
      password: new FormControl('', [Validators.required])
    }, { updateOn: 'submit' })
    // updateOn can also be possible with blur and change
  }

  get email() {
    return this.form && this.form.get('email');
  }

    get password() {
    return this.form && this.form.get('password');
  }
}
