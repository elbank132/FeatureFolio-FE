import { create } from 'zustand';
import type { User } from '../types/User';
import { authService } from '../api/Auth.api';

interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),

    async checkSession () {
        try {
            const response = await authService.getCurrentUser();
            set({
                user: {
                    pictureUrl: response.pictureURL,
                    username: response.username
                }
            });
        } catch {
            set({ user: null });
        }
    }
}));