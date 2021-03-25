export default function personReducer(preState=[],action){
    const {type,data}=action
    switch (type) {
        case 'AddPerson':
            
            return [data,...preState]
    
        default:
            return preState
    }
}