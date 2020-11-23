import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../providers/auth-service.service';
var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardGuard.prototype.canActivate = function (route) {
        if (!this.authService.authenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthServiceService])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());
export { AuthGuardGuard };
//# sourceMappingURL=auth-guard.guard.js.map