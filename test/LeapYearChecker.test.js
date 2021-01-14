const LeapYearChecker = require('../src/LeapYearChecker');

describe('LeapYearChecker', () => {
    let leapYearChecker;

    beforeEach(() => {
        leapYearChecker = new LeapYearChecker();
    });

    it('should determine that is not a leap year if not divisible by 4', () => {
        expect(leapYearChecker.isLeap(2001)).to.equal(false);
    });

    it('should determine that is a leap year if divisible by 4', () => {
        expect(leapYearChecker.isLeap(1996)).to.equal(true);
    });

    it('should determine that is not a leap year if divisible by 100', () => {
        expect(leapYearChecker.isLeap(1900)).to.equal(false);
    });

    it('should determine that is a leap year if divisible by 100 but also by 400', () => {
        expect(leapYearChecker.isLeap(2000)).to.equal(true);
    });
});
