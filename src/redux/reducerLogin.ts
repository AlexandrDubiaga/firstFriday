
interface  IInitialState{

}

let initialState={

}
const reducerLogin = (state:IInitialState = initialState,action:any):IInitialState=>{
    switch (action.type){
        default:return state;
    }
}
export default reducerLogin;