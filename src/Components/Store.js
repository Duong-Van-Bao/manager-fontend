import {noteData} from './FirebaseConnect';
import {cartData} from './FirebaseConnect';
import {signupData} from './FirebaseConnect';

var redux = require('redux');
const  noteInitialState = {
    isEdit:false,
    isEdits:false,
    isLogin:false,
    isLogOut:false,
    getItem:'',
    getSearch:'',
    deleteDataCart:''
}
const allReducers = (state =  noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":            
            // noteData.push(action.getItem)
            signupData.push(action.getItem)
            console.log('them du lieu ' + JSON.stringify(action.getItem) + 'thanh cong');
            return state
        case "ADD_DATA_SIGNUP":            
            noteData.push(action.getItemSignup)
            console.log('them du lieu ' + JSON.stringify(action.getItemSignup) + 'thanh cong');
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "CHANGE_EDIT_STATURS":
            return {...state,isEdits:!state.isEdits}
        case "CHANGE_LOGIN_STATUS":
            return {...state,isLogin:!state.isLogin}
        case "CHANGE_LOGOUT_STATUS":
            return {...state,isLogOut:!state.isLogOut}
        case "GET_DATA":
            return {...state,getItem:action.getData}  
        case "SEARCH_INFO":
            return {...state,getSearch:action.isAddsearch}  
        case "DELETE_CART_DATA":
            cartData.child(action.deleteCart).remove();
                return {...state,deleteDataCart:action.deleteCart}    
         default:
            return state
    }
}  
var Store = redux.createStore(allReducers);
Store.subscribe(function(){ 
    console.log(JSON.stringify(Store.getState()));    
})
export default Store;


