
const router = require('express').Router();


const {

    deleteReaction,
    createReaction,
    deleteThought,
    updateThought,
    createThought,
    getThoughtsById,
    getAllThought,
} = require('../../controllers/thought-controller');


router
    .route('/')
    .get(getAllThought)
    .post(createThought);


router  
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router

    .route('/:thoughtId/reactions')
    .post(createReaction);

router 

    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router; 
