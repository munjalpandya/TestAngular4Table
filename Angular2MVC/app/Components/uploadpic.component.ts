import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../Model/user';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'app/Components/uploadpic.component.html',
})
export class UploadPic {

    @ViewChild("fileInput") fileInput: any;

    constructor(private _userService: UserService) { }

    addFile(): void {
        debugger;
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];

            this._userService.uploadpic(Global.BASE_UPLOADPIC_ENDPOINT, fileToUpload).subscribe(
                data => {
                    if (data == 1) //Success
                    {
                        //this.dialogRef.close("success");
                    }
                    else {
                        //this.dialogRef.close("error");
                    }
                },
                error => {
                    //this.dialogRef.close("error");
                }
            );
        }
    }
}