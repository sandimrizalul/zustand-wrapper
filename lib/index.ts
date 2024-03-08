import { StateStorage } from "zustand/middleware";

const useZustandWrapper = (appPersistStorage) => {
  const zustandWrapper: StateStorage = {
    setItem: (name, value) => {
      return appPersistStorage.set(name, value);
    },
    getItem: (name) => {
      const value = appPersistStorage.getString(name);
      return value ?? null;
    },
    removeItem: (name) => {
      return appPersistStorage.delete(name);
    },
  };

  return zustandWrapper;
};

export default useZustandWrapper;
