﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userlist.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'userlist', component: UserListComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);