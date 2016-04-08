'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _googleMaterialColor = require('google-material-color');

var _googleMaterialColor2 = _interopRequireDefault(_googleMaterialColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapToNewName = function mapToNewName(obj, fn) {
  var dest = {};
  Object.getOwnPropertyNames(obj).map(function (name) {
    dest[name.replace(/\s+/g, '')] = fn(obj[name], name, obj);
  });
  return dest;
};

var Palette = mapToNewName(_googleMaterialColor2.default.palette, function (shades) {
  return mapToNewName(shades, function (hex) {
    return hex;
  });
});

exports.default = mapToNewName(Palette, function (shades) {
  return function (shadeName) {
    return (0, _tinycolor2.default)(shades[shadeName]);
  };
});