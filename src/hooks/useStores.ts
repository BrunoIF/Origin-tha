import { createContext, useContext } from 'react';
import { RootStore } from 'stores/RootStore';

const rootStore = new RootStore();
const context = createContext(rootStore);

function useStores(): RootStore {
  return useContext(context);
}

export default useStores;
