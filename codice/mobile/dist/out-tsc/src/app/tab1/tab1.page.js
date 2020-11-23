import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
        this.pages = [
            {
                link: '/choose-coach',
                title: 'Scegli il tuo coach',
                text: 'Schermata scegli il tuo coach'
            },
            {
                link: '/date-session-chooser',
                title: 'Imposta date sessioni',
                text: 'Schermata imposta date sessioni'
            },
            {
                link: '/profile',
                title: 'Profilo Personale',
                text: 'Schermata profilo personale'
            },
            {
                link: '/teaching-agreement',
                title: 'Patto di Coaching',
                text: 'Schermata patto di Coaching'
            },
            {
                link: '/assessment-survey',
                title: 'Questionario Valutazione',
                text: 'Schermata questionario di valutazione'
            },
            {
                link: '/survey-results',
                title: 'Risultati Questionario',
                text: 'Schermata risultati questionario'
            },
            {
                link: '/session-details',
                title: 'Dettaglio Sessione',
                text: 'Schermata dettaglio sessione'
            },
            {
                link: '/coaching-paths',
                title: 'Percorsi di Coaching',
                text: 'Schermata percorsi di coaching'
            },
        ];
    }
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        })
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map