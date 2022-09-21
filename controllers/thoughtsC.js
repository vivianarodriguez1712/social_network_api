const { Users, Thoughts, Reaction } = require('../models');

const thoughtsC = {
    getAllThoughts (req,res){
            Thoughts.find({})
              .then(dbThoughtData => res.json(dbThoughtData))
              .catch(err => {
                console.log(err);
                res.status(400).json(err);
              });
    },

    getThoughtsById (req,res){
        
    },

    createThought (req,res){
        
    },

    updateThought (req,res){
        
    },

    deleteThought (req,res){
        
    },

    addReaction (req,res){
        
    },

    deleteReaction (req,res){
        
    },
}

module.exports = thoughtsC 