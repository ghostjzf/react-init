var loaderUtils = require("loader-utils");

module.exports = function(source) {
  // console.log("start process code...");

  // var options = loaderUtils.getOptions(this) || {};
  // if (options !== {}) {
  //   var replaceMap = options["replaceMap"];
  //   for (var key in replaceMap) {
  //     console.log(source);
  //     source = source.replace(key, replaceMap[key]);
  //     console.log(source);
  //   }
  // }

  return source.replace("Hello", "你好");
};
