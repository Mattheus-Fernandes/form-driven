import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IGenre } from 'src/app/interface/genre.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  msgSuccess: string = ''
  registerSucess: boolean = false
  hasLogin: boolean = false

  genreSelected: number | undefined
  genres: IGenre[] = [
    {id: 1, description: 'Feminino'},
    {id: 2, description: 'Masculino'},
    {id: 3, description: 'Prefiro não dizer'}
  ]

  @Output() backRotationCard = new EventEmitter<boolean>()

  constructor(
    private readonly _usersService: UsersService
  ){}

  backRotation(){
    this.backRotationCard.emit(this.hasLogin)
  }

  onSubmit(form: NgForm){
    const formValue = form.value

    if(form.valid) {
      this._usersService.registerUser(formValue)
      
      this.registerSucess = true
      this.msgSuccess = 'Usuário criado com sucesso.'

      setInterval(() => {
        this.registerSucess = false
      },3000)

      form.reset()
    }
  }
} 
