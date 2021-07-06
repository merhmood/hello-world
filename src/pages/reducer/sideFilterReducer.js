export const sideFilterReducer = (state , action) => {
    console.log(action.type)
    if(action.type === "CHANGE-RATING"){
        if(action.rating === 4){
            const data = action.data.filter(product => product.rating >= action.rating)
            return {...state , rating : data}
        }
        else if(action.rating === 3){
            const data = action.data.filter(product => product.rating >= action.rating)
            return {...state , rating : data}
        }
        else if(action.rating === 2){
            const data = action.data.filter(product => product.rating >= action.rating)
            return {...state , rating : data}
        }
        else if(action.rating === 1){
            const data = action.data.filter(product => product.rating >= action.rating)
            return {...state , rating : data}
        }
        else{
            return action.data
        }
    }
    if(action.type === 'PRICING'){
        if(action.pricing.min === ""){
            const data = action.data.filter(product => product.price <= action.pricing.max)
            if (data.length > 0) {
                 return {...state , pricing: {bool: false, data: data}}
            }
            else{
                return {...state , pricing: {bool: true, data: data}}
            }
        }
        else if(action.pricing.max ===  ""){
            const data = action.data.filter(product => product.price >= action.pricing.min)
            if (data.length > 0) {
                 return {...state , pricing: {bool: false, data: data}}
            }
            else{
                return {...state , pricing: {bool: true, data: data}}
            }
        }
        else if(action.pricing.max !==  "" && action.pricing.min !== ""){
            const data = action.data.filter(product => product.price <= action.pricing.max && product.price >= action.pricing.min )
            if (data.length > 0) {
                 return {...state , pricing: {bool: false, data: data}}
            }
            else{
                return {...state , pricing: {bool: true, data: data}}
            }
        }
        else{
            return {...state}
        }

    }
    if(action.type === 'SORTING'){
        if(action.sorting === "LOW-TO-HIGH"){
            return {...state, sorting:"low to high"}
        }
        else if(action.sorting === "HIGH-TO-LOW"){
            return {...state, sorting:"high to low"}
        }
        else{
            return {...state}
        }
    }
    if(action.type === 'RESET'){
        return {...state, rating: [], pricing: {bool: false, data: []}, sorting: '', reset: true}
    }
    if(action.type === "SHOW-MODAL"){
        return{...state, productView: {showModal: true, id: action.id}}
    }
    if(action.type === 'CLOSE-MODAL'){
         return{...state, productView: {showModal: false, id: null}}
    }
}