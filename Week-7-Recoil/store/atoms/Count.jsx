import {atom} from "recoil";
import { selector } from "recoil";

export const countAtom=atom({
    key: "countAtom",
    default: 0
});

export const evenSelect=selector({
    key: "even",
    get: (props)=>{
        const count=props.get(countAtom);
        return count % 2==0;
    }
});
