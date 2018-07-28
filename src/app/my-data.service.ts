import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
// import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyDataService {

  private _url= 'assets/herbs.json';
  // private _url2= 'assets/students.json';

  constructor(private http:Http) { }


sucess(){
  return "SucessFull";

}

// fetchData(){
//   this.http.get(this._url2).subscribe(
//   (data) => console.log(data)
// )
// }

// fetchData(){
//   return this.http.get(this._url2).map(
//     (response) => response.json()
//   ).subscribe(
//     (data) => console.log(data)
//   )
//   }


getHerbs () {
  return this.http.get(this._url)
    .map((response: Response) => response.json());

  }



}
