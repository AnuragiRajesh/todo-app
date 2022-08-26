import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  

  ngOnInit() {
  }
  signupPage(signup:string):void{
   
    this.router.navigate(['signup'])

  }
  
  errorr=""
  async login(data:any) {
    console.log("itz going")
        const users = await axios.post('http://localhost:7000/login',{email:data.email, password:data.password})
        console.log(users.data.response)
        console.log(users.data)
      

    

    if (users.data.response.firstName && users.data.response.email) {
     
      

      
        localStorage.setItem('userId', users.data.response.id)
        localStorage.setItem('userName', users.data.response.firstName)
        console.log(users.data.verificationToken)
        sessionStorage.setItem('token', users.data.verificationToken)
        this.router.navigate(['home'])
        // document.cookie= `authenticateCookie= ${users.data.verificationToken}`
        
      }
      else{
        this.errorr= users.data.msg
      }
    }
  }


