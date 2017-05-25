import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

/*
	For reactive approach to work we need
	to import ReactiveFormsModule in app.module
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
  	this.signupForm = new FormGroup({
  		// defining the controls for this form

  		/* 
  			wrapping keys in quotes to make sure that during
				minification, this property name is kept. Though
				this might not be necessary
			*/

			/*
				we can have form groups in FormGroup and also	need 
				reflect this in our markup using formGroupName directive 
			*/
			'userdata': new FormGroup({
				// default value null
	  		'username': new FormControl(null, Validators.required),
	  		'email'		: new FormControl(null, [Validators.required, Validators.email]) 
			}),

			// default value 'male'
  		'gender' : new FormControl('male'),
  		'hobbies': new FormArray([])
  	})
  }

  onSubmit() {
  	console.log(this.signupForm)
  }

  onAddHobby() {
  	const control = new FormControl(null, Validators.required);
  	(<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}
