import { useStorage } from './storageManagement'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useStorage(key, defaultValue, window.localStorage);
}
