var APP_ID = 'hacj99zP7mAOC96OgvhJx69h-gzGzoHsz';
var APP_KEY = 'N7Gy3dV1i5APeDn27MLa0sK6';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


    var query = new AV.Query('message');
    query.find().then(function (messages) {
 
        let array = messages.map((item) => item.attributes)
        let newArray = array.slice(-10,array.lenght)
        console.log(newArray)
        newArray.forEach(item => {
            let li = document.createElement('li')
      
            li.innerText = `${item.name}:${item.content}`
      
            messageLeave.append(li)
        });

    })




//bingEvent
formmessage.addEventListener('submit', function (x) {
    x.preventDefault()
    let xxx = AV.Object.extend('message');
    let message = new xxx();
    let who = document.getElementById('name').value
    let savemessage = document.getElementById('input').value
    if(who === '' || savemessage === ''){
        alert('请填写完整的信息')
    }else{
        message.save({
            'name': who,
            'content': savemessage,
    
        }).then(function (object) {
            let lists = document.querySelectorAll('#messageLeave > li')
            let name = document.getElementById('name').value 
            let input = document.getElementById('input').value 
            let li = document.createElement('li')
             li.innerText = name  + ':' + input
             messageLeave.append(li)
             document.getElementById('input').value  = null;
             document.getElementById('name').value = null;
         if(lists.length >= 10){
            lists[length].remove()
         }
               
        })
    }
   
})


