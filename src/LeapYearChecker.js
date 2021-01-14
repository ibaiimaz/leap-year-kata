class LeapYearChecker {

    isLeap(year) {
        if (year % 4 !== 0) {
            return false;
        }
        return true;
    }
}

module.exports = LeapYearChecker;
