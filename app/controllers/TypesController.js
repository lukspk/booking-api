module.exports = {
    async index(request,response)
    {
        const types = 'Pegar Itens Banco'
    },
    async store(request, response)
    {
        const {name, description} = request.body;

        return response.json({name});
    }
}