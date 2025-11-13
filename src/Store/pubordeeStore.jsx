import { create } from "zustand";
const Store = (set) => {
  return {
    fname: "Pubordee-dev",
    lname: "Srisurach",
    setName: (newvalue) => set({ fname: newvalue }),
    value: 0,
    incNum: () => set((state) => ({ value: state.value + 1 })),
    decNum: () => set((state) => ({ value: state.value - 1 })),
    arr1 : ['work1','work2'],
    addTodo : (newvalue)=> set((state)=> ({
      arr1 : [...state.arr1,newvalue]
    })),
    delTodo : (id)=> set((state)=>({
      arr1 : state.arr1.filter((item,index)=> index !== id)
    }))
  };
};
const useStore = create(Store);

export default useStore;
