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
var Observable_1 = require("rxjs/Observable");
var userDataSource = (function (_super) {
    __extends(userDataSource, _super);
    function userDataSource(_userservice, _paginator, _url) {
        var _this = _super.call(this) || this;
        _this._userservice = _userservice;
        _this._paginator = _paginator;
        _this._url = _url;
        return _this;
    }
    /*constructor(private _userservice: UserService, private _url: string) {
        super();
    }*/
    userDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [this._userservice.get(this._url), this._paginator];
        return Observable_1.Observable.merge.apply(Observable_1.Observable, displayDataChanges).map(function (data, page) {
            var clonedData = data.slice();
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            return data.splice(startIndex, _this._paginator.pageSize);
        });
    };
    userDataSource.prototype.disconnect = function () { };
    return userDataSource;
}(collections_1.DataSource));
exports.userDataSource = userDataSource;
//# sourceMappingURL=userdatasource.js.map