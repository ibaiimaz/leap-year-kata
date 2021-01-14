const LeapYearChecker = require('../src/LeapYearChecker');

describe('LeapYearChecker', () => {
    it('should determine that is not a leap year if not divisible by 4', () => {
        const leapYearChecker = new LeapYearChecker();
        expect(leapYearChecker.isLeap(2001)).to.equal(false);
    });
});
