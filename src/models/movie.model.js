import sequelize from 'sequelize';
import { DataTypes } from 'sequelize';

const movies = sequelize.define({
    title: { type: DataTypes.STRING, allowNull: false },
    director: { type: DataTypes.STRING, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    genre: { type: DataTypes.STRING, allownull: false },
    description: { type: DataTypes.STRING, allownull: false }
});

export default movies;