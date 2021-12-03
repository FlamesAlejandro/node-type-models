import { Sequelize } from 'sequelize';

const db = new Sequelize('camiones', 'root','123456', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db