import { create } from "zustand";

type ActionsProps = {
  setBagStoreState: (state: keyof StoreProps["state"], value: any) => void;
};

export type Dish = {
  id: number;
  img: string;
  dish: string;
  stars: number;
  description: string;
  region: string;
  price: number;
};

type Bag = {
  amount: number;
  id: number;
  price: number;
  dish: string;
  img: string;
};

type StoreProps = {
  state: {
    bag: Bag[];
  };
  actions: ActionsProps;
};

export const useBagStore = create<StoreProps>((set) => ({
  state: {
    bag: [],
  },
  actions: {
    setBagStoreState: (currentState, value) =>
      set((state) => ({
        state: { ...state.state, [currentState]: value },
      })),
  },
}));
