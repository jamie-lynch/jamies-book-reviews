export const loadValue = (name) => {
    return localStorage.getItem(name)
}

export const persistValue = (name, value) => {
    return localStorage.setItem(name, value)
}
