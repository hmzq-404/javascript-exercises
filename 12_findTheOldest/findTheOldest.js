const findTheOldest = function(people) {
    const sortedPeople = people.sort((previousPerson, nextPerson) => {
        let currentYear = 2023;
        if (!("yearOfDeath" in previousPerson)) previousPerson.yearOfDeath = 2023;
        if (!("yearOfDeath" in nextPerson)) nextPerson.yearOfDeath = 2023;
        let previousPersonAge = previousPerson.yearOfDeath - previousPerson.yearOfBirth;
        let nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
        return previousPersonAge > nextPersonAge ? 1 : -1;
    })
    return sortedPeople[sortedPeople.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
