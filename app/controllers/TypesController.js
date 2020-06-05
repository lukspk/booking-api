const {Type} = require('../models');
module.exports = {
    async index(request,response)
    {
        const types = await Type.findAll();
        return response.json(types);
    },
    async store(request, response)
    {
        // const {name, description} = request.body;
        const type = await Type.create(request.body);
        return response.json({type});
    },
    async update(request, response)
    {
        const { id } = request.params;
        
        const type = await Type.update(request.body, {
            where: {
              id: id
            }
          });

          return response.json(type);
    }
}

// Post.findAll({
//     where: {
//       authorId: 2
//     }
//   });
  // SELECT * FROM post WHERE authorId = 2