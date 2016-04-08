const assert = require('assert');
const Palette = require('../lib').default;

describe('Palette', function() {
  it('should return tinycolor wrapped color.', function() {
    assert.equal('#f44336', Palette.Red[500].toHexString());
  });

  it('should remove white spaces from color names.', function() {
    assert.equal('#6200ea', Palette.DeepPurple.A700.toHexString());
  });

  it('should remove white spaces from shade names.', function() {
    assert.equal('rgba(255, 255, 255, 0.7)', Palette.White.SecondaryText.toRgbString());
  });
});
