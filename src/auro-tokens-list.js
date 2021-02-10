// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import ComponentBase from './component-base';
import swatchStyleCss from "./style-tokens-list-css.js";

class AuroTokensList extends ComponentBase {

  static get properties() {
    return {
      ...super.properties,
      componentData:    { type: Array },
      deprecated:       { type: Boolean },
      version:          { type: String },
      unit:             { type: String },
      swatch:           { type: Boolean},
      circle:           { type: Boolean}
    };
  }

  size(arg) {
    if (arg.includes("size")) {
      return 'rem'
    }

    return '';
  }

  currentToken(reference) {
    if (reference === 'n/a') {
      return reference;
    } else if (reference) {
      return `var(--auro-${reference})`;
    }

    return ''
  }

  deprecatedType(value) {
    if (value) {
      return `auro`
    }

    return `deprecated`
  }

  // Adds styles for light DOM element; styles not defined in base class
  render() {

    const classes = {
      'swatch': this.swatch,
      'swatch--circle': this.circle
    }

    return html`
      ${swatchStyleCss}

      ${this.deprecated
        ? html`
          <table class="tableListing tableListing-deprecated">
          <thead>
            <tr>
              <th>Deprecated token</th>
              <th class="">Current Token</th>
              ${this.version
                ? html`<th>Version</th>`
                : html``
              }
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${this.componentData.map((index) => html`
              <tr class="tableRow">
                <td class="noWrap varList">
                  ${this.varName(index.token, this.deprecatedType(index.version))}
                </td>
                ${html`<td class="noWrap">${this.currentToken(index.reference)}</td>`}

                ${this.version
                  ? html`<td class="noWrap">${index.version}</td>`
                  : html``
                }
                <td class="noWrap">${index.tokenvalue}</td>
              </tr>
            `)}
          </tbody>
        </table>`

        : html`
          <table class="tableListing tableListing-standard">
          <thead>
            <tr>
              <th>Token name</th>
              <th>Value</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${this.componentData.map((index) => html`
              <tr class="tableRow">
                <td class="noWrap varList">
                  ${this.varName(index.token, 'css')}
                </td>
                <td class="noWrap">
                  ${index.tokenvalue}${this.size(index.token)}
                </td>
                <td>
                  <div
                    class="${classMap(classes)}"
                    style="background-color: ${this.varName(index.token, 'css')}">
                  </div>
                </td>
              </tr>
            `)}
          </tbody>
        </table>`
      }
    `;
  }
}

// define the name of the custom component
customElements.define("auro-tokens-list", AuroTokensList);
