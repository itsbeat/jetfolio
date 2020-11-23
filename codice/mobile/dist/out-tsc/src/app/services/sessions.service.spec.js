import { TestBed } from '@angular/core/testing';
import { SessionsService } from './sessions.service';
describe('SessionsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SessionsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=sessions.service.spec.js.map