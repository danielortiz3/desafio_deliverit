import * as Yup from 'yup';
import differenceInBusinessDays from 'date-fns/differenceInBusinessDays';
import { isBefore } from 'date-fns';

import Bills from '../models/Bills';
import Calculations from '../models/Calculations';

export default class FindCalculationsService {
  // eslint-disable-next-line consistent-return
  async execute(bill) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      value: Yup.number().round().required(),
      due_date: Yup.date().required(),
      payment_date: Yup.date().required(),
    });

    if (!(await schema.isValid(bill))) {
      return {
        error: 'Por favor preencha todos os campos.',
        status: 404,
      };
    }

    if (isBefore(new Date(bill.payment_date), new Date(bill.due_date))) {
      return {
        error: 'Por favor, insira uma data futura para pagamento',
        status: 404,
      };
    }

    const daysLate = differenceInBusinessDays(
      new Date(bill.payment_date),
      new Date(bill.due_date)
    );

    if (daysLate === 0) {
      const billData = await Bills.create({
        name: bill.name,
        value: bill.value,
        value_corrected: bill.value,
        due_date: bill.due_date,
        payment_date: bill.payment_date,
        days_late: daysLate,
      });

      return { data: billData, status: 200 };
    }

    if (daysLate <= 3) {
      const fineCalculation = await Calculations.findOne({
        where: { param_description: '<=3days_fine' },
        attributes: ['param_value', 'param_percent'],
      });

      const interestCalculation = await Calculations.findOne({
        where: { param_description: '<=3days_interest' },
        attributes: ['param_value', 'param_percent'],
      });

      const interest =
        bill.value * (interestCalculation.param_value * daysLate);
      const fine = Number(bill.value * fineCalculation.param_value);
      const value = Number(bill.value);
      const valueCorrected = (interest + value + fine).toFixed(2);

      const billData = await Bills.create({
        name: bill.name,
        value: bill.value,
        value_corrected: valueCorrected,
        due_date: bill.due_date,
        payment_date: bill.payment_date,
        days_late: daysLate,
        fine: fineCalculation.param_percent,
        interest: interestCalculation.param_percent,
      });

      return { data: billData, status: 200 };
    }

    if (daysLate > 3 && daysLate <= 5) {
      const fineCalculation = await Calculations.findOne({
        where: { param_description: '>3days_fine' },
        attributes: ['param_value', 'param_percent'],
      });

      const interestCalculation = await Calculations.findOne({
        where: { param_description: '>3days_interest' },
        attributes: ['param_value', 'param_percent'],
      });

      const interest =
        bill.value * (interestCalculation.param_value * daysLate);
      const fine = Number(bill.value * fineCalculation.param_value);
      const value = Number(bill.value);
      const valueCorrected = (interest + value + fine).toFixed(2);

      const billData = await Bills.create({
        name: bill.name,
        value: bill.value,
        value_corrected: valueCorrected,
        due_date: bill.due_date,
        payment_date: bill.payment_date,
        days_late: daysLate,
        fine: fineCalculation.param_value,
        interest: interestCalculation.param_value,
      });

      return { data: billData, status: 200 };
    }

    if (daysLate > 5) {
      const fineCalculation = await Calculations.findOne({
        where: { param_description: '>5days_fine' },
        attributes: ['param_value', 'param_percent'],
      });

      const interestCalculation = await Calculations.findOne({
        where: { param_description: '>5days_interest' },
        attributes: ['param_value', 'param_percent'],
      });

      const interest =
        bill.value * (interestCalculation.param_value * daysLate);
      const fine = Number(bill.value * fineCalculation.param_value);
      const value = Number(bill.value);
      const valueCorrected = (interest + value + fine).toFixed(2);

      const billData = await Bills.create({
        name: bill.name,
        value: bill.value,
        value_corrected: valueCorrected,
        due_date: bill.due_date,
        payment_date: bill.payment_date,
        days_late: daysLate,
        fine: fineCalculation.param_value,
        interest: interestCalculation.param_value,
      });

      return { data: billData, status: 200 };
    }
  }
}
