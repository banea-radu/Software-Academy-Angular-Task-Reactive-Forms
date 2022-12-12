import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    name: [null, Validators.compose(
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*')
      ]
    )],
    email: [null, Validators.compose(
      [
        Validators.required,
        Validators.email
      ]
    )],
    subject: [null, Validators.compose(
      [
        Validators.required,
        Validators.minLength(5)
      ]
    )],
    message: [null, Validators.compose(
      [
        Validators.required,
        Validators.minLength(20)
      ]
    )]
  })

  constructor (private fb: FormBuilder) {
  }

  onSubmit() {
    console.log(this.contactForm);
    console.log("Form Validity: ", this.contactForm.valid);
    console.log(" - Name Validity: ", this.contactForm.controls.name.valid);
    console.log(" - Email Validity: ", this.contactForm.controls.email.valid);
    console.log(" - Subject Validity: ", this.contactForm.controls.subject.valid);
    console.log(" - Message Validity: ", this.contactForm.controls.message.valid);
    if (this.contactForm.valid) {
      alert("Form Validation Passed! Form Submitted");
    }
  }
}
