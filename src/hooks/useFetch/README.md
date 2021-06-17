# useFetch hook

It retrieves data from an api.

Example

```
type apiData<T> = {
    data : (T | null), 
    loading : boolean, 
    error : (Error | null)
}

export const useFetch = <T>(url : string) : apiData<T> 

```
