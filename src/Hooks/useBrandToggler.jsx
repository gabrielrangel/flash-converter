import {createContext, useContext, useState} from "react";

const Context = createContext()

export function BrandToggleProvider (props) {
    const [showBrand, setShowBrand] = useState(false)

    const toggleBrand = () => {setShowBrand(!showBrand)}

    return (
        <Context.Provider value={{showBrand, toggleBrand}}>
            {props.children}
        </Context.Provider>
    )
}

export const useBrandToggle = () => useContext(Context)