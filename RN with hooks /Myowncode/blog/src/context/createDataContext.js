import React, { useReducer } from 'react';



// context 
//     provider 
//        specify Value 
//         ....
//             consumer
//                  consume value
// +

// reducer + initialState => state, dispatch
// dispatch
//     action, call reducer
// 

// context 
//     provider 
//         define the reduser
//        specify Value  - state, dispatch
//         ....
//             consumer
//                  consume value
// +
export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost: (dispatch) => { return () => {} } }
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};
