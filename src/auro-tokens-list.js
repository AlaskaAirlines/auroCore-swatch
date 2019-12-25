// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import ComponentBase from './component-base';
import swatchStyleCss from "./style-tokens-list-css.js";

class AuroTokensList extends ComponentBase {

  static get properties() {
    return {
      ...super.properties,
      componentData:    { type: Array },
      deprecated:       { type: Boolean },
      unit:             { type: String }
    };
  }

  _size(arg) {
    if (arg.includes("size")) {
      return 'rem'
    }
  }

  // Adds styles for light DOM element; styles not defined in base class
  render() {
    return html`
      ${swatchStyleCss}

      ${this.deprecated ?
        html`
          <table class="tableListing tableListing-deprecated">
          <thead>
            <tr>
              <th>Deprecated token</th>
              <th class="">Current Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${this.componentData.map(i => html`
              <tr>
                <td class="noWrap varList">
                  ${this.varName(i.token, 'deprecated')}
                </td>
                ${i.reference ?
                  html`<td>var(--auro-${i.reference})</td>` :
                  html`<td></td>`
                }
                <td class="noWrap">${i.tokenvalue}</td>
              </tr>
            `)}
          </tbody>
        </table>` :

        html`
          <table class="tableListing tableListing-standard">
          <thead>
            <tr>
              <th>Token name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${this.componentData.map(i => html`
              <tr>
                <td class="noWrap varList">
                  ${this.varName(i.token, 'css')}
                </td>
                <td class="noWrap">
                  ${i.tokenvalue}${this._size(i.token)}
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
