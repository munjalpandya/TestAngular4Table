import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { IDept, IEmp } from '../Model/Dept';

@Component({
    templateUrl: 'app/Components/mdgrid1.html'
})

export class MDGrid1 {

    isREADONLY: boolean = false;

    depts: IDept[];
    dept: IDept;

    totalRecords: number = 0;

    columns: any[] = [
        {
            display: 'Dept Name',
            variable: 'DeptName'
        }
    ];

    detcolumns: any[] = [
        {
            display: 'Emp Name',
            variable: 'EmpName'
        },
        {
            display: 'Salary',
            variable: 'Salary'
        }
    ];

    sorting: any = {
        column: 'DeptName',
        descending: false
    };
    hdrbtns: any[] = [];
    gridbtns: any[] = [];
    initGridButton() {

        this.hdrbtns = [
            {
                title: 'Add',
                keys: [''],
//                action: DBOperation.create,
                ishide: this.isREADONLY

            }];
        this.gridbtns = [
            {
                title: 'Edit',
                keys: ['DeptID'],
//                action: DBOperation.update,
                ishide: this.isREADONLY
            }
        ];

    }

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
        this.LoadDept();
        //console.log("Users - user class: " + this.users.toString);
    }

    LoadDept(): void {
        debugger;
        this._userService.get(Global.BASE_DEPT_ENDPOINT)
            .subscribe(depts => { this.depts = depts; this.initGridButton(); this.totalRecords = depts.length; }
            );
    }
}