import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userlist.component';
import { HomeComponent } from './components/home.component';
import { SamplePaginationComponent } from './Components/samplepagination.component';
import { AddToList } from './components/addtolist.component';
import { MD } from './components/md.component';
import { MD1 } from './components/md1.component';
import { MD3 } from './components/md3.component';
import { UploadPic } from './components/uploadpic.component';
import { MDGridComponent } from './components/mdgrid.component';
import { MDGrid1 } from './components/mdgrid1';
import { AutoCompleteExample } from './components/autocompleteexample.component';
import { UserList1Component } from './components/userlist2.component';
import { SliderComponent } from './components/slider.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'userlist', component: UserListComponent },
    { path: 'samplepagination', component: SamplePaginationComponent },
    { path: 'addtolist', component: AddToList },
    { path: 'masterdetail', component: MD },
    { path: 'md', component: MD1 },
    { path: 'md3', component: MD3 },
    { path: 'uploadpic', component: UploadPic },
    { path: 'mdgrid', component: MDGridComponent },
    { path: 'mdgrid1', component: MDGrid1 },
    { path: 'ace', component: AutoCompleteExample },
    { path: 'userlist1', component: UserList1Component },
    { path: 'slider', component: SliderComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);