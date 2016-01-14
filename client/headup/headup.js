Template.headup.helpers({
    'HeadupCollection': function() {
        console.log(HeadupCollection.find({}).teams);
        return HeadupCollection.find({}).teams;
    },

    tableSettings: function() {
        return {
            fields: [{
                key: 'team_name',
                label: 'Teams'
            }, {
                key: 'r1_score',
                label: 'Round 1 Score'
            }, {
                key: 'r2_score',
                label: 'Round 2 Score'
            }, {
                key: 'r3_score',
                label: 'Round 3 Score'
            }, {
                key: 'r4_score',
                label: 'Round 4 Score'
            }, {
                key: 'r5_score',
                label: 'Round 5 Score'
            }, {
                key: 'r6_score',
                label: 'Round 6 Score'
            }, {
                key: 'total_score',
                label: 'Total Score'
            }]
        };
    }
});
