class Test {
  apply(compiler) {
    // compiler.hooks.done.tab("changeStatic", compilation => {
    //   // 当前地址
    //   let context = compiler.options.context;
    //   let publicPath = path.resolve(context, "dist");

    //   compilation.toJson().assets.forEach(item => {
    //     console.log(item);
    //   });
    // });

    console.log(compiler.hooks.done);
  }
}

module.exports = Test;
