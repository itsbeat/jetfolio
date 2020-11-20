import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profile.service';
describe('ProfileService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProfileService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=profile.service.spec.js.map