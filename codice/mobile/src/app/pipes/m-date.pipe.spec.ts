import { MomentPipe } from './m-date.pipe';

describe('MDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MomentPipe();
    expect(pipe).toBeTruthy();
  });
});
