import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    DividerModule,
    ToastModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private message = inject(MessageService);

  loading = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  get email() { return this.form.controls.email; }
  get password() { return this.form.controls.password; }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.message.add({ severity: 'error', summary: 'Missing info', detail: 'Please enter email and password.' });
      return;
    }

    this.loading = true;

    try {
      // TODO: call your API here
      await new Promise(res => setTimeout(res, 600));

      this.message.add({ severity: 'success', summary: 'Welcome', detail: 'Login successful.' });

      // example navigation:
      // await this.router.navigateByUrl('/home');
    } catch {
      this.message.add({ severity: 'error', summary: 'Login failed', detail: 'Invalid credentials.' });
    } finally {
      this.loading = false;
    }
  }
}
