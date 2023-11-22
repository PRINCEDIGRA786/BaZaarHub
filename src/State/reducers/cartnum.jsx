 const reduce=(state=1,action)=>{
        let initial=action.num
        console.log("The initial is: ",initial)
        // state=initial
        let id=action.id
        if(action.type==='increment'){
            return state + 1;
        }
        else if(action.type==='decrement'){
            return state-1;
        }
        return state
}
export default reduce;