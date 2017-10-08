import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { ManageUser } from './manageuser.component';
import { MdDialog, MdDialogRef, MdPaginator } from '@angular/material';
import { UserFilterPipe } from '../filter/user.pipe';
import { DataSource } from "@angular/cdk/collections";
import 'rxjs/add/observable/of';
import { userDataSource } from './userdatasource';

@Component({
    templateUrl: 'app/Components/userlist.component.html'
})

export class UserListComponent implements OnInit {

    users: IUser[];
    user: IUser;
    dataSource: userDataSource;
    displayedColumns = ['FirstName', 'LastName'];

    @ViewChild(MdPaginator) paginator: MdPaginator;

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
        this.dataSource = new userDataSource(this._userService, Global.BASE_USER_ENDPOINT);
        //this.dataSource = new userDataSource(this._userService, this.paginator,Global.BASE_USER_ENDPOINT);
        
    }
}
