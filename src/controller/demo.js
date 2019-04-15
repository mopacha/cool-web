const CoolService = require('../service/demo-service')

const { Get, Post, Controller } = require('@coofy/koafy').router

@Controller('/')
class Pages {
	@Get('/')
  async home (ctx, _next) {
    const title = 'demo'
    console.log('call demo')
    await ctx.render('demo/index', {
      title
    })
  }

	@Get('/demo')
	async demo (ctx, _next) {
	  const title = 'demo'
	  console.log('call demo')
	  await ctx.render('demo/index', {
	    title
	  })
	}

	@Post('/api/login')
	async login (ctx, _next) {
	  const data = await CoolService.login(ctx, ctx.request.body)
	  ctx.body = data
	}
}

module.exports = Pages
