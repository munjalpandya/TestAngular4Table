import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { IUser } from "../Model/user";
import { UserService } from "../Service/user.service";
import { MdPaginator } from "@angular/material/material";

export class userDataSource extends DataSource<any>{

    constructor(private _userservice: UserService, private _paginator: MdPaginator, private _url: string) {
        super();
    }

    /*constructor(private _userservice: UserService, private _url: string) {
        super();
    }*/

    connect(): Observable<IUser[]> {
        const displayDataChanges = [this._userservice.get(this._url), this._paginator];
        return Observable.merge(...displayDataChanges).map((data, page) => {
            const clonedData = data.slice();
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            return data.splice(startIndex, this._paginator.pageSize);
        })
        
    }

    disconnect() { }
}