import { useCallback, useEffect, useState } from 'react'
// This manages the sotrage object it is not used
export function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: Storage
): [T | undefined, (v: T) => void, () => void] {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue !== null) return JSON.parse(jsonValue) as T;
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const removeValue = useCallback(() => {
    setValue(undefined);
    storageObject.removeItem(key);
  }, []);

  return [value, setValue, removeValue];
}
