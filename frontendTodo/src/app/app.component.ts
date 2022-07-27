import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendTodo';
  active: any = false;
  displayValue: any[] = [];
  getValue(value:string){
    this.displayValue.push({
      value: value,
      status: false
    })
    console.log(this.displayValue)
  };
  delItem(item:string|number){

   this.displayValue.splice(this.displayValue.indexOf(item),1)
  };
  changecolor(item: any[], i:number){
 
   const match = this.displayValue[i]
   match.status = true;
    console.log(this.active, item)
  }


}
