"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var userlist_component_1 = require("./components/userlist.component");
var home_component_1 = require("./components/home.component");
var samplepagination_component_1 = require("./Components/samplepagination.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'userlist', component: userlist_component_1.UserListComponent },
    { path: 'samplepagination', component: samplepagination_component_1.SamplePaginationComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map