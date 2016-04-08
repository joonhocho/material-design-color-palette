import tinycolor from 'tinycolor2';
import palette from 'google-material-color';

const mapToNewName = (obj, fn) => {
  const dest = {};
  Object.getOwnPropertyNames(obj).map((name) => {
    dest[name.replace(/\s+/g, '')] = fn(obj[name], name, obj);
  });
  return dest;
}

export default mapToNewName(palette.palette, (shades, colorName) => {
  return mapToNewName(shades, (hex, shadeName) => {
    return tinycolor(hex);
  });
});
