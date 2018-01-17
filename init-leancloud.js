var APP_ID = 'hacj99zP7mAOC96OgvhJx69h-gzGzoHsz';
var APP_KEY = 'N7Gy3dV1i5APeDn27MLa0sK6';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});






//bingEvent
formmessage.addEventListener('submit', function (x) {
    x.preventDefault()

    let xxx = AV.Object.extend('message');
    let message = new xxx();
    let who = document.getElementById('name').value
    let savemessage = document.getElementById('input').value
    message.save({
        'name': who,
        'content': savemessage,

    }).then(function (object) {
        var query = new AV.Query('message');
        query.find().then(function (messages) {
            console.log(messages)
            let array = messages.map((item) => item.attributes)
            console.log(array)
            array.forEach(item => {
                let li = document.createElement('li')
                console.log(1)
                li.innerText = `${item.name}:${item.content}`
                console.log(2)
                messageLeave.append(li)
             document.getElementById('name').value = null
             document.getElementById('input').value = null
            });
 
        })
    })
})


var query = new AV.Query('message');
query.find().then(function (messages) {
    console.log(messages)
    let array = messages.map((item) => item.attributes)
    console.log(array)
    array.forEach(item => {
        let li = document.createElement('li')
        console.log(1)
        li.innerText = `${item.name}:${item.content}`
        console.log(2)
        messageLeave.append(li)
        console.log(3)
    });

})