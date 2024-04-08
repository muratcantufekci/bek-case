import { create } from 'zustand'

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}))

export default useAuthStore;
