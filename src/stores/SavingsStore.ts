import { computed, makeObservable, observable } from 'mobx';
import { RootStore } from './RootStore';

export class SavingsStore {
  protected rootStore;

  public month: number;
  public year: number;
  public totalAmount = 0;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      month: observable,
      year: observable,
      totalAmount: observable,
      monthlySaving: computed,
      totalMonths: computed,
    });

    this.rootStore = rootStore;

    const date = new Date();
    this.month = date.getMonth();
    this.year = date.getFullYear();
  }

  public get totalMonths(): number {
    return 1;
  }

  public get monthlySaving(): number {
    return 1;
  }

  public setMonth(month: number): void {
    this.month = month;
  }

  public setYear(year: number): void {
    this.year = year;
  }

  public setTotalAmount(value: number): void {
    this.totalAmount = value;
  }
}
