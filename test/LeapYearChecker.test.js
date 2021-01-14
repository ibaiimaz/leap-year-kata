const LeapYearChecker = require('../src/LeapYearChecker');

describe('LeapYearChecker', () => {
    it('should determine that is not a leap year if not divisible by 4', () => {
        const leapYearChecker = new LeapYearChecker();
        expect(leapYearChecker.isLeap(2001)).to.equal(false);
    });

    it('should determine that is a leap year if divisible by 4', () => {
        const leapYearChecker = new LeapYearChecker();
        expect(leapYearChecker.isLeap(1996)).to.equal(true);
    });

    it('should determine that is not a leap year if divisible by 100', () => {
        const leapYearChecker = new LeapYearChecker();
        expect(leapYearChecker.isLeap(1900)).to.equal(false);
    });
});
