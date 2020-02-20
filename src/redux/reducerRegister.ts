
interface  IInitialState{

}

let initialState={

}
const reducerRegister = (state:IInitialState = initialState,action:any):IInitialState=>{
    switch (action.type){
        default:return state;
    }
}
export default reducerRegister;