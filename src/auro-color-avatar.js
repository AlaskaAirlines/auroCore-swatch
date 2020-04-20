// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import ComponentBase from './component-base';
import styleCss from "./style-color-avatar-css.js";
import iconProperties from '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties-css.js';
import locationFilled from '@alaskaairux/orion-icons/dist/icons/interface/location-filled_es6.js';

class AuroColorAvatar extends ComponentBase {

  constructor() {
    super();
    this.dom = new DOMParser().parseFromString(locationFilled.svg, 'text/html');
    this.svg = this.dom.body.firstChild;
  }

  static get properties() {
    return {
      ...super.properties,
      avatartype:   { type: String },
      colorname:    { type: String }
    };
  }

  render() {
    return html`
      ${iconProperties}
      ${styleCss}


      <div class="avatarWrapper">
        ${this.avatartype
          ? html``
          : html`
          <div class="avatar avatar--color" style="background-color: ${this.varName(this.colorname, 'css')}"></div>
          `}

          ${this.avatartype === 'alert'
          ? html`
            <div class="avatar">
              <div class="alertBox icon" style="border-color: ${this.varName(this.colorname, 'css')}"></div>
            </div>
          `
          : html``}

          ${this.avatartype === 'ui'
          ? html`
            <div class="avatar">
              <div class="uiBox icon" style="background-color: ${this.varName(this.colorname, 'css')}"></div>
            </div>
          `
          : html``}

          ${this.avatartype === 'border'
          ? html`
            <div class="avatar">
              <div class="icon" style="background-color: ${this.varName(this.colorname, 'css')}"></div>
            </div>
          `
          : html``}

        ${this.avatartype === 'font'
          ? html`
            <div class="avatar" style="color: ${this.varName(this.colorname, 'css')}">
              Aa
            </div>
          `
          : html``}

        ${this.avatartype === 'icon'
          ? html`

          <div class="avatar" style="color: ${this.varName(this.colorname, 'css')}">
              ${this.svg}
            </div>
          `
          : html``}
      </div>
      <div class="contentWrapper">
        <p class="avatarToken">auro-${this.colorname}</p>
      </div>
    `;
  }
}

// define the name of the custom component
customElements.define("auro-color-avatar", AuroColorAvatar);
