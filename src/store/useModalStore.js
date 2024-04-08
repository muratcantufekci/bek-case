import { create } from 'zustand'

const useModalStore = create((set) => ({
  type: 'MODAL_NONE',
  props: {},
  closeModal: () => set({ type: 'MODAL_NONE', props: {} }),
  openModal: (type, props) => set({ type, props }),
}));

export default useModalStore;