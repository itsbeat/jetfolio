import { TestBed } from '@angular/core/testing';
import { CoachService } from './coach.service';
describe('CoachService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CoachService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=coach.service.spec.js.map