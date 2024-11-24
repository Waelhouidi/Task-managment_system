import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  private authService = inject(AuthService);
  private router = inject(Router);

  async login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in both email and password.';
      return;
    }

    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/project-list']); // Redirect after successful login
    } catch (error: any) {
      this.errorMessage = error.message; // Display error message
    }
  }
}
