import { action, computed, makeObservable, observable } from 'mobx';
import { MONTHS_IN_YEAR } from 'utils/constants';
import { formatDecimal } from 'utils/formatters';
import { RootStore } from './RootStore';

export class SavingsStore {
  protected rootStore;

  private date = new Date();
  public goalMonth: number = this.date.getMonth();
  public goalYear: number = this.date.getFullYear();
  public goalAmount = 0;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      goalMonth: observable,
      goalYear: observable,
      goalAmount: observable,
      monthlyAmount: computed,
      totalMonths: computed,
      setGoalAmount: action,
      setGoalMonth: action,
      setGoalYear: action,
    });

    this.rootStore = rootStore;
  }

  public get totalMonths(): number {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const additionalYears = this.goalYear - currentYear;

    const totalMonths =
      additionalYears * MONTHS_IN_YEAR + (this.goalMonth - currentMonth) + 1;

    return totalMonths;
  }

  public get monthlyAmount(): number {
    if (!this.goalAmount || !this.totalMonths) return 0;

    const monthlyAmount = formatDecimal(
      this.goalAmount / (this.totalMonths || 1)
    );

    return Number(monthlyAmount);
  }

  public setGoalMonth(month: number): void {
    this.goalMonth = month;
  }

  public setGoalYear(year: number): void {
    this.goalYear = year;
  }

  public setGoalAmount(value: number): void {
    this.goalAmount = value;
  }
}
