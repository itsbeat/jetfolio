import { TestBed } from '@angular/core/testing';
import { AuthServiceService } from './auth-service.service';
describe('AuthServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-service.service.spec.js.map