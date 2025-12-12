import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'user-menu.html',
  styleUrls: ['./user-menu.css']
})
export class UserMenuComponent {

  @Input() isOpen = false;
  @Input() estaLogado = false;

  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  onClose() {
    this.close.emit();
  }

  onSidebarClick(event: Event) {
    event.stopPropagation();
  }

  navegar(rota: string) {
    this.router.navigate([rota]);
    this.onClose();
  }

  toggleAuth() {
    this.onClose();
    this.router.navigate(['/auth']);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.estaLogado = false;
    this.onClose();
  }
}
