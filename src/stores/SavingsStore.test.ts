import { MONTHS } from 'utils/constants';
import { formatDecimal } from 'utils/formatters';
import { RootStore } from './RootStore';
import { SavingsStore } from './SavingsStore';

describe('store/SavingStore', () => {
  const store = new SavingsStore(new RootStore());

  describe('actions', () => {
    test('setGoalMonth', () => {
      const goalMonth = 11;
      store.setGoalMonth(goalMonth);
      expect(store.goalMonth).toEqual(goalMonth);
    });

    test('setGoalYear', () => {
      const goalYear = 2021;
      store.setGoalYear(goalYear);
      expect(store.goalYear).toEqual(goalYear);
    });

    test('setGoalAmount', () => {
      const goalAmount = 10000;
      store.setGoalAmount(goalAmount);
      expect(store.goalAmount).toEqual(goalAmount);
    });
  });

  describe('computed', () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const additionalYears = 5;
    const goalYear = currentYear + additionalYears;
    const totalMonths = additionalYears * 12 + (11 - currentMonth);

    test('totalMonths', () => {
      store.setGoalYear(goalYear);

      expect(store.totalMonths).toEqual(totalMonths);
    });

    test('monthlyAmount', () => {
      const goalAmount = 10000;

      store.setGoalAmount(goalAmount);
      const expectedResult = formatDecimal(goalAmount / totalMonths);

      expect(store.monthlyAmount).toEqual(expectedResult);
    });
  });
});
