// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit-element";
import 'focus-visible/dist/focus-visible.min.js';

// build the component class
export default class ComponentBase extends LitElement {

  varName(name, type) {

    const camelCase = (str) => {
      const cleanStr = str.replace(/-/gu, " ");

      return cleanStr.replace(/(?:^\w|[A-Z]|\b\w)/gu, (word) => word.toUpperCase()).replace(/\s+/gu, '');
    }

    switch (type) {
      case 'deprecated':
        return `var(--${name})`;
      case 'css':
        return `var(--${name})`
      case 'droid':
        return `${name.replace(/-/gu, "_")}`
      case 'ios':
        return `${camelCase(name)}`
      case 'sass':
        return `$${name}`
      case 'standard':
        return `--${name}`
      default:
        return `{${name.replace(/-/gu, ".")}.value}`
    }
  }

  a11yColor(bgColor) {
    const
      blueBeginIndex = 4,
      blueMultiplier = 0.114,
      darkColor = `var(--auro-color-text-primary-on-dark)`,
      darknessThreshold = 186,
      getColorCode = (color) => {
        const
          colorBeginIndex = 1,
          colorEndIndex = 7,
          hashLocation = 0;

        return color.charAt(hashLocation) === '#' ? color.substring(colorBeginIndex, colorEndIndex) : color;
      },
      greenBeginIndex = 2,
      greenMultiplier = 0.587,
      hexToColor = (color, beginIndex, multiplier) => {
        const
          colorCode = getColorCode(color),
          endIndex = 2,
          hexValue = 16;

        return parseInt(colorCode.substring(beginIndex, beginIndex + endIndex), hexValue) * multiplier;
      },
      lightColor = `var(--auro-color-text-primary-on-light)`,
      redBeginIndex = 0,
      redMultiplier = 0.299;

    return hexToColor(bgColor, redBeginIndex, redMultiplier) +
        hexToColor(bgColor, greenBeginIndex, greenMultiplier) +
        hexToColor(bgColor, blueBeginIndex, blueMultiplier) > darknessThreshold
     ? lightColor : darkColor;
  }
}
