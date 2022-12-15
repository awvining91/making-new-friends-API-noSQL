
//This model contains our nonrelation data which we will connect with routes and manipulate with the controller to 
// do CRUD operations 

const { Schema, model, Types } = require ('mongoose');
const moment = require ('moment');

const ReactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },

    username: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        
        default: Date.now,

        get: valCreate => moment(valCreate).format('MMM DD, YYYY [@] hh:mm a')
    }





},

    { toJSON: {
        virtuals: true,
        getters: true
    },

}

);


const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,

        maxlenght: 250
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: valCreate => moment(valCreate).format('MMM DD, YYYY [at] hh:mm a')
    },

    username: {
        type: String,
        required: true
    },

    reactions: [ReactionSchema]
    },

        {
            toJSON: {
                virtuals: true,
                getters: true,
            },
            id: false
        }

);


ThoughtSchema.virtual('reactionCount').get(function ()
{
    return this.reactions.length;


});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought; 






