const CoolService = require('../service/cool-service')
const router = require('@coofy/koafy').router()
const {
  Get
} = router

@Controller('/')
class Pages {
  @Get('/demo')
  async demo (ctx, _next) {
    const title = 'demo'
    console.log('call demo')
    await ctx.render('demo/index', {
      title
    })
  }

  @Post('/login')
  async login (ctx, _next) {
    const data = await CoolService.login(ctx, ctx.request.body)
    ctx.body = data
  }
}

module.exports = new Pages()
