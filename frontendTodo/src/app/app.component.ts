import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from "axios";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public http:HttpClient){

   
  }
  title = 'frontendTodo';
  active: any = false;
  displayValue: any[] = [];

  getValue(value:string){

    this.displayValue.push({
      value: value,
      status: false
    }
    
    )
    // debugger
    // axios.post("http://localhost:3000/item",{list:`value:${value},status:${false}`,userId:1})
   
    console.log(this.displayValue)
  };
  ngOnInit() {
    this.dataFromApi();
  }
  dataFromApi(){
    this.http.get("http://localhost:3000/item").subscribe((data:any)=>{
      data.response.map(item => 
  
        // this.displayValue.push({value:item.list,status:false})
        console.log(JSON.parse(item.list))
        )
        console.log(this.displayValue)
       

    })
  }
  delItem(item:string|number){

   this.displayValue.splice(this.displayValue.indexOf(item),1)
  };
  changecolor(item: any[], i:number){
 
   const match = this.displayValue[i]
   match.status = true;
    console.log(this.active, item)
  }


}
