const initialState={
    state:[],
    users:[],
    usersSize: 1,
    pageSize: 50,
    currentPage: 1,
    showEmploy: ''

}


export const reducerMain = (state=initialState, action)=>{
    switch(action.type){

        case 'GET_STATE':{
            return {...state, state: action.state //.sort((prev,next) =>prev.id - next.id ) 
            }
        }
        case 'GET_USERS':{
            return {...state, users: action.state }
        }
        case "USERS_SIZE":{
            return {...state, usersSize: action.count}
        }
        case 'PAGE_SIZE':{
            return {...state, pageSize: action.count}
        }
        case 'SET_CURRENT_PAGE':{
            return {...state, currentPage: action.count}
        }
        case 'SORT_ID':{
            return {...state, users: action.sort}
        }
        case 'SORT_FN':{
            return {...state, users: action.sort}
        }
        case 'SORT_LN':{
            return {...state, users: action.sort}
        }
        case 'SORT_Em':{
            return {...state, users: action.sort}
        }
        case 'SORT_Ph':{
            return {...state, users: action.sort}
        }
        case 'SHOW_EMPLOY':{
            return {...state, showEmploy: [action.show]}
        }
        case 'ADD_EMPLOY':{
            return {...state, state: [ action.add, ...state.state]}
        }
        
        

        
        default:
            return state
    }
}

export const getState = (state)=>({type: 'GET_STATE', state})
export const usersSize = (count) => ({type: 'USERS_SIZE', count})
export const pageSize = (count) => ({type: 'PAGE_SIZE', count})
export const setCurrentPage = (count) => ({type: 'SET_CURRENT_PAGE', count})
export const getUsers = (state)=>({type: 'GET_USERS', state})
export const sortId = (sort) =>({type: 'SORT_ID', sort})
export const sortFN = (sort) =>({type: 'SORT_FN', sort})
export const sortLN = (sort) =>({type: 'SORT_LN', sort})
export const sortEm = (sort) =>({type: 'SORT_Em', sort})
export const sortPh = (sort) =>({type: 'SORT_Ph', sort})
export const showEmploy = (show) =>({type: 'SHOW_EMPLOY', show})
export const addEmploy = (add) =>({type: 'ADD_EMPLOY', add})

