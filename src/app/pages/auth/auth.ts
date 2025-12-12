import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Usuario {
  name: string;
  email: string;
  password: string;
  cpf: string;
  telefone: string;
  dataNascimento: Date; 
}

@Component({
  selector: 'app-auth',
  standalone: true, 
  imports: [FormsModule, ReactiveFormsModule, CommonModule], 
  templateUrl: './auth.html', 
  styleUrls: ['./auth.css']
})
export class Auth implements OnInit {
  
  form!: FormGroup; 
  isLoginMode = true; 

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setupForm();
  }

  setupForm(): void {
    this.form = this.fb.group({
      name: [''],
      cpf: [''],
      telefone: [''],
      dataNascimento: [''],
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
    this.setValidators(); 
  }

  setValidators(): void {
    if (!this.isLoginMode) {
      this.form.controls['name'].setValidators(Validators.required);
      this.form.controls['cpf'].setValidators([Validators.required, Validators.minLength(11)]); 
      this.form.controls['telefone'].setValidators(Validators.required);
      this.form.controls['dataNascimento'].setValidators(Validators.required);
    } else {
      this.form.controls['name'].clearValidators();
      this.form.controls['cpf'].clearValidators();
      this.form.controls['telefone'].clearValidators();
      this.form.controls['dataNascimento'].clearValidators();
    }
    
    this.form.controls['name'].updateValueAndValidity();
    this.form.controls['cpf'].updateValueAndValidity();
    this.form.controls['telefone'].updateValueAndValidity();
    this.form.controls['dataNascimento'].updateValueAndValidity();
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.form.reset(); 
    this.setValidators(); 
  }

  getUsuarios(): Usuario[] {
    const dados = localStorage.getItem('usuarios');
    return dados ? JSON.parse(dados) : [];
  } 

  salvarUsuarios(lista: Usuario[]): void {
    localStorage.setItem('usuarios', JSON.stringify(lista));
  }

  onSubmit(): void {
    
    if (this.form.invalid) {
      console.log('Formulário Inválido! Erros:', this.form.errors);
      this.form.markAllAsTouched(); 
      return;
    }

    const { name, email, password, cpf, telefone, dataNascimento } = this.form.value;
    const usuarios = this.getUsuarios();

    if (this.isLoginMode) {
      const usuario = usuarios.find(u => u.email === email && u.password === password);
      
      if (usuario) {
        console.log('Login bem-sucedido!', usuario);
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        this.router.navigate(['/home']); 
      } else {
        alert('Email ou senha inválidos!');
      }

    } else {
      const usuarioJaExiste = usuarios.some(u => u.email === email);

      if (usuarioJaExiste) {
        alert('Este email já está cadastrado!');
        return;
      }

      const novoUsuario: Usuario = { name, email, password, cpf, telefone, dataNascimento };
      usuarios.push(novoUsuario);
      this.salvarUsuarios(usuarios);
      
      alert('Cadastro criado com sucesso! Faça o login.');
      this.toggleMode(); 
    }
  }
}