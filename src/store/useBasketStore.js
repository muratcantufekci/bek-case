import { create } from 'zustand'

const useBasketStore = create((set) => ({
  userPoint: 100,
  basketPoint: 0,
  increseBasketPoint: (point) => set((state) => ({ basketPoint: state.basketPoint + point })),
  decreseBasketPoint: (point) => set((state) => ({ basketPoint: state.basketPoint - point })),
  updateUserPoint: () => set((state) => ({ userPoint: state.userPoint - state.basketPoint })),
  clearBasketPoint: () => set({ basketPoint: 0})
}))

export default useBasketStore;
