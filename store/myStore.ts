import { atom, createStore } from "jotai"

const myStore = createStore()
export const genreAtom = atom<string>("0")

export default myStore
