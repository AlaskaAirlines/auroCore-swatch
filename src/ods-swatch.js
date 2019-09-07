// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";

// Import touch detection lib
import 'focus-visible/dist/focus-visible.min.js';
// impot the processed CSS file into the scope of the component
import componentProperties from './tokens/componentShapeProperties-css.js';
import styleCss from "./style-css.js";

// build the component class
class OdsSwatch extends LitElement {
  // constructor() {
  //   super();

  //   /*
  //     If the component requires a touch detection,
  //     please use this function to determine if a user is
  //     activelly touching a device, versus detecting if
  //     the device is touych enables or a handheld device.

  //     Also uncomment the touch detection lib above
  //   */
  //   this.addEventListener('touchstart', function() {
  //     this.classList.add('is-touching');
  //   });
  // }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      backgroundcolor:   { type: String },
      colorname:         { type: String }
    };
  }

  varName(name, type) {
    let dash = '-'
    if (type === 'token') {
      dash = '.'
    }

    const convertedName = name.match(/[A-Z][a-z]+/g).join(`${dash}`).toLowerCase()
    if (type === 'css') {
      return `var(--${convertedName})`
    } else if (type === 'sass') {
      return `$${convertedName}`
    } else {
      return `{${convertedName}.value}`
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

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${componentProperties}
      ${styleCss}

      <div class="outerContainer">
        <div class="colorSwatch" style="background-color: ${this.backgroundcolor};">
          <div class="swatchProperties" style="color: ${this.a11yColor(this.backgroundcolor)}">
            <p>${this.varName(this.colorname, 'token')}</p>
            <p>${this.varName(this.colorname, 'css')}</p>
            <p>${this.varName(this.colorname, 'sass')}</p>
            <p>${this.backgroundcolor}</p>
          </div>
        </div>

      </div>
    `;
  }
}

// define the name of the custom component
customElements.define("ods-swatch", OdsSwatch);
