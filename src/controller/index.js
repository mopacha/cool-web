const api = require('../service/index')
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
    console.log('call appTwo')
    await ctx.render('appTwo/index', {
      title
    })
  }

  async list (ctx, _next) {
    const locals = {
      list: await api.getList(ctx)
    }
    ctx.body = locals
  }
}

module.exports = new Pages()
