export const required = value => (value ? undefined : 'Requireddd');

export const maxLenghtCreator = max => value => 
        (value && value.length<max ? undefined : `lenght should be less than ${max}`)

export const minLenghtCreator = min => value => 
        (value && value.length>min ? undefined : `lenght should be more than ${min}`)
 
export const checkSymbol = symbol => value => 
        (value && symbol ? requiredSymbol(symbol)(value) : `Required your email`)


export const requiredSymbol = symbol => {
    return (value) => {
            let arr = value.split('');
            let isRequiredSymbol = arr.some(el => el === symbol)
            return (isRequiredSymbol ? undefined : `This field must have symbol ${symbol}`)
        
        }
}
