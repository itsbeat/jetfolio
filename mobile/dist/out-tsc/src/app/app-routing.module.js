import * as tslib_1 from "tslib";
import { AuthGuardGuard } from './services/auth-guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    {
        path: 'login',
        pathMatch: 'full',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {
        path: '',
        loadChildren: './tabs/tabs.module#TabsPageModule',
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'choose-coach',
        loadChildren: './choose-coach/choose-coach.module#ChooseCoachPageModule'
    },
    {
        path: 'date-session-chooser',
        loadChildren: './date-session-chooser/date-session-chooser.module#DateSessionChooserPageModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarPageModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfilePageModule'
    },
    {
        path: 'teaching-agreement',
        loadChildren: './teaching-agreement/teaching-agreement.module#TeachingAgreementPageModule'
    },
    {
        path: 'assessment-survey',
        loadChildren: './assessment-survey/assessment-survey.module#AssessmentSurveyPageModule'
    },
    {
        path: 'survey-results',
        loadChildren: './survey-results/survey-results.module#SurveyResultsPageModule'
    },
    {
        path: 'session-details',
        loadChildren: './session-details/session-details.module#SessionDetailsPageModule'
    },
    {
        path: 'coaching-paths',
        loadChildren: './coaching-paths/coaching-paths.module#CoachingPathsPageModule'
    },
    {
        path: 'start-path',
        loadChildren: './start-path/start-path.module#StartPathPageModule'
    },
    {
        path: 'session-action-details/:type/:sessionId/:actionId',
        loadChildren: './session-action-details/session-action-details.module#SessionActionDetailsPageModule'
    },
    {
        path: 'generate-report/:sessionId',
        loadChildren: './generate-report/generate-report.module#GenerateReportPageModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map