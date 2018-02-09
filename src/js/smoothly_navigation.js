function fn(){
    !function(){
        var view = View('nav.navbar')
        var controller = {
            view:null,
            aTags :null,
            init: function(){
              this.view = view
              this.initAnimation()
              this.bindEvents()
            },
            initAnimation:function(){
                function animate(time) {
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                requestAnimationFrame(animate);
            },
            scrollToElement: function(element){
                let top = element.offsetTop
                let currentTop = window.scrollY
                let targetTop = top - 100
                let s = targetTop - currentTop // 路程
                var coords = { y: currentTop}; // 起始位置
                var t = Math.abs((s/100)*300) // 时间
                if(t>500){ t = 500 }
                var tween = new TWEEN.Tween(coords) // 起始位置
                  .to({ y: targetTop}, t) // 结束位置 和 时间
                  .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
                  .onUpdate(function() {
                    // coords.y 已经变了
                    window.scrollTo(0,coords.y) // 如何更新界面
                  })
                  .start(); // 开始缓动
              },
            bindEvents:function(){
                let aTags = this.view.querySelectorAll('.navbar > ul >li >a')
                console.log(aTags)
                for (let i = 0; i < aTags.length; i++) {
                    aTags[i].onclick =  (x)=>{
                        x.preventDefault()//取消点击跳转到锚点事件
                         let a = x.currentTarget
                        let href = a.getAttribute('href')
                        let element = document.querySelector(href)
                        this.scrollToElement(element)                 
                }
            }
            },
        }
        
      
        controller.init(view)
    }.call()
    
}
export default fn