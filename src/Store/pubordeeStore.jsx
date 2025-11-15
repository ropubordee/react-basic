import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
const Store = (set) => {
  return {
    fname: "Pubordee-dev",
    lname: "Srisurach",
    setName: (newvalue) => set({ fname: newvalue }),
    value: 0,
    incNum: () => set((state) => ({ value: state.value + 1 })),
    decNum: () => set((state) => ({ value: state.value - 1 })),
    arr1: ["work1", "work2"],
    addTodo: (newvalue) =>
      set((state) => ({
        arr1: [...state.arr1, newvalue],
      })),
    delTodo: (id) =>
      set((state) => ({
        arr1: state.arr1.filter((item, index) => index !== id),
      })),
    arr2: [
      { id: 1, title: "work1" },
      { id: 2, title: "work2" },
    ],
    addObj: (newvalue) =>
      set((state) => ({
        arr2: [
          ...state.arr2,
          {
            id: Date.now(),
            title: newvalue,
          },
        ],
      })),
    delObj: (id) =>
      set((state) => ({
        arr2: state.arr2.filter((item, index) => item.id !== id),
      })),

    //TODO
    data: [],
    isLoading: false,
    error: false,
    errorMessage: "",
    getData: async () => {
      try {
        set({ isLoading: true, error: false });
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        set({ isLoading: false, data: res.data });
      } catch (err) {
        set({ error: true, errorMessage: err.message, isLoading: false });
      }
    },
  };
};
const usePersist = {
  name : 'pubordee-dev',
  getStorage : ()=> localStorage,
  partialize : (state)=>{
    value : state.value
  }
}

const useStore = create(persist(Store,usePersist));

export default useStore;
