import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="max-w-md mx-auto mt-10 p-6 bg-gray-500 shadow-md rounded-md">
      <h1 class="text-2xl font-bold text-center mb-6">Dynamic Form</h1>
      <form [formGroup]="dynamicForm" (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input id="name" formControlName="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          @if (dynamicForm.get('name')?.invalid && dynamicForm.get('name')?.touched) {
            <div class="text-red-600 text-sm mt-1">
              Name is required.
            </div>
          }
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" formControlName="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          @if (dynamicForm.get('email')?.invalid && dynamicForm.get('email')?.touched) {
            <div class="text-red-600 text-sm mt-1">
              Email is required and must be a valid email address.
            </div>
          }
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

            <button type="button" (click)="removeAddress(i)" class="mt-2 text-red-600">Remove Address</button>
          </div>
        </div>

        <button type="button" (click)="addAddress()" class="w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add Address</button>

        <button type="submit" [disabled]="dynamicForm.invalid" class="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
      </form>
    </div>
  `,
  styles: [`
  `]
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  get addresses(): FormArray {
    return this.dynamicForm.get('addresses') as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required]
    }));
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  onSubmit(): void {
    if (this.dynamicForm.valid) {
      console.log(this.dynamicForm.value);
      // Enviar el formulario a una API o manejar los datos
    }
  }
}
