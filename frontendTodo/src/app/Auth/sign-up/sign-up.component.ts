import { Component, OnInit } from '@angular/core';
import { CookieXSRFStrategy } from '@angular/http';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }




  errorr = ""
  async sign_up(data) {
    try {
      const users = await axios.post('http://localhost:7000/user', { firstName: data.user, email: data.email, password: data.password })
      localStorage.setItem('userId', users.data.response.id)
      localStorage.setItem('userName', users.data.response.firstName)
      this.router.navigate(['home'])
    } catch (error) {
      this.errorr = "invalid email "
      console.log(error)
    }
  }

  loginPage(login: string): void {
    console.log(login)
    this.router.navigate(['login'])
  }
}
