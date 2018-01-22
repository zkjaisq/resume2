!function () {
    var view = document.querySelector('#topnavbar')
    var controller = {
        view: null,
        init: function () {
            this.view = view
            this.bindEvents()
            //this.bingEnents.call(this)
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll',()=>{
                if(window.scrollY > 0){
                    this.active()
                }else{
                    this.deactive()
                }
              
            })
        },
        active: function(){
           this.view.classList.add('sticky')
        },
        deactive: function(){
           this.view.classList.remove('sticky')
        }
    }
controller.init(view)
//controller.init.call(controller,view)
}.call()
