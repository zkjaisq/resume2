function fn(){
    window.View = function(selector){
        return document.querySelector(selector)
    }
}
export default fn
