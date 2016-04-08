const assert = require('assert');
const MDColor = require('../lib').default;

describe('MDColor', function() {
  it('should return tinycolor wrapped color.', function() {
    assert.equal('#f44336', MDColor.Red[500].toHexString());
  });

  it('should remove white spaces from color names.', function() {
    assert.equal('#6200ea', MDColor.DeepPurple.A700.toHexString());
  });

  it('should remove white spaces from shade names.', function() {
    assert.equal('rgba(255, 255, 255, 0.7)', MDColor.White.SecondaryText.toRgbString());
  });
});
