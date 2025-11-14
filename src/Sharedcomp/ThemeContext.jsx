import { createContext, useContext, useReducer } from "react";

const initialState = {theme: 'light'};

function themeReducer(state, action){
    switch(action.type){
        case 'TOGGLE_THEME':
            return{
                ...state,
                theme: state.theme === 'light'?'dark':'light',
            }
        default:
            return state;
    }
}

// context
const ThemeContext = createContext();

// provider
export function ThemeProvider({ children }){
    const [state, dispatch] = useReducer(themeReducer, initialState)

    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}


// custom hook for easy access
export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error ('useTheme must be used with a ThemeProvider')   
     }
     return context;
}