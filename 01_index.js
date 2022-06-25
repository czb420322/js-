var a = {
  _default: 0,
  toString: function () {
    return ++ this._default;
  },
}

// @ts-ignore
if(a == 1 && a == 2 && a == 3) {
  console.log("数字的饮食转换");
}
