function fn(){
    !function(){
        let speciousTags =document.querySelectorAll('[data-x]')
        console.log(speciousTags)
        for(let i = 0;i < speciousTags.length; i++){
            speciousTags[i].classList.add('offSet')
        }
        pdd()
        window.addEventListener('scroll',function(x){
           pdd()
        })
    
    
    /* helper */
        function pdd(){
            let speciousTags = document.querySelectorAll('[data-x]')
            let minIndex = 0
            for(let i = 1;i < speciousTags.length; i++){
              if(Math.abs(speciousTags[i].offsetTop - window.scrollY) < Math.abs(speciousTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i
                }
            }
            speciousTags[minIndex].classList.remove('offSet')
            speciousTags[minIndex].classList.add('active')
            let id = speciousTags[minIndex].id
            let a = document.querySelector('a[href="#'+ id + '"]')
            let li = a.parentNode
            let brotherAndme = li.parentNode.children
            for(let i = 0; i <brotherAndme.length; i++){
                brotherAndme[i].classList.remove('lightheigh')
            }
            li.classList.add('lightheigh')
        }
        //当滑动到相对应的位置的时候a标签下面的高亮，而且不出现子菜单。
        let liTags = document.querySelectorAll('nav.navbar >ul > li')
        console.log(liTags)
        //遍历数组来进行操作如果aTags是一个数组
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                let li = x.currentTarget
                console.log(li)
                li.classList.add('active')
            }
            liTags[i].onmouseleave = function (x) {
                let li = x.currentTarget
                li.classList.remove('active')
            }
        }
        setTimeout(function(){
            pdd()
        },500)
    }.call()
    //找到距离最近的移除offset类
    
}
export default fn