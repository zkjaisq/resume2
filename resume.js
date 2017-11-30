setTimeout(function () {
    loadingpage.classList.remove('active')
}, 1000)
window.onscroll = function () {
    window.scrollY > 0 ? topnavbar.classList.add('sticky') : topnavbar.classList.remove('sticky')
}
let liTags = document.getElementsByClassName('menuTigger')
console.log(liTags)
//遍历数组来进行操作如果aTags是一个数组
for (let i=0 ; i < liTags.length ; i++ ){
    liTags[i].onmouseenter = function(x){
        let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0]
        brother.classList.add('active')
        console.log(brother)
    }
    liTags[i].onmouseleave = function(x){
        let li = x.currentTarget
        let brother = li.getElementsByTagName('ul')[0]
        brother.classList.remove('active')
    }

}