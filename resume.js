setTimeout(function () {
    loadingpage.classList.remove('active')
}, 1000)
window.onscroll = function () {
    window.scrollY > 0 ? topnavbar.classList.add('sticky') : topnavbar.classList.remove('sticky')
}
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
let aTags = document.querySelectorAll('nav.navbar > ul >li >a')

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()//取消点击跳转到锚点事件
        // let a = x.currentTarget
        //let href = a.getAttribute('href')
        //let element = document.querySelector(href)
        //let top = element.offsetTop
        let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop
        
        /*let n = 25 //一共动25 次
        let duration = 500 / n //多长时间动一次
        let currentTop = window.scrollY
        let targetTop = top - 70
        let distance = (targetTop - currentTop)/ n//每次要动的距离
        let i = 0
        let id = setInterval(()=>{
            if(i === n){
                clearInterval(id)
                return
            }// 当动了25次以后就停止了
            i = i+ 1
            window.scrollTo(0,currentTop + distance * i)
        },duration)*/
       //以上就是页面滑动的动画，只不过是动的速度一样，时间是确定的，但是不同的距离速度不同。
       

    }
}