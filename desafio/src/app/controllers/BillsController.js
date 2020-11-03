import FindCalculationsService from '../services/FindCalculationsService';
import Bills from '../models/Bills';

class BillsController {
  async store(request, response) {
    const bill = request.body;

    const findCalculationsService = new FindCalculationsService();
    const { data, error, status } = await findCalculationsService.execute(bill);

    if (status === 200) {
      return response.json({
        name: data.name,
        value: data.value,
        due_date: data.due_date,
        payment_date: data.payment_date,
      });
    }

    return response.json(error);
  }

  async index(request, response) {
    const bills = await Bills.findAll({
      attributes: [
        'name',
        'value',
        'value_corrected',
        'days_late',
        'payment_date',
      ],
    });

    return response.json(bills);
  }

  async show(request, response) {
    const bills = await Bills.findAll({
      attributes: [
        'name',
        'value',
        'value_corrected',
        'days_late',
        'payment_date',
        'fine',
        'interest',
      ],
    });

    return response.json(bills);
  }
}

export default new BillsController();
