const { sequelize, User } = require("./models");

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
  
  const user = await User.findByPk(1);
  console.log(user.toJSON());
  console.log(user.username);
  user.username = 'banana';
  console.log(user.username);
  await user.save();
  
  // Close database connection when done with it.
  await sequelize.close();
}

main();
