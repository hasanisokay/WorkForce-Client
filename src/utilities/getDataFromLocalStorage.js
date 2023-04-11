
export const getLocalStorage = ()=>{
    const savedStorage = localStorage.getItem('applied-job')
    const parsed = JSON.parse(savedStorage)
    return parsed
}