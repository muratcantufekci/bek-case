import { create } from 'zustand'

const useLoaderStore = create((set) => ({
  isOpen: false,
  openLoader: () => set({ isOpen: true }),
  closeLoader: () => set({ isOpen: false}),
}))

export default useLoaderStore;
