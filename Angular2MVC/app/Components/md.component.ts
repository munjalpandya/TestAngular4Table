import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Global } from '../Shared/global';
import { UserService } from '../Service/user.service';

@Component({
    templateUrl: 'app/Components/md.component.html'
})

export class MD {
    private empArray: Array<any> = [];
    private newAttribute: any = {};

    userFrm: FormGroup;

    constructor(private fb: FormBuilder, private _userService: UserService) { }

    ngOnInit(): void {
        this.userFrm = this.fb.group({
            DeptID: [''],
            DeptName: [''],
            EmpID: [''],
            EmpName: [''],
            Salary: [''],
            Employees:['']
        });
    }

    addFieldValue() {
        this.empArray.push(this.newAttribute)
        this.newAttribute = {};
        //console.log(this.fieldArray);
    }

    deleteFieldValue(index: any) {
        this.fieldArray.splice(index, 1);
    }

    save() {

    }
}