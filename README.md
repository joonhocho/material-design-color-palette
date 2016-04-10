# material-design-color-palette
Material design color palette meets TinyColor

```
npm install --save mdcolor
```

```
import MDColor from 'mdcolor';

MDColor.Red(500).toHexString(); // '#f44336'

MDColor.Red(500, 1); // '#F44336' Raw value. Faster since it does not wrap it with TinyColor.

MDColor.DeepPurple('A700').toHexString() // '#6200ea'

MDColor.White('SecondaryText').toRgbString() // 'rgba(255, 255, 255, 0.7)'
```

See list of colors: https://github.com/danlevan/google-material-color/blob/master/src/colors.js
At official site: https://www.google.com/design/spec/style/color.html#color-color-palette

TinyColor API: https://github.com/bgrins/TinyColor/blob/master/README.md

Dependencies
------------
google-material-color: https://github.com/danlevan/google-material-color

TinyColor: https://github.com/bgrins/TinyColor
