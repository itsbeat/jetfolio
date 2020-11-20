import * as tslib_1 from "tslib";
import { ProfileService } from './../services/profile.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var TeachingAgreementPage = /** @class */ (function () {
    function TeachingAgreementPage(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.userDetails = null;
    }
    TeachingAgreementPage.prototype.ngOnInit = function () {
        this.userDetails = this.profileService.getUserInfo();
    };
    TeachingAgreementPage.prototype.saveTeachingAgreement = function () {
        console.log('saveTeachingAgreement');
        this.router.navigateByUrl('/profile');
    };
    TeachingAgreementPage = tslib_1.__decorate([
        Component({
            selector: 'app-teaching-agreement',
            templateUrl: './teaching-agreement.page.html',
            styleUrls: ['./teaching-agreement.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ProfileService,
            Router])
    ], TeachingAgreementPage);
    return TeachingAgreementPage;
}());
export { TeachingAgreementPage };
//# sourceMappingURL=teaching-agreement.page.js.map