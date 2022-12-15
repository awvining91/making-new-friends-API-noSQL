// Various functions that will help with the routes
const router = require('express').Router();


const {

    eraseReaction,

    newReaction,

    newThought,

    updateThought,

    newThought,

    retrieveIdThoughts,

    retrieveAllThoughts,

} = require('../../controllers/thought-controller');


router
    .route('/')
    .get(retrieveAllThoughts)
    .post(newThought);


router   
    .route('/:id')
    .get(retrieveIdThoughts)
    .put(updateThought)
    .delete(eraseThought);

router

    .route('/:thoughtId/reactions')
    .post(newReaction);

router 

    .route('/:thoughtId/reactions/:reactionId')
    .delete(eraseReaction);

module.exports = router; 
