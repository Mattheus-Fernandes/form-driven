import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'userGenre'
})
export class UserGenrePipe implements PipeTransform {
  transform(value: string):string {
    
    if(value === '1') {
      return 'Feminino'
    }else if(value === '2') {
      return 'Masculino'
    }else if(value === '3') {
      return 'Prefiro não dizer'
    }else {
      return 'Não informado'
    }
  }
}