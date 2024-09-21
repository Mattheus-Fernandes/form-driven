import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'userPassword'
})
export class UserPasswordPipe implements PipeTransform {
  transform(value: string): string {
    
    return value.replace(/./g, '*')

  }
}