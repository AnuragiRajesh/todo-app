import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public http: HttpClient) { }
  public headerDict = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
  }
  
  public url:string = 'http://localhost:7000'
  async loginUser(data: any) {
    return this.http.post(`${this.url}/login`, { email: data.email, password: data.password })
  }
  
  dataFromApi() {
    let headers = new HttpHeaders(this.headerDict);
    console.log(headers)
    return this.http.get(`${this.url}/item/${localStorage.getItem("userId")}`, { headers: headers })
  }
  async getItems(value: string) {
    let headers = new HttpHeaders(this.headerDict);
    console.log(headers)
    return this.http.post(`${this.url}/item/${localStorage.getItem("userId")}`, { list: JSON.stringify({ 'value': value, 'status': false }) }, { headers: headers })

  }

  async deleteItem(item: any) {
    let headers = new HttpHeaders(this.headerDict);
    console.log(item)
    return this.http.delete(`${this.url}/item/${JSON.stringify(item)}`, { headers: headers })


  } 
  async deleteAccount() {
    let headers = new HttpHeaders(this.headerDict);
    return this.http.delete(`${this.url}/user/${localStorage.getItem("userId")}`, { headers: headers })

  }
  patchItem(item: any, match: any) {
    let headers = new HttpHeaders(this.headerDict);
    return this.http
      .patch(`${this.url}/item/:${localStorage.getItem("userId")}`,
        { updatedItem: JSON.stringify({ 'value': match.value, 'status': true }), item: JSON.stringify({ 'value': match.value, 'status': false }) }, { headers: headers }
      )
  }

  // search(term: string): Observable<SearchItem[]> {
  //   let apiURL = 'http://localhost:7000/item/:2';
  //   return this.http.get(apiURL).map(res => {
  //         return res.json().results.map(item => {
  //           return new SearchItem(
  //               item.trackName,
  //               item.artistName,
  //               item.trackViewUrl,
  //               item.artworkUrl30,
  //               item.artistId
  //           );
  //         });
  //       });
  // }

}
