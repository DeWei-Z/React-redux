export const createIncrease=data=>({type:'increase',data})
export const createDecrease=data=>({type:'decrease',data})
export const createAsyncDecrease=(data,time)=>{
    return (dispatch)=>{
         setTimeout(()=>{
             dispatch(createDecrease(data))
         },time)
    }
}