import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UserService } from '../Service/user.service';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { ManageUser } from './manageuser.component';
import { UserFilterPipe } from '../filter/user.pipe';
import { DataSource } from "@angular/cdk/collections";
import 'rxjs/add/observable/of';
import { userDataSource } from './userdatasource';
import { MdDialog, MdDialogRef } from '@angular/material';
import { UserReportComponent } from './userreport.component'

@Component({
    templateUrl: 'app/Components/userlist1.component.html'
})

export class UserList1Component implements OnInit {

    users: IUser[];
    user: IUser;
    
    
    constructor(private _userService: UserService, private dialog: MdDialog) { }

    ngOnInit(): void {
        this.LoadUsers();
        //this.dataSource = new userDataSource(this._userService, this.paginator,Global.BASE_USER_ENDPOINT);

    }

    LoadUsers(): void {
        let txtSearch: any = <HTMLInputElement>document.getElementById("txtSearch");
        let strSearchText: string;
        strSearchText = txtSearch.value;
        if (strSearchText == "") {
            strSearchText = "nodata";
        }
        this._userService.get(Global.BASE_USER_SEARCH_ENDPOINT + strSearchText).subscribe(x => this.users = x);
    }

    MyDialog(model: IUser[]): void {
        let dialogRef = this.dialog.open(UserReportComponent, {
            height: '400px',
            width: '600px', });
        dialogRef.componentInstance.users = model;
    }

    search(): void {
        this.LoadUsers();
    }
}