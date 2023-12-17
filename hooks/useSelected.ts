import { create } from "zustand";

interface MyStoreState {
  selectedItems: string;
  setSelectedItems: (newselectedItems: string) => void;
}
const useSelected = create<MyStoreState>((set) => ({
  selectedItems: "",
  setSelectedItems: (newselectedItems) =>
    set({ selectedItems: newselectedItems }),
}));

export default useSelected;
