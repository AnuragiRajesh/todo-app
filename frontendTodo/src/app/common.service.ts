import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public http: HttpClient) { }
  public headerDict = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
  }
  async loginUser(data: any) {
    return this.http.post('http://localhost:7000/login', { email: data.email, password: data.password })
  }

  dataFromApi() {
    let headers = new HttpHeaders(this.headerDict);
    console.log(headers)
    return this.http.get(`http://localhost:7000/item/${localStorage.getItem("userId")}`, { headers: headers })
  }
  async getItems(value: string) {
    let headers = new HttpHeaders(this.headerDict);
    console.log(headers)
    return this.http.post(`http://localhost:7000/item/${localStorage.getItem("userId")}`, { list: JSON.stringify({ 'value': value, 'status': false }) }, { headers: headers })

  }

  async deleteItem(item: any) {
    let headers = new HttpHeaders(this.headerDict);
    console.log(item)
    return this.http.delete(`http://localhost:7000/item/${JSON.stringify(item)}`, { headers: headers })


  }
  async deleteAccount() {
    let headers = new HttpHeaders(this.headerDict);
    return this.http.delete(`http://localhost:7000/user/${localStorage.getItem("userId")}`, { headers: headers })

  }
  patchItem(item: any, match: any) {
    let headers = new HttpHeaders(this.headerDict);
    return this.http
      .patch(`http://localhost:7000/item/:${localStorage.getItem("userId")}`,
        { updatedItem: JSON.stringify({ 'value': match.value, 'status': true }), item: JSON.stringify({ 'value': match.value, 'status': false }) }, { headers: headers }
      )
  }

}
