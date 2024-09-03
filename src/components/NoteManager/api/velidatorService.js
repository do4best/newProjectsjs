export class ValidatryService{
    static min(inputValue,min){
        if(inputValue.length < min){
            return `Please Enter more then ${min} Characters`
        }
    }
    static max(inputValue,max){
        if(inputValue.length > max){
            return `Please Enter Less then ${max} Characters`
        }
    }
}