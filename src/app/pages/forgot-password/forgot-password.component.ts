import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-forgot-password',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        InputTextModule,
        ButtonModule,
        IconFieldModule,
        InputIconModule
    ],
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
    private fb = inject(FormBuilder);
    private router = inject(Router);
    private message = inject(MessageService);

    loading = false;

    form = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
    });

    get email() { return this.form.controls.email; }

    async submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.loading = true;

        try {
            // Simulate API call
            await new Promise(res => setTimeout(res, 800));
            this.message.add({ severity: 'success', summary: 'Sent', detail: 'Check your email for reset instructions.' });
            // Optional: Redirect or stay on page
        } catch {
            this.message.add({ severity: 'error', summary: 'Error', detail: 'Could not send reset link.' });
        } finally {
            this.loading = false;
        }
    }
}
