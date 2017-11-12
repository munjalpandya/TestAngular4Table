import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { ManageUser } from './manageuser.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { UserFilterPipe } from '../filter/user.pipe'

@Component({
    templateUrl: 'app/Components/userreport.component.html'
})

export class UserReportComponent implements OnInit {

    users: IUser[];

    constructor(private dialog: MdDialog) { }

    ngOnInit(): void {
        
    }

    printThis(): void {
        window.print();
    }
}