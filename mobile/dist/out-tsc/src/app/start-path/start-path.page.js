import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var StartPathPage = /** @class */ (function () {
    function StartPathPage(router) {
        this.router = router;
        this.steps = [
            {
                title: "Questionario",
                text: "\n        Per iniziare, \u00E8 necessario compilare un breve questionario di autovalutazione.\n        Questo ci servir\u00E0 per proporti i coach piu' vicini alle tue esigenze!\n      ",
                color: "primary",
            },
            {
                title: "Scelta Coach",
                text: "\n        Potrai scegliere il coach che ti seguir\u00E0 nel tuo percorso.\n      ",
                color: "secondary",
            },
            {
                title: "Prenotazione Sessione",
                text: "\n        Ti verr\u00E0 richiesto di scegliere 3 date da proporre al coach per svolgere la prima sessione di coaching.\n      ",
                color: "rose",
            },
        ];
        this.router = router;
    }
    StartPathPage.prototype.ngOnInit = function () {
    };
    StartPathPage.prototype.startCoachingPathCreation = function () {
        this.router.navigateByUrl('/assessment-survey');
    };
    StartPathPage = tslib_1.__decorate([
        Component({
            selector: 'app-start-path',
            templateUrl: './start-path.page.html',
            styleUrls: ['./start-path.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], StartPathPage);
    return StartPathPage;
}());
export { StartPathPage };
//# sourceMappingURL=start-path.page.js.map