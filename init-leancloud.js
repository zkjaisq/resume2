!function () {
    var view = ('sectionend')

    var model = Model({ resourceName: 'savemessage' })
    var controller = {
        view: null,
        model: null,
        messageLeave: null,
        init: function () {
            this.view = view
            this.model = model
            this.model.init()
            this.loadingMessage()
            this.bindEvents()
        },
        loadingMessage: function () {
            this.model.fetch().then((messages)=>{
                let array = messages.map((item) => item.attributes)
                let newArray = array.slice(-10, array.lenght)
                console.log(newArray)
                newArray.forEach(item => {
                    let li = document.createElement('li')

                    li.innerText = `${item.name}:${item.content}`

                    messageLeave.append(li)
                });

            })
        },
        bindEvents: function () {
            formmessage.addEventListener('submit', (x) => {
                x.preventDefault()
                this.savemessage()

            })
        },
        savemessage: function () {
            let lists = document.querySelectorAll('#messageLeave > li')
            let name = document.getElementById('name').value
            let savemessage = document.getElementById('input').value
            if (name === '' || savemessage === '') {
                alert("请填写完整的信息")
            } else {
                this.model.save({ name: 'name', savemessage: 'savemessage' }).then(function (object) {

                    let li = document.createElement('li')
                    li.innerText = name + ':' + savemessage
                    messageLeave.append(li)

                    document.getElementById('input').value = null;
                    document.getElementById('name').value = null;
                })
            }
            if (lists.length >= 10) {
                lists[length].remove()
            }

        }

    }
    controller.init(view, model)
}.call()















//bingEvent



