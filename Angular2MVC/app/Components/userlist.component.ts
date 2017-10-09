import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserService } from '../Service/user.service';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { ManageUser } from './manageuser.component';
import { MdDialog, MdDialogRef, MdPaginator, MdSort } from '@angular/material';
import { UserFilterPipe } from '../filter/user.pipe';
import { DataSource } from "@angular/cdk/collections";
import 'rxjs/add/observable/of';
import { userDataSource } from './userdatasource';

export interface TableAction {
    action: string,
    values: {
        key: string,
        value: string
    }[]
}

@Component({
    templateUrl: 'app/Components/userlist.component.html'
})

export class UserListComponent implements OnInit {

    users: IUser[];
    user: IUser;
    msg: string;
    dataSource: userDataSource;
    displayedColumns = ['FirstName', 'LastName', 'Gender', 'DOB'];
    modalTitle: string;
    modalBtnTitle: string;

    columns: any[] = [
        {
            display: 'First Name',
            variable: 'FirstName',
            filter: 'text',
        },
        {
            display: 'Last Name',
            variable: 'LastName',
            filter: 'text'
        },
        {
            display: 'Gender',
            variable: 'Gender',
            filter: 'text'
        },
        {
            display: 'Date of Birth',
            variable: 'DOB',
            filter: 'date'
        }
    ];

    @ViewChild(MdPaginator) paginator: MdPaginator;
    @ViewChild(MdSort) sort: MdSort;
    

    constructor(private _userService: UserService, private dialog: MdDialog) { }

    ngOnInit(): void {
        this.LoadUsers();
        //this.dataSource = new userDataSource(this._userService, this.paginator,Global.BASE_USER_ENDPOINT);
        
    }

    LoadUsers(): void {
        this.dataSource = new userDataSource(this._userService, Global.BASE_USER_ENDPOINT, this.sort);
    }

  
}
