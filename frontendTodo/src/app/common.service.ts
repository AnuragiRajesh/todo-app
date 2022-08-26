import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(public http: HttpClient) { }

  dataFromApi() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
    }
    let headers = new HttpHeaders(headerDict);
  
    console.log(headers)
    return this.http.get(`http://localhost:7000/item/${localStorage.getItem("userId")}`, { headers: headers })
  }
  async getItems(value){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
    }
    let headers = new HttpHeaders(headerDict);
  
    console.log(headers)
    return this.http.post(`http://localhost:7000/item/${localStorage.getItem("userId")}`, { list: JSON.stringify({ 'value': value, 'status': false }) }, { headers: headers })

  }
  async deleteItem(item:any){
    const headerDict = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
    }
    let headers = new HttpHeaders(headerDict);
  
    console.log(item)
    return this.http.delete(`http://localhost:7000/item/${JSON.stringify(item)}`,{ headers: headers })
    // {data: {...}, headers: {...}}

  }
//   patchReq (item: any[], i: number, displayValue:any = []){
//     this.http
//       .patch(`http://localhost:7000/item/:${localStorage.getItem("userId")}`,
//         { updatedItem: JSON.stringify({ 'value': match.value, 'status': true }), item: JSON.stringify({ 'value': match.value, 'status': false }) }
//       )
//   }
  
// }
