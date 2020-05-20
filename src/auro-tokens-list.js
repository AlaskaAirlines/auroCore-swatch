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

  // Adds styles for light DOM element; styles not defined in base class
  render() {
    return html`
      ${swatchStyleCss}

      ${this.deprecated
        ? html`
          <table class="tableListing tableListing-deprecated">
          <thead>
            <tr>
              <th>Deprecated token</th>
              <th class="">Current Token</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            ${this.componentData.map((index) => html`
              <tr class="tableRow">
                <td class="noWrap varList">
                  ${this.varName(index.token, 'deprecated')}
                </td>
                ${html`<td class="noWrap">${this.currentToken(index.reference)}</td>`}
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
