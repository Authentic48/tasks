var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var people = [
    {
        firstName: 'Denis',
        lastName: 'Zemev',
        amount: 54489,
        debt: 0
    },
    {
        firstName: 'Daniel',
        lastName: 'Sokolov',
        amount: 5448156,
        debt: 249871
    },
    {
        firstName: 'Viktor',
        lastName: 'Skiba',
        amount: 498795,
        debt: 0
    },
    {
        firstName: 'Agnya',
        lastName: 'Zemev',
        amount: 5448781,
        debt: 32148
    },
    {
        firstName: 'Ibrahim',
        lastName: 'Fall',
        amount: 15489,
        debt: 2459
    },
];
var peopleWithDebt = function (peop) {
    return peop.filter(function (person) {
        return person.debt != 0;
    });
};
var debtIncr = function (peopWithDebt) {
    return peopWithDebt.map(function (person) {
        return __assign(__assign({}, person), { debt: person.debt + person.debt * 0.42 });
    });
};
console.log(debtIncr(peopleWithDebt(people)));
