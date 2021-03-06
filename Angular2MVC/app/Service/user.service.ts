﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
    constructor(private _http: Http) { }

    get(url: string): Observable<any> {
        return this._http.get(url)
            .map((response: Response) => <any>response.json());
        // .do(data => console.log("All: " + JSON.stringify(data)))
        //console.log("Get Method");
        // .catch(this.handleError);
    }

    getById(url: string, Id: string): Observable<any> {
        return this._http.get(url+Id)
            .map((response: Response) => <any>response.json());
        // .do(data => console.log("All: " + JSON.stringify(data)))
        //console.log("Get Method");
        // .catch(this.handleError);
    }
    
    post(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    postwithupload(url: string, model: any, fileToUpload: any): Observable<any> {
        debugger;
        let body = JSON.stringify(model);
        var formData = new FormData();
        formData.append("Data", body);
        formData.append('UploadPic', fileToUpload);
        
        let headers = new Headers({ });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(url, formData, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    put(url: string, id: number, model: any): Observable<any> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    delete(url: string, id: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.delete(url + id, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    masterdetail(url: string, model: any): Observable<any> {
        let body = JSON.stringify(model._value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log("Body: " + body);
//        console.log("Options: " + options);
        return this._http.post(url, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    uploadpic(url: string, model: any): Observable<any> {
        debugger;
        console.log(model);
        var formData = new FormData();
        formData.append('UploadPic', model);
        //let body = JSON.stringify(formData);
        //let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
        let options = new RequestOptions({});
        //console.log("Body: " + body);
        //        console.log("Options: " + options);
        return this._http.post(url, formData, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
