const CoolService = require('../service/cool-service')

class Pages {
  async appOne (ctx, _next) {
    const title = 'appOne'
    console.log('call appOne')
    await ctx.render('appOne/index', {
      title
    })
  }

  async appTwo (ctx, _next) {
    const title = 'appTwo'

    await ctx.render('appTwo/index', {
      title
    })
  }

  async login (ctx, _next) {
    // ctx.log.error('start request login api')

    let locals = {
      data: await CoolService.login(ctx, ctx.request.body)
    }
    ctx.body = locals
  }
}

module.exports = new Pages()
