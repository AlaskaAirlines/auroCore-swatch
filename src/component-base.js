// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit-element";
import 'focus-visible/dist/focus-visible.min.js';

// build the component class
export default class ComponentBase extends LitElement {

  varName(name, type) {

    function camelCase(str) {
      str = str.replace(/-/g, " ")

      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
      {
        return index == 0 ? word.toUpperCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }

    let dash = '-'

    if (type === 'token') {
      dash = '.'
    }

    if (type === 'css') {
      return `var(--auro-${name})`
    }

    else if (type === 'droid') {
      return `auro_${name.replace(/-/g, "_")}`
    }

    else if (type === 'ios') {
      return `Auro${camelCase(name)}`
    }

    else if (type === 'sass') {
      return `$auro-${name}`
    }

    else {
      return `{${name.replace(/-/g, ".")}.value}`
    }
  }

  a11yColor(bgColor) {
    const lightColor = `var(--color-base-orca)`;
    const darkColor = `var(--color-base-white)`;
    const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB

    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ? lightColor : darkColor;
  }
}
