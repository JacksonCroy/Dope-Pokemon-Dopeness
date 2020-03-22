// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Pokemon = sequelize.define("pokemon", {
        Number: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Name: DataTypes.STRING,
        Type1: DataTypes.STRING,
        Type2: DataTypes.STRING,
        Total: DataTypes.INTEGER,
        HP: DataTypes.INTEGER,
        Attack: DataTypes.INTEGER,
        Defense: DataTypes.INTEGER,
        Sp_Atk: DataTypes.INTEGER,
        Sp_Def: DataTypes.INTEGER,
        Speed: DataTypes.INTEGER,
        Generation: DataTypes.INTEGER,
        Legendary: DataTypes.INTEGER,
        User: DataTypes.INTEGER,
        Enemy: DataTypes.INTEGER
    }, { timestamps: false });
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