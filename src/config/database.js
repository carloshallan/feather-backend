process.env.FEATHER_DATABASE_NAME='feather_db'
process.env.FEATHER_DATABASE_HOST='localhost'
process.env.FEATHER_DATABASE_USERNAME="carloshallan"
process.env.FEATHER_DATABASE_HOSTFEATHER_DATABASE_PASSWORD="Comeflywithme"

module.exports = {
    dialect: 'postgres',
    host: process.env.FEATHER_DATABASE_HOST,
    username: process.env.FEATHER_DATABASE_USERNAME,
    password: process.env.FEATHER_DATABASE_PASSWORD,
    database: process.env.FEATHER_DATABASE_NAME,
    define: {
        timestamps: true,
        underscored: true
    }
};