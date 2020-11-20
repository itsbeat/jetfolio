import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var CoachingPathsPage = /** @class */ (function () {
    function CoachingPathsPage(router) {
        this.router = router;
        this.router = router;
    }
    CoachingPathsPage.prototype.ngOnInit = function () {
    };
    CoachingPathsPage.prototype.addCoachingPath = function () {
        console.log("Adding path");
        this.router.navigateByUrl("/start-path");
    };
    CoachingPathsPage = tslib_1.__decorate([
        Component({
            selector: 'app-coaching-paths',
            templateUrl: './coaching-paths.page.html',
            styleUrls: ['./coaching-paths.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], CoachingPathsPage);
    return CoachingPathsPage;
}());
export { CoachingPathsPage };
//# sourceMappingURL=coaching-paths.page.js.map