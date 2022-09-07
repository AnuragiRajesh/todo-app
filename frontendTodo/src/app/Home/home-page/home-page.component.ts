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
      ; (await this.commonService.getItems(value)).subscribe(res => {
        console.log(res)
      })
    console.log(this.displayValue)
  };

  signout() {
    localStorage.clear();
    localStorage.clear();
    this.router.navigate(['login'])
  }
  async deleteAccount(
  ) {
    (await this.commonService.deleteAccount()).subscribe(res => {
      console.log(res)
    })
    localStorage.clear();
    localStorage.clear();
    this.router.navigate(['signup'])

  }
  ngOnInit() {
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

  async delItem(item: string | number) {

    this.displayValue.splice(this.displayValue.indexOf(item), 1)
      ; (await this.commonService.deleteItem(item)).subscribe(res => {
        console.log(res)
      })

  };

  async changecolor(item: any[], i: number) {
    const match = this.displayValue[i]
    match.status = true;
    this.commonService.patchItem(item, match).subscribe(res => {
      console.log(res)
    })
    console.log(match.status, "=>>>>>>>>>>>>>")
  }


}
