import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Auth/login/login.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
@ViewChild('data') public content: TemplateRef<any>;
@ViewChild('data2') public content2: TemplateRef<any>;
public dialogRef: any;
public dialogRef2: any;
  constructor(public http: HttpClient,
    private router: Router,
    private commonService: CommonService,
    private dialog: MatDialog
  ) {


  }
  userName = ""
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

  noSignout(){
    this.dialogRef.close();
  }
  signout() {
    localStorage.clear();
    localStorage.clear();
    this.router.navigate(['login']);
    this.dialogRef.close();
  }
  openDialog(): void {
   
    this.dialogRef = this.dialog.open(this.content,{
      width: '25%'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  noDeleteAccount(){
    this.dialogRef2.close();}
    async deleteAccount(value:any
      ) {
        console.log(value)
        // if()
        // (await this.commonService.loginUser(data)).subscribe((res: any) => {}
    
        // (await this.commonService.deleteAccount()).subscribe(res => {
        //   console.log(res)
        // })
        // localStorage.clear();
        // localStorage.clear();
        // this.router.navigate(['signup'])
        this.dialogRef2.close();
    
      }
  openDialog2(): void {

    this.dialogRef2 = this.dialog.open(this.content,{
      width: '25%'
    });

    this.dialogRef2.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }

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
