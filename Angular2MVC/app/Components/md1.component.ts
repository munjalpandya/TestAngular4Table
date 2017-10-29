import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Global } from '../Shared/global';
import { UserService } from '../Service/user.service';
import { IDept } from '../Model/Dept';

@Component({
    templateUrl: 'app/Components/md2.component.html'
})

export class MD1 {

    userFrm: FormGroup;

    constructor(private _fb: FormBuilder, private _userService: UserService) { }

    ngOnInit() {
        this.userFrm = this._fb.group({
            DeptID: [''],
            DeptName: ['', [Validators.required, Validators.maxLength(50)]],
            Employees: this._fb.array([
                this.initEmployees(),
            ])
        });
    }

    initEmployees() {
        return this._fb.group({
            EmpID: [''],
            EmpName: ['', Validators.required],
            DeptID: [''],
            Salary: ['']
        });
    }

    addEmployee() {
        const control = <FormArray>this.userFrm.controls['Employees'];
        control.push(this.initEmployees());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.userFrm.controls['Employees'];
        control.removeAt(i);
    }

    save(model: any) {
        // call API to save
        // ...
        console.log(model);
        //console.log("Json Model: " + model.json());
        console.log(JSON.stringify(model._value));
        this._userService.masterdetail(Global.BASE_MASTERDETAIL_ENDPOINT, model).subscribe();
    }
}