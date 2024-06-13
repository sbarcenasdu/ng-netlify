import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nested-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="max-w-md mx-auto mt-10 p-6 bg-gray-400 shadow-md rounded-md">
      <h1 class="text-2xl font-bold text-center mb-6">Nested Form</h1>
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
          <input id="firstName" formControlName="firstName" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          @if (userForm.get('firstName')?.invalid && userForm.get('firstName')?.touched) {
            <div class="text-red-600 text-sm mt-1">
              First Name is required.
            </div>
          }
        </div>

        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input id="lastName" formControlName="lastName" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          @if (userForm.get('lastName')?.invalid && userForm.get('lastName')?.touched) {
            <div class="text-red-600 text-sm mt-1">
              Last Name is required.
            </div>
          }
        </div>

        <div formGroupName="contact">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" formControlName="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            @if (userForm.get('contact.email')?.invalid && userForm.get('contact.email')?.touched) {
              <div class="text-red-600 text-sm mt-1">
                Email is required and must be a valid email address.
              </div>
            }
          </div>

          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input id="phone" formControlName="phone" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            @if (userForm.get('contact.phone')?.invalid && userForm.get('contact.phone')?.touched) {
              <div class="text-red-600 text-sm mt-1">
                Phone is required.
              </div>
            }
          </div>
        </div>

        <div formArrayName="addresses">
          <div *ngFor="let address of addresses.controls; let i = index" [formGroupName]="i" class="mb-4">
            <label for="street-{{i}}" class="block text-sm font-medium text-gray-700">Street</label>
            <input id="street-{{i}}" formControlName="street" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            @if (address.get('street')?.invalid && address.get('street')?.touched) {
              <div class="text-red-600 text-sm mt-1">
                Street is required.
              </div>
            }

            <label for="city-{{i}}" class="block text-sm font-medium text-gray-700">City</label>
            <input id="city-{{i}}" formControlName="city" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            @if (address.get('city')?.invalid && address.get('city')?.touched) {
              <div class="text-red-600 text-sm mt-1">
                City is required.
              </div>
            }
          </div>
        </div>

        <button type="submit" [disabled]="userForm.invalid" class="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    :host{
      display: block;
      min-height: 70vh;
    }
  `]
})
export class NestedFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contact: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      }),
      addresses: this.fb.array([
        this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required]
        })
        // ,
        // this.fb.group({
        //   street: ['', Validators.required],
        //   city: ['', Validators.required]
        // })
      ])
    });
  }

  ngOnInit(): void {}

  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // Enviar el formulario a una API o manejar los datos
    }
  }
}
