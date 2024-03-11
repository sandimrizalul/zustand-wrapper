# zustand-wrapper

Just a wrapper for zustand.

## Installation

```bash
yarn add zustand-wrapper
```

## Usage

```python
import useZustandWrapper from 'zustand-wrapper';
import {create} from 'zustand';
import useZustandWrapper from 'zustand-wrapper';
import {createJSONStorage, persist} from 'zustand/middleware';

const appPersistStorage = new MMKV();

interface IMyStore {
  data: any;
  setData: (val: any) => void;
}

const useMyStore = create<IMyStore>()(
  persist(
    set => ({
      data: [],
      setData: (val: any) => set(() => ({data: val})),
    }),
    {
      name: 'my-storage',
      storage: createJSONStorage(() => useZustandWrapper(appPersistStorage)),
    },
  ),
);

export default useBoardStore;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
