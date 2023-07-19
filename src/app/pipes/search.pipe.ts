import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allTransactions:any[],search_term:string,property:string): any[] {
    const result:any=[]
    if(!allTransactions || search_term=="" || property==""){
      return allTransactions
    }
    allTransactions.forEach((item:any)=>{
      if(item[property].trim().toLowerCase().includes(search_term.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
