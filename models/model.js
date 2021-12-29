module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define(
    "guestBook",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return Tutorial;
};
