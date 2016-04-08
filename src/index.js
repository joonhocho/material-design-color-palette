import tinycolor from 'tinycolor2';
import palette from 'google-material-color';

const mapToNewName = (obj, fn) => {
  const dest = {};
  Object.getOwnPropertyNames(obj).map((name) => {
    dest[name.replace(/\s+/g, '')] = fn(obj[name], name, obj);
  });
  return dest;
}

const Palette = mapToNewName(
  palette.palette,
  (shades) => mapToNewName(shades, (hex) => hex),
);

export default mapToNewName(
  Palette,
  (shades) => (shadeName, raw) => (raw ? shades[shadeName] : tinycolor(shades[shadeName])),
);
