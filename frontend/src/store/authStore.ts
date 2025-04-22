import { create } from "zustand";

interface StoreState {
  isloggedIn: boolean;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const useAuthStore = create<StoreState>((set) => ({
  isloggedIn: false, // 초기값
  storeLogin: (token: string) => set({ isloggedIn: true }),
  storeLogout: () => set({ isloggedIn: false }),
}));
