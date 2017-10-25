import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { IDept1, IEmp } from '../Model/Dept';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MdAutocompleteTrigger, MdOptionSelectionChange } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: 'app/Components/autocompleteexample.component.html',
})

export class AutoCompleteExample implements OnInit {
    depts: IDept1[];
    emps: IEmp[];
    //deptCtrl: FormControl;
    filteredDepts: Observable<any[]>;
    filteredEmps: Observable<any[]>;
    userFrm: FormGroup;
    
    constructor(private _userService: UserService, private fb: FormBuilder) {
        //this.deptCtrl = new FormControl();
    }

    ngOnInit(): void {
        this.userFrm = this.fb.group({
            Dept: [''],
            Emp: [''],
            Salary: [''],
            Dept1: ['']
        });
        this.LoadDept();
        
    }

   
    LoadDept(): void {
        this._userService.get(Global.BASE_ALLDEPT_ENDPOINT)
            .subscribe(depts => {
            this.depts = depts;
            this.filteredDepts = this.userFrm.controls["Dept"].valueChanges
                .startWith(null)
                .map(dept => dept ? this.filterDept(dept) : this.depts.slice());
            }
            );
    }

    filterDept(DeptName: string) {
        //DeptName = DeptName ? DeptName.toLocaleLowerCase() : null;
        //console.log("Depts: "+ this.depts);
        return this.depts.filter(dept => dept.DeptName.toLowerCase().indexOf(DeptName.toLowerCase()) === 0);
    }

    SelectDept(event: MdOptionSelectionChange, DeptID: string): void {
        if (event.source.selected) {
            console.log("Dept ID Selected: " + DeptID);
            this.userFrm.controls["Emp"].setValue("");
            this.LoadEmp(DeptID);
        }
    }

    LoadEmp(Id: string): void {
        this._userService.getById(Global.BASE_EMPBYDEPT_ENDPOINT, Id)
            .subscribe(emps => {
                this.emps = emps;
                this.filteredEmps = this.userFrm.controls["Emp"].valueChanges
                    .startWith(null)
                    .map(emp => emp ? this.filterEmp(emp) : this.emps.slice());
            }
            );
    }

    filterEmp(EmpName: string) {
        return this.emps.filter(emp => emp.EmpName.toLowerCase().indexOf(EmpName.toLowerCase()) === 0);
    }

    SelectEmp(event: MdOptionSelectionChange, Emp: IEmp): void {
        if (event.source.selected) {
            console.log("Emp ID Selected: " + Emp.EmpID);
            console.log("Salary of Selected: " + Emp.Salary);
            this.userFrm.controls["Salary"].setValue(Emp.Salary);
        }
    }
}