import { useStorage } from './storageManagement'

export function useSessionStorage<T>(key: string, defaultValue: T) {
  return useStorage(key, defaultValue, window.sessionStorage);
}
