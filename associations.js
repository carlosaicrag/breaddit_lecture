const { Post, Subbreaddit, User, sequelize} = require("./models")

async function queryPost() {
    const post = await Post.findByPk(1, { include: [User, Subbreaddit] });
    // console.log( 
    //     post.Subbreaddit.dataValues,
    //     post.User.dataValues
    // );
    const user = await User.findByPk(1, { include: [Post, Subbreaddit] });
    user.Posts.forEach(post => {
        console.log(post.dataValues);
    });
    user.Subbreaddits.forEach(subbreadit => {
        console.log(subbreadit.dataValues);
    })
    await sequelize.close();
}

queryPost();
