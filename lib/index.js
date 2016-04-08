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

exports.default = mapToNewName(_googleMaterialColor2.default.palette, function (shades, colorName) {
  return mapToNewName(shades, function (hex, shadeName) {
    return (0, _tinycolor2.default)(hex);
  });
});