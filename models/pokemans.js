// Creating our User model
module.exports = function(sequelize, DataTypes) {
    var Pokemon = sequelize.define("pokemon", {
        Number: { type: DataTypes.INTERGER },
        Name: { type: DataTypes.STRING },
        Type1: DataTypes.STRING,
        Type2: DataTypes.STRING,
        Total: DataTypes.INT,
        HP: DataTypes.INT,
        Attack: DataTypes.INT,
        Defense: DataTypes.INT,
        Sp_Atk: DataTypes.INT,
        Sp_Def: DataTypes.INT,
        Speed: DataTypes.INT,
        Generation: DataTypes.INT,
        Legendary: DataTypes.INT

    });
    return Pokemon;
}















//   // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
//   User.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   // Hooks are automatic methods that run during various phases of the User Model lifecycle
//   // In this case, before a User is created, we will automatically hash their password
//   User.addHook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
//   return User;
// };