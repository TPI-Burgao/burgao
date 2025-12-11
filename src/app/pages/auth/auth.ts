import { CommonModule } from '@angular/common';
import { TmplAstForLoopBlockEmpty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario{
  name: String;
  email: String;
  password: String;
  cpf: String;
  telefone: String;
  dataNascimento: Date;

}

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth implements OnInit {
  form!: FormGroup;
  isLoginMode = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(): void {
    this.form = this.fb.group({
      name:[''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }) 
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  getUsuarios (): Usuario[] {
    const dados = localStorage.getItem('usuarios')
    return dados ? JSON.parse(dados) : [];
  } 

  salvarUsuarios(lista: Usuario[]):void{
    localStorage.setItem('usuario', JSON.stringify(lista))
  }


  onSubmit(): void {
    console.log('form submit enviado');
    if (this.form.invalid) return;
    console.log ('Form invalido', this.form.errors)
  }
}
