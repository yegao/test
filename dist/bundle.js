! function (modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    }
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
    module.l = true
    return module.exports
  }

  // __webpack_require__.m = modules

  // __webpack_require__.c = installedModules

  // __webpack_require__.d = function (exports, name, getter) {
  //   if(!exports.hasOwnProperty(name)){
  //     exports[name] = getter()
  //   }
  // }

  // __webpack_require__.r = function (exports) {
  //   exports[Symbol.toStringTag] = "Module"
  //   exports.__esModule = true
  // }

  // __webpack_require__.t = function (value, mode) {
  //   if (1 & mode) {
  //     value = __webpack_require__(value)
  //   }
  //   if (8 & mode) {
  //     return value
  //   }
  //   if (4 & mode && "object" == typeof value && value && value.__esModule) {
  //     return value
  //   }
  //   var ns = Object.create(null)
  //   __webpack_require__.r(ns)
  //   ns.default = value
  //   if (2 & mode && "string" != typeof value) {
  //     for (var key in value){
  //       if(!ns.hasOwnProperty(key)){
  //         ns[key] = value[key]
  //       }
  //     }
  //   }
  //   return ns;
  // }

  // __webpack_require__.n = function (module) {
  //   var getter
  //   if (module && module.__esModule) {
  //     getter = function () {
  //       return module.default
  //     }
  //   }
  //   else {
  //     getter = function () {
  //       return module
  //     }
  //   }
  //   getter.a = getter
  //   return getter
  // }

  // __webpack_require__.o = function (object, property) {
  //   return Object.prototype.hasOwnProperty.call(object, property);
  // }

  // __webpack_require__.p = ""

  __webpack_require__.s = "./src/index.js"
  __webpack_require__(__webpack_require__.s)
}({
  "./src/a.js": function (module, exports) {
    module.exports = {
      a: "AAAAAAAAAA"
    };
  },
  "./src/index.js": function (module, exports, __webpack_require__) {
    var x = __webpack_require__("./src/a.js");
    console.log(x);
  }
});