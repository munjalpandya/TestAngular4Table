import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { IUser } from "../Model/user";
import { UserService } from "../Service/user.service";
import { MdPaginator, MdSort } from "@angular/material/material";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/merge';

export class userDataSource extends DataSource<any>{

    //constructor(private _userservice: UserService, private _paginator: MdPaginator, private _url: string) {
    //    super();
    //}

    constructor(private _userservice: UserService, private _url: string, private _sort: MdSort) {
        super();
    }

    dataChange: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    //get data(): any { return this._userservice.get(this._url); }

    connect(): Observable<any> {
        const displayDataChanges = [this._sort.mdSortChange];
        //return Observable.merge(...displayDataChanges).map((data, page) => {
        //    const clonedData = data.slice();
        //    const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        //    return data.splice(startIndex, this._paginator.pageSize);
        //})
        //const displayDataChanges = [this._userservice.get(this._url)];
        //console.log("User Data Length: " + displayDataChanges.entries);
        //return Observable.of(<any>this._userservice.get(this._url).map((response: Response) => <any>response.json()));
        return this._userservice.get(this._url);//.merge(...displayDataChanges).map(() => { });
    }

    disconnect() { }

}