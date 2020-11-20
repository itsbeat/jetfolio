import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService() {
        this.isLoggedIn = false;
    }
    AuthServiceService.prototype.login = function (username, password) {
        if (username == 'utente@elan.it' && password == 'password')
            this.isLoggedIn = true;
    };
    AuthServiceService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthServiceService.prototype.authenticated = function () {
        return this.isLoggedIn;
    };
    AuthServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthServiceService);
    return AuthServiceService;
}());
export { AuthServiceService };
//# sourceMappingURL=auth-service.service.js.map