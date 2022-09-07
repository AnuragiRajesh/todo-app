import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private commonService: CommonService) { }
  ngOnInit() {
  }
  signupPage(signup: string): void {
    this.router.navigate(['signup'])
  }

  errorr = ""
  async login(data: any) {

    (await this.commonService.loginUser(data)).subscribe((res: any) => {

      if (!res.response) {
        this.errorr = res.msg

      } else {
        console.log("pppppp")
        localStorage.setItem('userId', res.response.id)
        localStorage.setItem('userName', res.response.firstName)
        console.log(res.verificationToken)
        sessionStorage.setItem('token', res.verificationToken)
        this.router.navigate(['home'])

      }
    }
    )

  }
}


