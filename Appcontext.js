import { createContext } from "react";

const AppContext=createContext({
    data: {},
    setData: () => {},
    login:{},
    setLogin:() =>{}, 
    source: {},
    setSource: () => {},
    search:{},
    setSearch:()=>{},
    favourite:{},
    setFavourite:() =>{},
    load: {},
    setLoad: () => {}
})
export default AppContext