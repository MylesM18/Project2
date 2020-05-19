module.exports = function(sequelize, DataTypes) {
    var Song = sequelize.define("Song", {
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      song_lyric: {
          type: DataTypes.TEXT
      }
    });
    return Song;
  };