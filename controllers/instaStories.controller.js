const db = require("../models");
const InstaStory = db.instaStories;
const Op = db.Sequelize.Op;

// Create and Save a new story
exports.create = (req, res) => {
  
// Validate request
if (!req.body.userName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    
  }

  // Create a InstaStory
  const instaStory = {
    userName: req.body.userName,
    bio: req.body.bio,
    video: req.body.video
  };

  // Save InstaStory in the database
  InstaStory.create(instaStory)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the InstaStory."
      });
    });

};

// Retrieve all stories from the database.
exports.findAll = (req, res) => {
    const userName = req.query.userName;
    var condition = userName ? { userName: { [Op.iLike]: `%${userName}%` } } : null;
  
    InstaStory.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving instaStorys."
        });
      });
};

// Find a single stories with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    InstaStory.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find InstaStory with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving InstaStory with id=" + id
        });
      });
};

// Update a story by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    InstaStory.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "InstaStory was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update InstaStory with id=${id}. Maybe InstaStory was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating InstaStory with id=" + id
        });
      });
};

// Delete a story with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    InstaStory.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "InstaStory was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete InstaStory with id=${id}. Maybe InstaStory was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete InstaStory with id=" + id
        });
      });
};

// Delete all stories from the database.
exports.deleteAll = (req, res) => {
    InstaStory.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} InstaStorys were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all instaStorys."
          });
        });
};

// Find all stories with videos
exports.findAllVideos = (req, res) => {
    InstaStory.findAll({ where: { video: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving instaStorys."
      });
    });
};