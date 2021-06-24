import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { minusculoValidator } from './minusculo.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private UsuarioExisteService: UsuarioExisteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      fullName: ['', [Validators.minLength(4), Validators.required]],
      userName: [
        '',
        [minusculoValidator, Validators.required],
        [this.UsuarioExisteService.usuarioJaExiste()]
      ],
      password: [''],
    },
    {
      validators: [usuarioSenhaIguaisValidator],
    });
  }

  cadastrar(){

    console.log(this.novoUsuarioForm);
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);

    if (this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      //console.log(novoUsuario);
      this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(() => {

        this.router.navigate(['']);

      },
        (error) => {
          console.log(error);
        }
      );
    }




  }
}
