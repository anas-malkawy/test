import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule
    ],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    private fb = inject(FormBuilder);
    private router = inject(Router);
    private message = inject(MessageService);

    loading = false;

    form = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    get name() { return this.form.controls.name; }
    get email() { return this.form.controls.email; }
    get password() { return this.form.controls.password; }

    async submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.loading = true;

        try {
            // Simulate API cal
            await new Promise(res => setTimeout(res, 800));
            this.message.add({ severity: 'success', summary: 'Success', detail: 'Account created successfully.' });
            this.router.navigate(['/login']);
        } catch {
            this.message.add({ severity: 'error', summary: 'Error', detail: 'Registration failed.' });
        } finally {
            this.loading = false;
        }
    }
}
