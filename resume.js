setTimeout(function () {
    loadingpage.classList.remove('active')
}, 1000)
window.onscroll = function () {
    window.scrollY > 0 ? topnavbar.classList.add('sticky') : topnavbar.classList.remove('sticky')
    let speciousTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i = 1;i < speciousTags.length; i++){
      if(Math.abs(speciousTags[i].offsetTop - window.scrollY) < Math.abs(speciousTags[minIndex].offsetTop - window.scrollY)){
        minIndex = i
        }
    }
    console.log(minIndex)
    let id = speciousTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id + '"]')
    console.log(a)
    let li = a.parentNode
    let brotherAndme = li.parentNode.children
    for(let i = 0; i <brotherAndme.length; i++){
        brotherAndme[i].classList.remove('lightheigh')
    }
    li.classList.add('lightheigh')
}//当滑动到相对应的位置的时候a标签下面的高亮，而且不出现子菜单。
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
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
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
        let currentTop = window.scrollY
        let targetTop = top - 70
        let s = currentTop - targetTop
        var coords = { y: currentTop, };
        var t = Math.abs((s / 100) * 300)
        if (t > 600) { t = 600 }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, 800)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}