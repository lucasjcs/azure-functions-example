module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.')
    context.res = {
        body: "Hello World From Azure"
    }
    
    context.done()
}