"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var user_component_1 = require("./components/user.component");
var userlist_component_1 = require("./components/userlist.component");
var home_component_1 = require("./components/home.component");
var user_service_1 = require("./Service/user.service");
var user_pipe_1 = require("./filter/user.pipe");
var search_component_1 = require("./Shared/search.component");
var errorhandler_1 = require("./Shared/errorhandler");
var manageuser_component_1 = require("./components/manageuser.component");
var datagrid_component_1 = require("./Shared/datagrid/datagrid.component");
var format_1 = require("./Shared/datagrid/format");
var orderby_1 = require("./Shared/datagrid/orderby");
var mddatagrid_component_1 = require("./Shared/datagrid/mddatagrid.component");
var samplepagination_component_1 = require("./Components/samplepagination.component");
var pagination_component_1 = require("./Shared/datagrid/pagination/pagination.component");
var addtolist_component_1 = require("./components/addtolist.component");
var md_component_1 = require("./components/md.component");
var md1_component_1 = require("./components/md1.component");
var md3_component_1 = require("./components/md3.component");
var uploadpic_component_1 = require("./components/uploadpic.component");
var mdgrid_component_1 = require("./components/mdgrid.component");
var mdgrid1_1 = require("./components/mdgrid1");
var userlist2_component_1 = require("./components/userlist2.component");
var adminheader_component_1 = require("./components/adminheader.component");
var autocompleteexample_component_1 = require("./components/autocompleteexample.component");
var userreport_component_1 = require("./components/userreport.component");
var slider_component_1 = require("./components/slider.component");
//import { CarouselModule } from 'angular4-carousel';
var ng2_carouselamos_1 = require("ng2-carouselamos");
var ngx_editor_1 = require("ngx-editor");
/*
@NgModule({
    exports: [MdPaginatorModule]
})
*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule,
            animations_1.BrowserAnimationsModule,
            material_1.MaterialModule,
            material_1.MdNativeDateModule, material_1.MdTableModule,
            ngx_editor_1.NgxEditorModule
            //    , CarouselModule
            ,
            ng2_carouselamos_1.Ng2CarouselamosModule
        ],
        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, home_component_1.HomeComponent, user_pipe_1.UserFilterPipe, search_component_1.SearchComponent, manageuser_component_1.ManageUser,
            datagrid_component_1.DataGrid, format_1.Format, orderby_1.OrderBy, userlist_component_1.UserListComponent, samplepagination_component_1.SamplePaginationComponent, pagination_component_1.PaginationComponent, addtolist_component_1.AddToList,
            md_component_1.MD, md1_component_1.MD1, md3_component_1.MD3, uploadpic_component_1.UploadPic, mdgrid_component_1.MDGridComponent, adminheader_component_1.AdminHeaderComponent, mdgrid1_1.MDGrid1, mddatagrid_component_1.MDDataGrid, autocompleteexample_component_1.AutoCompleteExample, userlist2_component_1.UserList1Component, userreport_component_1.UserReportComponent,
            slider_component_1.SliderComponent],
        providers: [{ provide: core_1.ErrorHandler, useClass: errorhandler_1.default }, { provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService, user_pipe_1.UserFilterPipe],
        entryComponents: [manageuser_component_1.ManageUser, userreport_component_1.UserReportComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
