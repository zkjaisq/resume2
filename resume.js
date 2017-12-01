setTimeout(function () {
    loadingpage.classList.remove('active')
}, 1000)
window.onscroll = function () {
    window.scrollY > 0 ? topnavbar.classList.add('sticky') : topnavbar.classList.remove('sticky')
}
let liTags = document.querySelectorAll('nav.navbar >ul > li')
console.log(liTags)
//遍历数组来进行操作如果aTags是一个数组
for (let i=0 ; i < liTags.length ; i++ ){
    liTags[i].onmouseenter = function(x){
        let li = x.currentTarget
        console.log(li)
        li.classList.add('active')
        
    }
    liTags[i].onmouseleave = function(x){
        let li = x.currentTarget
        console.log(li)
        li.classList.remove('active')
    }

}
let aTags = document.querySelectorAll('nav.navbar > ul >li >a')
console.log(aTags)
for (let i=0 ; i < aTags.length ; i++){
    aTags[i].onclick = function(x){
     
      //  x.preventDefault()
        let a = x.currentTarget
        
       let href = a.getAttribute('href')
       let element = document.querySelectorAll(href)
       let top = element.offsetTop
       console.log(top)
    }
}