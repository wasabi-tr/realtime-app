import { EditedProfile } from '@/types'
import { Session } from '@supabase/supabase-js'
import { create } from 'zustand'

type State = {
  //グローバルで扱える型を定義
  session: Session | null
  setSession: (payload: Session | null) => void
  editedProfile: EditedProfile
  updateEditedProfile: (payload: EditedProfile) => void
  resetEditedProfile: () => void
}
const useStore = create<State>((set) => ({
  //グローバルで扱える状態を管理
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedProfile: { username: '', favorites: '', avatar_url: '' },
  updateEditedProfile: (payload) =>
    set({
      editedProfile: {
        username: payload.username,
        favorites: payload.favorites,
        avatar_url: payload.avatar_url,
      },
    }),
  resetEditedProfile: () =>
    set({ editedProfile: { username: '', favorites: '', avatar_url: '' } }),
}))

export default useStore
