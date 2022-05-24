import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async index(ctx: HttpContextContract){
        return[
            {
                id:1,
                title:'Hello word again'
            },
            {
                id:2,
                title:'Hello universe this moment'
            },
            {
                id:3,
                title: 'Hello, esta la cree yo para probar'
            }
        ]
    }
}
