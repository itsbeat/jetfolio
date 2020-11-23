import { TestBed, inject } from '@angular/core/testing';
import { AuthGuardGuard } from './auth-guard.guard';
describe('AuthGuardGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AuthGuardGuard]
        });
    });
    it('should ...', inject([AuthGuardGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=auth-guard.guard.spec.js.map