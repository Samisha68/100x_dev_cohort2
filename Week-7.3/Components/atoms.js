import {atom, selector} from 'recoil';
export const networkAtom=atom({
    key: "network",
    default: 102
});

export const jobAtom=atom({
    key: "jobs",
    default: 0
});
export const notifciationAtom=atom({
    key: "notification",
    default: 1
});
export const messageAtom=atom({
    key: "message",
    default: 102
});

export const totalValSelector=selector({
    key: "totalVal",
    get: ({get}) => get(networkAtom)+get(jobAtom)+get(notifciationAtom)
})
