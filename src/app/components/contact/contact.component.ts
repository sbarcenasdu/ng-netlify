import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
        >
          Contact Us
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form
          [formGroup]="contactForm"
          (ngSubmit)="onSubmit()"
          class="space-y-8"
        >
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              formControlName="email"
            />
            @if(contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
              @if(contactForm.get('email')?.errors?.['required']){
                <div class="text-orange-300">
                  Email is required
                </div>
              }
              @if(contactForm.get('email')?.errors?.['email']){
                <div class="text-orange-300">
                  Email is invalid
                </div>
              }            
            }
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              formControlName="subject"
            />
            @if (contactForm.controls['subject'].hasError('required') && contactForm.controls['subject'].touched) {
              <div class="text-orange-300">
                Subject is required
              </div>
            }
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >Your message</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              formControlName="message"
            ></textarea>
            @if(messageField.invalid && messageField.touched){
              <div class="text-orange-300">
                Message is required
              </div>
            }
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  `,
  styles: ``,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get messageField(){
    return this.contactForm.controls['message'];
  }
  

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.contactForm.valid);
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);

      // this.http
      //   .post('https://jsonplaceholder.typicode.com/users', this.contactForm.value)
      //   .subscribe((response) => {
      //     console.log('User registered successfully', response);
      //   });
    }
  }
}
