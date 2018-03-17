import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public myData
  constructor (private _http: HttpClient) {}

  fetchData() {
    return this._http.get('http://127.0.0.1:3000/posts/1').toPromise()
      .then(data => {
        this.myData = data
      })
      .catch(err => console.error(err))
  }
}
