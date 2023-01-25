import create from 'zustand'
import { persist } from 'zustand/middleware'
import IGlobal from '../interface/IGlobal'
import IAuthUser from '../interface/IAuthUser'

const useStore = create<IGlobal>()(
  persist(
    (set) => ({
      user: null,
      loginUser: (user: IAuthUser) =>
        set((state) => ({
          ...state,
          user: user
        })),
      logoutUser: () =>
        set((state) => ({
          ...state,
          user: null
        }))
    }),
    {
      name: 'user-store'
    }
  )
)

export default useStore
