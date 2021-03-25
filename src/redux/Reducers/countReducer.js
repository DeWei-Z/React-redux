export default function countReducer(preState,action){
  const {type,data}=action
  switch (type) {
      case 'increase' || 'IfOddIncrease': 
         return preState+data
      case 'decrease' || 'AsyncDecrease':
         return preState-data
  
      default:
          return 0
  }

}