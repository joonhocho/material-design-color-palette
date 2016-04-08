# material-design-color-palette
Material design color palette meets TinyColor

```
npm install --save mdc-palette
```

```
import Palette from 'mdc-palette';

Palette.Red[500].toHexString(); // '#f44336'

Palette.DeepPurple.A700.toHexString() // '#6200ea'

Palette.White.SecondaryText.toRgbString() // 'rgba(255, 255, 255, 0.7)'
```

See list of colors: https://github.com/danlevan/google-material-color/blob/master/src/colors.js

Color APIs: https://github.com/bgrins/TinyColor/blob/master/README.md

Dependencies
------------
google-material-color: https://github.com/danlevan/google-material-color

TinyColor: https://github.com/bgrins/TinyColor
