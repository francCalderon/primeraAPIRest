import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index(ctx: HttpContextContract){
    return[
        {
            id:1,
            title:'Hello word again'
        }
    ]
}}
