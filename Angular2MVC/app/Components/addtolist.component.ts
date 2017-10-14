import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Global } from '../Shared/global';
import { UserService } from '../Service/user.service';

@Component({
    templateUrl: 'app/Components/addtolist.component.html'
})

export class AddToList {
    private fieldArray: Array<any> = [];
    private fieldArray1: Array<any> = [];
    private newAttribute: any = {};
    userFrm: FormGroup;
    detailFrm: FormGroup;

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
        this.userFrm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();

    }

    onValueChanged(data?: any) {
        if (!this.userFrm) { return; }
        const form = this.userFrm;
    }
    
    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
        //console.log(this.fieldArray);
    }

    deleteFieldValue(index: any) {
        this.fieldArray.splice(index, 1);
    }

    save(formData: any) {
        //console.log(JSON.stringify(this.fieldArray));
        this.fieldArray1.push(formData);
        console.log("Raw Form Data: " + formData);
        console.log("Form Data Array: " + this.fieldArray1);
        //this._userService.masterdetail(Global.BASE_MASTERDETAIL_ENDPOINT, this.fieldArray).subscribe();
    }
}