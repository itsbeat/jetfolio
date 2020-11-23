import * as tslib_1 from "tslib";
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(toastController, statusBar) {
        this.toastController = toastController;
        this.statusBar = statusBar;
    }
    Tab2Page.prototype.ngOnInit = function () {
        console.log('Started Tab 2 activity');
        this.statusBar.overlaysWebView(true);
        this.statusBar.backgroundColorByHexString('#ffffff');
    };
    Tab2Page.prototype.btnClick = function (index) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(index);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Card #' + index,
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController,
            StatusBar])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map