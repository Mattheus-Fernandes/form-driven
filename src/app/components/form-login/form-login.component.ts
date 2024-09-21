import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/interface/user.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit{

  loginSuccess: boolean = false
  
  hasUser: IUser = {} as IUser
  
  msg: string = ''
  
  isValid: boolean = true
  
  private list: IUser[] = []
  
  @Output() sendValueRotate = new EventEmitter<boolean>()

  constructor(
    private readonly _usersService: UsersService
  ){}

  ngOnInit(){
    this._usersService.getUsers().subscribe(res => this.list = res)
  }

  onRotateCard(){
    this.sendValueRotate.emit(this.isValid)
  }

  onSubmit(form: NgForm){
    const user = form.value.user
    const password = form.value.password
    
    if(form.valid) {
      const foundUser = this.list.find((e:any) => e.user === user && e.password === password )
      
      foundUser ? this.hasUser = foundUser : this.msg = 'Usuário inválido'
      
      this.loginSuccess = true
    }
  }
}
