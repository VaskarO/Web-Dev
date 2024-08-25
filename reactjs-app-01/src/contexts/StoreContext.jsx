import {createContext} from 'react';
import { book_list } from '../assets/assets';

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const contextValue = {
        book_list
    }

    return (
        <StoreContext.Provider value ={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider