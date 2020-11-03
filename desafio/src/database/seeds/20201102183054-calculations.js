module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'calculations',
      [
        {
          param_description: '<=3days_fine',
          param_value: 0.02,
          param_percent: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          param_description: '<=3days_interest',
          param_value: 0.001,
          param_percent: 0.1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          param_description: '>3days_fine',
          param_value: 0.03,
          param_percent: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          param_description: '>3days_interest',
          param_value: 0.002,
          param_percent: 0.2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          param_description: '>5days_fine',
          param_value: 0.05,
          param_percent: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          param_description: '>5days_interest',
          param_value: 0.003,
          param_percent: 0.3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: QueryInterface => {
    return QueryInterface.bulkDelete('calculations', null, {});
  },
};
