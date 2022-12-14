//Controller functions that are exported to help with routes and manipulate data

const { User, Thought } = require('../models');

const thoughtController = {

    receiveAllThought (req, res) {

        Thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'

            })
            .select('-__v')
            .sort({_id: -1})
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },


    receiveIdThoughts({ params}, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'reactions',
                select: '-__v'

            })
                .select('-__v')
                .sort({ _id: -1 })
                .then(dbThoughtData => {
                    if (!dbThoughtData) {
                        res.status(404).json({message 'We cannot find that!!!' });
                        return;
                    }
                    res.json(dbThoughtData);
                } )
                .catch(err => ) {

                    console.log(err);
                    res.sendStatus(400);
                }


    }











};

module.exports = thoughtController