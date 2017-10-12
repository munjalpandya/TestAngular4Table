﻿import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Global } from '../Shared/global';
import { UserService } from '../Service/user.service';

@Component({
    templateUrl: 'app/Components/addtolist.component.html'
})

export class AddToList {
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    userFrm: FormGroup;

    states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
        'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
        'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
    stateCtrl: FormControl;
    filteredStates: any;

    constructor(private fb: FormBuilder, private _userService: UserService) {}

    filterStates(val: string) {
        return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
            : this.states;
    }

    ngOnInit(): void {
        this.userFrm = this.fb.group({
            newAttributeCode: [''],
            newAttributeName: [''],
            newAttributePrice: ['']
        });
        this.filteredStates = this.userFrm.controls["newAttributeCode"].valueChanges.startWith(null).map(name => this.filterStates(name));
    }
    
    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
        //console.log(this.fieldArray);
    }

    deleteFieldValue(index: any) {
        this.fieldArray.splice(index, 1);
    }

    save() {
        console.log(JSON.stringify(this.fieldArray));
        this._userService.masterdetail(Global.BASE_MASTERDETAIL_ENDPOINT, JSON.stringify(this.fieldArray)).subscribe();
    }
}