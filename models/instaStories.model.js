module.exports = (sequelize, Sequelize) => {
    const instaStories = sequelize.define("instaStories", {
      userName: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return instaStories;
  };