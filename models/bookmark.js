const bookmark = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('bookmark', {
        url: {
            type: DataTypes.STRING()
        },
        comment: {
            type: DataTypes.STRING()
        },
        tags: {
            type: DataTypes.STRING()
        }
    }, {
        timestamps: false
    });
    return Bookmark;
}

module.exports = bookmark;