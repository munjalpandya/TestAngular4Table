"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var userlist_component_1 = require("./components/userlist.component");
var home_component_1 = require("./components/home.component");
var samplepagination_component_1 = require("./Components/samplepagination.component");
var addtolist_component_1 = require("./components/addtolist.component");
var md_component_1 = require("./components/md.component");
var md1_component_1 = require("./components/md1.component");
var md3_component_1 = require("./components/md3.component");
var uploadpic_component_1 = require("./components/uploadpic.component");
var mdgrid_component_1 = require("./components/mdgrid.component");
var mdgrid1_1 = require("./components/mdgrid1");
var autocompleteexample_component_1 = require("./components/autocompleteexample.component");
var userlist2_component_1 = require("./components/userlist2.component");
var slider_component_1 = require("./components/slider.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'userlist', component: userlist_component_1.UserListComponent },
    { path: 'samplepagination', component: samplepagination_component_1.SamplePaginationComponent },
    { path: 'addtolist', component: addtolist_component_1.AddToList },
    { path: 'masterdetail', component: md_component_1.MD },
    { path: 'md', component: md1_component_1.MD1 },
    { path: 'md3', component: md3_component_1.MD3 },
    { path: 'uploadpic', component: uploadpic_component_1.UploadPic },
    { path: 'mdgrid', component: mdgrid_component_1.MDGridComponent },
    { path: 'mdgrid1', component: mdgrid1_1.MDGrid1 },
    { path: 'ace', component: autocompleteexample_component_1.AutoCompleteExample },
    { path: 'userlist1', component: userlist2_component_1.UserList1Component },
    { path: 'slider', component: slider_component_1.SliderComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
