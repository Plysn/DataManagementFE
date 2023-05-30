import instance from "../../services/baseApi";

export const createListPhone = (set, get) => ({
  phones: [],
  fetchListPhone: async () => {
    try {
      const todoList = await instance.get("/phones", {});
      set((state) => ({ phones: todoList.data }));
    } catch (error) {
      console.log(error);
    }
  },
  setListPhone: (phones) => set((state) => ({ phones })),
});
