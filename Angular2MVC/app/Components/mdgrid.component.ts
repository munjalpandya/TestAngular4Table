import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserService } from '../Service/user.service';
import { IDept, IEmp } from '../Model/Dept';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { MdDialog, MdDialogRef, MdPaginator, MdSort } from '@angular/material';

@Component({
    templateUrl: 'app/Components/mdgrid.component.html'
})

export class MDGridComponent implements OnInit {
    depts: IDept[];
    dept: IDept;
    //hideElement: boolean = false;


    emps: IEmp[];
    emp: IEmp;

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
        this.LoadDept();
        this.LoadEmp();
    }

    LoadDept(): void {
        this._userService.get(Global.BASE_DEPT_ENDPOINT)
            .subscribe(depts => { this.depts = depts;  }
            );
    }

    LoadEmp(): void {
        this._userService.get(Global.BASE_EMP_ENDPOINT)
            .subscribe(emps => { this.emps = emps }
            );
    }

    collapseAll(): void {
        this.depts.forEach((dept) => {
            dept.IsShow = false;
        });
    }

    toggleElement(rowIndex: any, value: any) {
        if (!value.IsShow)
        {
            this.collapseAll();
        }
        value.IsShow = !value.IsShow;
    }
}