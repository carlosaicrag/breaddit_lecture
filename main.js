const { sequelize, User } = require("./models");
const { Op } = require("sequelize");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");
  
  // const user = await User.findByPk(1);
  // console.log(user.toJSON());
  
  // const user = User.build({ // build, not saved!
  //   username: 'youngcitrus',
  //   email: 'youngcitrus@gmail.com',
  //   age: 2
  // });

  // await user.save(); // save to DB

  // const user = await User.create({ // build & save in one command
  //   username: 'banana',
  //   email: 'banana@gmail.com',
  //   age: 10
  // });

  // const user2 = await User.create({ // build & save in one command
  //   username: 'khalid',
  //   email: 'khalid@wedabestmusic.com',
  //   age: 10
  // });

  //Updating a user!
  // const user = await User.findByPk(1);
  // console.log(user.toJSON());
  // user.username = 'khalid';
  // await user.save();
  // console.log(user.toJSON());

  // Destroying a record in our DB

  // const user = await User.findByPk(1);
  // await user.destroy();

  // await User.destroy({ where: {id: 3} });
  
  // Find all users
  // const users = await User.findAll({ where: {username: 'banana'}});
  // console.log(JSON.stringify(users, null, 2));

  // const users = await User.findAll({ where: {username: ['banana', 'khalid']} });
  // console.log(JSON.stringify(users, null, 2));

  // const users = await User.findAll({ 
  //   where: { 
  //     username: {
  //       [Op.ne]: "banana" // ne stands for "not equal"
  //     } 
  //   } 
  // });
  // console.log(JSON.stringify(users, null, 2));

  // const users = await User.findAll({
  //   where: {
  //     [Op.and]: [
  //       { username: { [Op.ne]: 'banana' } },
  //       { email: "youngcitrus@gmail.com" }
  //     ]
  //   } 
  // });
  // console.log(JSON.stringify(users, null, 2));

  // const users = await User.findAll({
  //   where: {
  //     [Op.or]: [
  //       { username: 'banana' },
  //       { email: 'youngcitrus@gmail.com' }
  //     ]
  //   }
  // });
  // console.log(JSON.stringify(users, null, 2));

  // const users = await User.findAll({
  //   where: {
  //     age: { [Op.gt]: 4} 
  //   }
  // })
  // console.log(JSON.stringify(users, null, 2));

  // find users sorted by age
  // const users = await User.findAll({
  //   order: [ ["age", "desc"] ]
  // });
  // console.log(JSON.stringify(users, null, 2));
  
  // find oldest user
  // const users = await User.findAll({
  //   order: [["age", "desc"]],
  //   limit: 1
  // });
  // console.log(JSON.stringify(users, null, 2));

  // findOne --- returns 1 object, not an array of objects
  // find the first user whose age is greater than 4
  // const user = await User.findOne({ 
  //   where: { age: {[Op.gt]: 4} } // gt --> greater than
  // });
  // console.log(JSON.stringify(user, null, 2));


  // VALIDATIONS:
  // const user = User.build({

  // });

  // try {
  //   await user.save();
    
  // } catch(e) {
  //   console.log("we will fix and try again");
  // }
  // user.username = 'bananapants';
  // user.email = 'bananapants@monkeymessaging.com';
  // user.age = 12;

  // try {
  //   await user.save();
  //   console.log("success!")
  // } catch(e) {
  //   console.log("ERRORRRRR")
  // }

  // try {
  //   const user = await User.create({
  //     username: 'averylongusername123',
  //     email: 'whateverIwant@yaaa.com',
  //     age: 10
  //   });
  //   console.log("Success!")
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    const user = await User.create({
      username: 'mango',
      email: 'mangothecat@aa.io',
      age: 5
    });
    console.log("Success!")
  } catch (e) {
    console.log(e);
  }
  

  // Close database connection when done with it.
  await sequelize.close();
}

main();
