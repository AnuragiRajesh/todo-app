import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from "axios";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public http:HttpClient,
    private router: Router
    ){

   
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
    
  await  axios.post(`http://localhost:7000/item:${localStorage.getItem("userId")}`,{list:JSON.stringify({'value':value,'status':false})})
   
    console.log(this.displayValue)
  };
 async eraseAll(){
    await  axios.get(`http://localhost:7000/item/deleteAll:${1}`)

  }
  signout(){
    this.router.navigate(['login'])
  }
  deleteAccount(
    ){
    axios.delete(`http://localhost:7000/user:${localStorage.getItem("userId")}`)
    this.router.navigate(['signup'])

  }
  ngOnInit() {
    this.dataFromApi();
  }
  userName=""
  async dataFromApi(){
    const data = axios.get(`http://localhost:7000/item:${localStorage.getItem("userId")}`)
    console.log(data)
      // data.response.map(item => {
      
      //   this.displayValue.push(JSON.parse(item.list));
       
      // });
      // this.userName = localStorage.getItem("userName")
     
    
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
