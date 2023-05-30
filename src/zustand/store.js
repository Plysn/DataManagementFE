import { create } from "zustand";
import { createListPhone } from "./slices/list";
import { devtools } from "zustand/middleware";

const useListStore = create(
  devtools((...rest) => ({
    ...createListPhone(...rest),
  }))
);

export default useListStore;
