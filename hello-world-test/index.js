module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name) + ", From Azure Functions"
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Ops! Algo deu errado: Não se esqueça de enviar seu nome!"
        };
    }
    context.done();
};