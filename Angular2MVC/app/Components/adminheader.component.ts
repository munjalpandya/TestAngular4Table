import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';
import { UserService } from '../Service/user.service';
import { IUser } from '../Model/user';
import { Global } from '../Shared/global';

@Component({
    selector: 'admin-header',
    templateUrl: 'app/Components/adminheader.component.html',
})

export class AdminHeaderComponent {
    menus: any;

    constructor(private _userService: UserService) { }

    ngOnInit(): void {
        this.LoadMenus();
    }

    LoadMenus(): void {
        this._userService.get(Global.BASE_MENU_ENDPOINT)
            .subscribe(menus => { this.menus = menus; }
            );
    }
}