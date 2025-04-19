import { create } from "zustand";

interface EditState {
    id: number;
    isEdit:boolean;
    isEditId: (id:number) => void;
  }
  
  // Create Zustand store
  export const useEditStore = create<EditState>((set) => ({
    id: 0,
    isEdit:false,
    isEditId: (id:number) => set((state) => ({
        id:id,
        isEdit: true,
     }))
  }));