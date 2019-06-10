const { Get, Controller } = require('@coofy/koafy').router

@Controller('/demo')
class DemoController {
	@Get('/')
  async demo(ctx, _next) {
    const title = 'demo'
    await ctx.render('demo/index', {
      title
    })
  }
}

module.exports = DemoController
