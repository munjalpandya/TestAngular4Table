﻿import { NgModule, ErrorHandler, enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule, MdTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/userlist.component';
import { HomeComponent } from './components/home.component';
import { UserService } from './Service/user.service'
import { UserFilterPipe } from './filter/user.pipe'
import { SearchComponent } from './Shared/search.component';
import AppErrorHandler from './Shared/errorhandler';
import { ManageUser } from './components/manageuser.component';

import { DataGrid } from './Shared/datagrid/datagrid.component';
import { DataGridUtil } from './Shared/datagrid/datagrid.util';
import { Format } from './Shared/datagrid/format';
import { OrderBy } from './Shared/datagrid/orderby';

import { MDDataGrid } from './Shared/datagrid/mddatagrid.component';

import { SamplePaginationComponent } from './Components/samplepagination.component';

import { PaginationComponent } from './Shared/datagrid/pagination/pagination.component';

import { AddToList } from './components/addtolist.component';

import { MD } from './components/md.component';
import { MD1 } from './components/md1.component';
import { MD3 } from './components/md3.component';

import { UploadPic } from './components/uploadpic.component';

import { MDGridComponent } from './components/mdgrid.component';
import { MDGrid1 } from './components/mdgrid1';

import { UserList1Component } from './components/userlist2.component';

import { AdminHeaderComponent } from './components/adminheader.component';

import { AutoCompleteExample } from './components/autocompleteexample.component';

import { UserReportComponent } from './components/userreport.component';
import { SliderComponent } from './components/slider.component';

//import { CarouselModule } from 'angular4-carousel';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgxEditorModule } from 'ngx-editor';

/*
@NgModule({
    exports: [MdPaginatorModule]
})
*/
@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        MdNativeDateModule, MdTableModule
        , NgxEditorModule
    //    , CarouselModule
,Ng2CarouselamosModule
    ],
    declarations: [AppComponent, UserComponent, HomeComponent, UserFilterPipe, SearchComponent, ManageUser,
        DataGrid, Format, OrderBy, UserListComponent, SamplePaginationComponent, PaginationComponent, AddToList
        , MD, MD1, MD3, UploadPic, MDGridComponent, AdminHeaderComponent, MDGrid1, MDDataGrid, AutoCompleteExample, UserList1Component, UserReportComponent
        , SliderComponent],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, { provide: APP_BASE_HREF, useValue: '/' }, UserService, UserFilterPipe],
    entryComponents: [ManageUser, UserReportComponent],
    bootstrap: [AppComponent]

})
export class AppModule { }
