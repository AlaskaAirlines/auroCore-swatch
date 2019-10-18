<img src="https://resource.alaskaair.net/-/media/2C1969F8FB244C919205CD48429C13AC" alt="Orion Design System Logo" title="Be the change you want to see" width="125" align="right" />

[![Build Status](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-swatch.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/OrionStatelessComponents__ods-swatch)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-swatch.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-swatch.svg?color=blue)

# \<ods-swatch>

\<ods-swatch> is a UI component for the display of color information containing styling and behavior.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding ODS Stateless Components can be found in the [./docs](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/tree/master/docs) repository.

## Install

```shell
$ npm i @alaskaairux/ods-swatch
```

### Design Token CSS Custom Property dependency

The use of any ODS Component has a dependency on the [ODS Design Tokens (npm install)](https://www.npmjs.com/package/@alaskaairux/orion-design-tokens). See repository and API information [here](https://github.com/AlaskaAirlines/OrionDesignTokens).

For additional details in regards to using Orion Design Tokens with components, please see [./docs/TECH_DETAILS.md](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/blob/master/docs/TECH_DETAILS.md)

### CSS Custom Property fallbacks

CSS Custom Properties are not supported in older browsers. For this, fallback properties are pre-generated and included with the npm. Any update to the Orion Design Tokens will be immediately reflected with browsers that support CSS Custom Properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Define the component dependency within each component that is using the \<ods-swatch> component.

```javascript
import "@alaskaairux/ods-swatch";
```

**Reference component in HTML**

```html
<ods-swatch backgroundcolor="01426a" colorname="ColorBrandBlueMidnightBase"></ods-swatch>
```

## Element \<ods-swatch>

```javascript
class Odsswatch extends LitElement
```

### \<ods-swatch> use cases

The \<ods-swatch> element should be used in situations where users may:

* Need to illustrate a Design Token color and its related data

### Properties:

| Attribute | Value type | Description |
|----|----|----|
| backgroundcolor | string | pass in hex color value to be illustrated in the color swatch |
| colorname | string | derived color name based on JSON structure from design tokens |

### API Code Examples

Default swatch

```html
<ods-swatch backgroundcolor="01426a" colorname="ColorBrandBlueMidnightBase"></ods-swatch>
```

## Alternate build solutions

Included with the distributed npm are two additional directories, `./altImportsCanonical` and `./altImportsVariable`.

| directory | description |
|---|---|
| altImportsCanonical† | Sass using canonical values within the scope of the file |
| altImportsVariable* | Sass using CSS Custom Properties within the scope of the file |

† Using canonical CSS properties breaks inheritance chain from Orion Design Tokens

\* Orion Design Tokens are required to import any file using CSS Custom Properties. Also see Orion Design Tokens [pre-processed resources](https://github.com/AlaskaAirlines/OrionDesignTokens#install-pre-processed-resources). PostCSS using `postcss-custom-properties` will need to be added to your project if you are supporting legacy browsers.

Within the respective directories is the `style_clean.scss` file.

```bash
├── altImports
|  ├── canonical
|  |  ├── style.css
|  |  └── style_clean.scss
|  └── variable
|     ├── style.css
|     └── style_clean.scss
```

It is highly recommended that you import the `style_clean.scss` this into a name-space as not to create style collisions. For example:

```scss
.ods-swatch {
  @import "./node_modules/@alaskaairux/ods-swatch/altImports/variable/style_clean.scss";
}
```

This pattern will produce all the selectors within `style_clean.scss` with the prefixed selector.

```scss
.ods-swatch .swatch {
  display: var(--ods-swatch-display);
  font-family: var(--ods-swatch-font-family);
  border-width: var(--ods-swatch-border-width);
  border-radius: var(--ods-swatch-border-radius);
  ...
}
```

**Warning!** Using the canonical CSS will break the chain of using Design Tokens. If Tokens are updated, this will require the update of the components and their canonical output. Use with caution.

##

Alaska Airlines Orion Design System<br>
Copyright 2019 Alaska Airlines, Inc. or its affiliates. All Rights Reserved.
