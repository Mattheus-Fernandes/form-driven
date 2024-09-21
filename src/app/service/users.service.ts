import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private usersList: any[] = []

  getUsers(): Observable<any> {

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.usersList)
        observer.complete()
      }, 3000)
    })
  }

  registerUser(user: any){
    this.usersList.push(user)
  }
}