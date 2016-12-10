const STORAGE_KEY = 'cvMd'
const localStoragePlugin = store => {
  store.subscribe((mutation, { notes }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  })
}

export default [localStoragePlugin]
