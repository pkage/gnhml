var profiles = [{
    name: "Jessica Shi",
    email: "jshi17@choate.edu",
    class: "2017",
    team_id: "roflcoptor",
    school_id: "choate",
    _id: "1"
}, {
    name: "Philip Xu",
    email: "jxu16@choate.edu",
    class: "2016",
    team_id: "roflcoptor",
    school_id: "choate",
    _id: "2"
}, {
    name: "Prep Prepington",
    email: "pprepington@exeter.edu",
    class: "2017",
    team_id: "lolcoptor",
    school_id: "exeter",
    _id: "3"
}];


var teams = [{
    name: "Rofl Coptor",
    school_id: "choate",
    level: "Varsity"
}, {
    name: "Lol Coptor",
    school_id: "exeter",
    level: "Varsity"
}];


var schools = [{
    name: "Choate Rosemary Hall"
}, {
    name: "Philips Exeter Academy"
}];

var competitions_version_1 = [{
    date: "Tue 01-01-2009",
    teams: [{
        name: "Rofl Coptor",
        members: [{
            _id: "1"
        }, {
            _id: "2"
        }]
    }, {
        name: "Lol Coptor",
        members: [{
            _id: "3"
        }]
    }],
    _competition_id: "1"
}];

var competitions_version_2 = [{
    date: "Tue 01-01-2009",
    members: [{
        _id: "1",
        team_id: "roflcoptor"
    }, {
        _id: "2",
        team_id: "roflcoptor"
    }, {
        _id: "3",
        team_id: "lolcoptor"
    }],
    _competition_id: "1"
}];

var scores_all_approach = [{
    _id: "1",
    _competition_id: "1",
    _team_id: "roflcoptor",
    scores: [
        [1, 2, 3],
        [1, 2, 3],
        [0, 0, 3]
    ]
}, {
    _id: "2",
    _competition_id: "1",
    _team_id: "roflcoptor",
    scores: [
        [0, 2, 0],
        [1, 0, 3],
        [0, 1, 3]
    ]
}, {
    _id: "3",
    _competition_id: "1",
    _team_id: "lolcoptor",
    scores: [
        [0, 1, 1],
        [1, 1, 2],
        [1, 1, 2]
    ]
}];

var scores_competition_approach = [{
    _competition_id: "1",
    teams: [{
        _team_id: "roflcoptor",
        members: [{
            _id: "1",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }, {
            _id: "2",
            scores: [
                [0, 2, 0],
                [1, 0, 3],
                [0, 1, 3]
            ]
        }]
    }, {
        _team_id: "lolcoptor",
        members: [{
            _id: "3",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }]
    }]
}, {
    _competition_id: "2",
    teams: [{
        _team_id: "roflcoptor",
        members: [{
            _id: "1",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }, {
            _id: "2",
            scores: [
                [0, 2, 0],
                [1, 0, 3],
                [0, 1, 3]
            ]
        }]
    }, {
        _team_id: "lolcoptor",
        members: [{
            _id: "3",
            scores: [
                [0, 1, 1],
                [1, 1, 2],
                [1, 1, 2]
            ]
        }]
    }]
}];
