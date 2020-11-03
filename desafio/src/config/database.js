module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'deliverit',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
