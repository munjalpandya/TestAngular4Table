"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var collections_1 = require("@angular/cdk/collections");
var userDataSource = (function (_super) {
    __extends(userDataSource, _super);
    //constructor(private _userservice: UserService, private _paginator: MdPaginator, private _url: string) {
    //    super();
    //}
    function userDataSource(_userservice, _url) {
        var _this = _super.call(this) || this;
        _this._userservice = _userservice;
        _this._url = _url;
        return _this;
    }
    userDataSource.prototype.connect = function () {
        //const displayDataChanges = [this._userservice.get(this._url), this._paginator];
        //return Observable.merge(...displayDataChanges).map((data, page) => {
        //    const clonedData = data.slice();
        //    const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        //    return data.splice(startIndex, this._paginator.pageSize);
        //})
        //const displayDataChanges = [this._userservice.get(this._url)];
        //console.log("User Data Length: " + displayDataChanges.entries);
        console.log("URL: " + this._url);
        console.log(this._userservice.get(this._url));
        //return Observable.of(<any>this._userservice.get(this._url).map((response: Response) => <any>response.json()));
        return this._userservice.get(this._url);
    };
    userDataSource.prototype.disconnect = function () { };
    return userDataSource;
}(collections_1.DataSource));
exports.userDataSource = userDataSource;
//# sourceMappingURL=userdatasource.js.map