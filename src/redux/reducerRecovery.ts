
interface  IInitialState{

}

let initialState={

}
const reducerRecovery = (state:IInitialState = initialState,action:any):IInitialState=>{
    switch (action.type){
        default:return state;
    }
}
export default reducerRecovery;