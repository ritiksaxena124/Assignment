import { atom } from "recoil"

const authAtom = atom({
    key: 'loggedIn',
    default: false
})

export default authAtom;