module.exports = app => {
    const instaStories = require("../controllers/instaStories.controller.js");
  
    var router = require("express").Router();
  
    // Create a new InstaStory
    router.post("/create", instaStories.create);
  
    // Retrieve all InstaStories
    router.get("/", instaStories.findAll);
  
    // Retrieve all published InstaStories
    router.get("/videos", instaStories.findAllVideos);
  
    // Retrieve a single InstaStory with id
    router.get("/:id", instaStories.findOne);
  
    // Update a InstaStory with id
    router.put("/:id", instaStories.update);
  
    // Delete a InstaStory with id
    router.delete("/:id", instaStories.delete);
  
    // Delete all InstaStories
    router.delete("/", instaStories.deleteAll);
  
    app.use('/api/instaStories', router);
  };