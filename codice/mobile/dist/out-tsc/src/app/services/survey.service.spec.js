import { TestBed } from '@angular/core/testing';
import { SurveyService } from './survey.service';
describe('SurveyService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SurveyService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=survey.service.spec.js.map