import * as tslib_1 from "tslib";
import { AuthServiceService } from './../providers/auth-service.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        this.router.navigate(['/coaching-paths']);
        return;
        if (this.fieldValid()) {
            this.authService.login(this.username, this.password);
            if (this.authService.authenticated()) {
            }
            else {
                this.usrErr = "Errrore username";
                this.pwdErr = 'Errore password';
            }
        }
    };
    LoginPage.prototype.fieldValid = function () {
        return true;
        if (!this.username || !this.password) {
            this.usrErr = !this.username ? 'Errore username' : null;
            this.pwdErr = !this.password ? 'Errore password' : null;
            return false;
        }
        return true;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LoginPage.prototype, "username", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthServiceService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map