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

 async getValue(value:string){

    this.displayValue.push({
      value: value,
      status: false
    }
    
    )
    // debugger
  await  axios.post(`http://localhost:7000/item:${1}`,{list:JSON.stringify({'value':value,'status':false}),userId:1})
   
    console.log(this.displayValue)
  };
 async eraseAll(){
    await  axios.get(`http://localhost:7000/item/deleteAll:${1}`)

  }
  ngOnInit() {
    this.dataFromApi();
  }
  async dataFromApi(){
   this.http.get(`http://localhost:7000/item:${1}`).subscribe((data: any) => {
      data.response.map(item => {
        console.log(JSON.parse(item.list));
        // console.log(dataRe.value, typeof dataRe)
        this.displayValue.push(JSON.parse(item.list));
        // console.log(JSON.parse(item.list))
      });
      // console.log(this.displayValue)
    })
  }
  async delItem(item:string|number){

   this.displayValue.splice(this.displayValue.indexOf(item),1)
   axios.delete(`http://localhost:7000/item/:${1}`,{data:{item:item}})
  };
  async changecolor(item: any[], i:number){
 
   const match = this.displayValue[i]
   match.status = true;
   await axios
        .patch(`http://localhost:7000/item/:${1}`, 
          {updatedItem:JSON.stringify({'value':match.value,'status':true}),item:JSON.stringify({'value':match.value,'status':false}) }
        );
   
    console.log(match.status)
  }


}
