import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from "axios";
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public http: HttpClient,
    private router: Router,
    private commonService: CommonService
  ) {


  }
  title = 'frontendTodo';
  active: any = false;
  displayValue: any[] = [];



  async getValue(value: string) {

    this.displayValue.push({
      value: value,
      status: false
    }

    )
    // debugger
    ;(await this.commonService.getItems(value)).subscribe(res=>{
      console.log(res)
    })

   

    console.log(this.displayValue)
  };
  // async eraseAll() {
  //   await axios.get(`http://localhost:7000/item/deleteAll/${1}`)

  // }
  signout() {
    this.router.navigate(['login'])
  }
  deleteAccount(
  ) {
    axios.delete(`http://localhost:7000/user/${localStorage.getItem("userId")}`)
    this.router.navigate(['signup'])

  }
  ngOnInit() {
    // this.dataFromApi();
    this.commonService.dataFromApi().
      subscribe(data => {
        console.log(data['response'])
        data["response"].map(item => {
          this.displayValue.push(JSON.parse(item.list));
        });
          this.userName = localStorage.getItem("userName")
      
      })
  }
  userName = ""
  // dataFromApi() {
  //   .subscribe(data => {
  //   console.log(data)
  // })


  // data.data.response.map(item => {

  //   this.displayValue.push(JSON.parse(item.list));

  // });
  //   this.userName = localStorage.getItem("userName")


  // }





  async delItem(item: string | number) {

    this.displayValue.splice(this.displayValue.indexOf(item), 1)
    ;(await this.commonService.deleteItem(item)).subscribe(res=>{
      console.log(res)
    })

  };
  // changecoorMini(item: any[], i: number, displayValue:any = [],match){
  //   (await this.commonService.patchReq(item: any[], i: number, displayValue:any = []).subscribe(res=>{
  //     console.log(res)
  //   })
    
  // }
  async changecolor(item: any[], i: number) {
    const match = this.displayValue[i]
    match.status = true;
    // this.changecoorMini(item,i,this.displayValue,match)
    //  this.http
    //   .patch(`http://localhost:7000/item/:${localStorage.getItem("userId")}`,
    //     { updatedItem: JSON.stringify({ 'value': match.value, 'status': true }), item: JSON.stringify({ 'value': match.value, 'status': false }) }
    //   ).subscribe((response)=>{
    //     console.log(response)
    //   })

    console.log(match.status,"=>>>>>>>>>>>>>")
  }


}
