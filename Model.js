window.Model = function(options){
let content = options.resourceName
    return {
      init: function(){
        var APP_ID = 'TsDnap9SEXjSvGSowP7gXXJC-gzGzoHsz'
        var APP_KEY = 'rGye31p12mM3wFpNRn9RADu9'
        AV.init({ appId: APP_ID, appKey: APP_KEY })
      },
      fetch: function(){
        var query = new AV.Query(content);
        return query.find() // Promise 对象
      },
      save: function(object){
        var X = AV.Object.extend(content);
        var x = new X();
        return x.save(object)
      }
    }
  }