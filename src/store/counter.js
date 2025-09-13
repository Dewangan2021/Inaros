import { create } from "zustand";

const countStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),

  updateCount: (value) => set((state) => ({ count: state.count + value })),
}));

export default countStore;