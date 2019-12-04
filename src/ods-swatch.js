// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import ComponentBase from './component-base';
import componentProperties from './tokens/componentShapeProperties-css.js';
import styleCss from "./style-css.js";

class OdsSwatch extends ComponentBase {

  static get properties() {
    return {
      ...super.properties,
      backgroundcolor:   { type: String },
      colorname:         { type: String }
    };
  }

  // Adds styles for light DOM element; styles not defined in base class
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
