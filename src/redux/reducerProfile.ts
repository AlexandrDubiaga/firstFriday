
interface  IInitialState{

}

let initialState={

}
const reducerProfile = (state:IInitialState = initialState,action:any):IInitialState=>{
    switch (action.type){
        default:return state;
    }
}
export default reducerProfile;