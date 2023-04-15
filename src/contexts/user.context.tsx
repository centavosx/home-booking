import React, { createContext, useCallback, useState, useEffect } from 'react'

import jwt_decode from 'jwt-decode'
import Cookies from 'js-cookie'

type DataType<T extends any> = {
  user?: T
  setUser: React.Dispatch<React.SetStateAction<T | undefined>>
  refetch: () => Promise<unknown>
  logout: () => void
}

export function DataContext<T>() {
  return createContext<DataType<T>>({} as DataType<T>)
}

export function DataProvider<T extends any>({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null

  const [user, setUser] = useState<T | undefined>(
    !!token ? jwt_decode(token) : undefined
  )

  const getMe = useCallback(async () => {
    // setUser(await me())
  }, [setUser])

  useEffect(() => {
    getMe()
  }, [getMe, token])

  const logout = useCallback(() => {
    Cookies.remove('refreshToken')
    localStorage.clear()
    setUser(undefined)
  }, [setUser])

  const provider: DataType<T> = {
    user,
    setUser,
    refetch: getMe,
    logout,
  }

  const Component = DataContext<T>()

  return <Component.Provider value={provider}>{children}</Component.Provider>
}
