import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
     // return this.http.post('https://u-ng-http.firebaseio.com/data.json',
     //   servers,
     //   {headers: headers});

    return this.http.put('https://u-ng-http.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }

  getServers() {
    return this.http.get('https://u-ng-http.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          // Here you can do something with DATA
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong:' + error);
        }
      );
  }

  getAppName() {
    return this.http.get('https://u-ng-http.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(error);
        }
      );
  }
}
