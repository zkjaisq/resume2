function fn(){
  window.Model = function(options){
    let contetent = options.resourceName
        return {
          init: function(){
            var APP_ID = 'hacj99zP7mAOC96OgvhJx69h-gzGzoHsz';
            var APP_KEY = 'N7Gy3dV1i5APeDn27MLa0sK6';
            AV.init({ appId: APP_ID, appKey: APP_KEY })
          },
          fetch: function(){
            var query = new AV.Query(contetent);
            return query.find() 
            console.log(query.find())// Promise 对象
          },
          save: function(object){
            var X = AV.Object.extend(contetent);
            var x = new X();
            return x.save(object)
          }
        }
      }
} 
export default fn
