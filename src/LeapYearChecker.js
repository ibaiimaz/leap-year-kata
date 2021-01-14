class LeapYearChecker {

    isLeap(year) {
        if (this._isDivisibleBy(4, year) && (!this._isDivisibleBy(100, year) || this._isDivisibleBy(400, year))) {
            return true;
        }
        return false;
    }

    _isDivisibleBy(divisor, year) {
        return year % divisor === 0;
    }
}

module.exports = LeapYearChecker;
