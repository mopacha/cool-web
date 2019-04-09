const CoolService = require('../service/cool-service')

class Pages {
  async demo (ctx, _next) {
    const title = 'demo'
    console.log('call demo')
    await ctx.render('demo/index', {
      title
    })
  }

  async login (ctx, _next) {
    const data = await CoolService.login(ctx, ctx.request.body)
    ctx.body = data
  }
}

module.exports = new Pages()
