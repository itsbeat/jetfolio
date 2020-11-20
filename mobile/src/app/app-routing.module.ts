import { AuthGuardGuard } from './services/auth-guard.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: '',
    redirectTo: 'coaching-paths',
    pathMatch: 'full'
  },
  {
    path: 'choose-coach',
    loadChildren: './choose-coach/choose-coach.module#ChooseCoachPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'date-session-chooser',
    loadChildren: './date-session-chooser/date-session-chooser.module#DateSessionChooserPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'profile/:coach_path_id',
    loadChildren: './profile/profile.module#ProfilePageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'teaching-agreement/:coaching_path_id',
    loadChildren: './teaching-agreement/teaching-agreement.module#TeachingAgreementPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'assessment-survey',
    loadChildren: './assessment-survey/assessment-survey.module#AssessmentSurveyPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'survey-results',
    loadChildren: './survey-results/survey-results.module#SurveyResultsPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'session-details/:plan_id/:session_id',
    loadChildren: './session-details/session-details.module#SessionDetailsPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'coaching-paths',
    loadChildren: './coaching-paths/coaching-paths.module#CoachingPathsPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'start-path',
    loadChildren: './start-path/start-path.module#StartPathPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'session-action-details/:type/:plan_id/:sessionId/:actionId',
    loadChildren: './session-action-details/session-action-details.module#SessionActionDetailsPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'generate-report/:plan_id/:session_id',
    loadChildren: './generate-report/generate-report.module#GenerateReportPageModule',
    canActivate: [AuthGuardGuard]
  },
  { 
    path: 'save-plan-sessions', loadChildren: './create-new-path/create-new-path.module#CreateNewPathPageModule',
    canActivate: [AuthGuardGuard]
  },
  { 
    path: 'userprofile', loadChildren: './userprofile/userprofile.module#UserprofilePageModule',
    canActivate: [AuthGuardGuard]
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
