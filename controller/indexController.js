const index = {
    render(){
        return async(ctx, next)=>{
            ctx.body = await ctx.render("index.html",{
                title:"通讯"
            })
        }
    }
}

module.exports = index