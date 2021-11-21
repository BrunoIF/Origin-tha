import { SavingsStore } from './SavingsStore';

export class RootStore {
  public savingsStore = new SavingsStore(this);
}
