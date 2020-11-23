import * as tslib_1 from "tslib";
import { ProfileService } from './../services/profile.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(profile_service, router) {
        this.profile_service = profile_service;
        this.router = router;
        this.userDetails = null;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.userDetails = this.profile_service.getUserInfo();
        console.log(this.userDetails);
    };
    ProfilePage.prototype.createSession = function () {
        console.log('Nuova sessione click');
    };
    ProfilePage.prototype.goToSession = function (session) {
        if (session.status == 'active')
            this.router.navigateByUrl('/session-details');
    };
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService,
            Router])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map