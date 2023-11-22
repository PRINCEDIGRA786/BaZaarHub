// var initilastate={
//     cart:[]
// }
const reducee=(state=[],action)=>{
    console.log("Ethe 1 te ")
    if(action.type=='addToWatchList'){
        let{id,title,price,rate,thumbnail}=action.payload;
        let cartproduct={
            id:id,
            title:title,
            price:price,
            rate:rate,
            thumbnail:thumbnail,
            quantity:1,
        }
        let ar=state.filter((element)=>{
            return element.id==id;
        }
        )
        if(ar.length==0){
            return [...state,cartproduct]
        }
        else{
            alert("Already this product is in the cart");
                let ans=window.confirm("Would you like to increase the quantity?")
                if(ans){
                    ar[0].quantity=ar[0].quantity+1;
                }
                return state;
        }

        // return state.push(action.payload)
        }
        else if(action.type=='increment'){
            let id=action.id
            state.forEach(element => {
                if(element.id==id){
                    element.quantity=element.quantity+1;
                }
                
            });
           
        }
        else if(action.type=='decrement'){
            let id=action.id
            state.forEach(element => {
                if(element.id==id){
                    if(element.quantity<=1){
                        alert("Enter valid number ...0..is not a valid number..")
                        let ans=window.confirm("Do you wana cancel this product")
                        if(ans){
                            state.pop(element)
                        }
                    }
                    else{element.quantity--;}
                }
                
            });
        }
        else if(action.type=='remove'){
            let id=action.id;
            state.forEach(element => {
                if(element.id==id){
                    state.pop(element)
                }
            });
        }
        console.log("Etho di state",state)
            return state
    }
    
export default reducee;