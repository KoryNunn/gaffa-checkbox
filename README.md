# gaffa-checkbox

A checkbox view for use in [gaffa](https://github.com/gaffa-tape/gaffa-js)

## Install:

    npm i gaffa-checkbox

## Add to gaffa:

    var Checkbox = require('gaffa-checkbox');

    gaffa.registerConstructor(Checkbox);

# API

## Properties (instanceof Gaffa.Property)

gaffa-checkbox inherits all properties from the base Gaffa.View

### checked (get, set) Boolean

Whether or not the element is checked

### text (get) String

The elements label text

### showLabel (get) Boolean

Whether or not to render the label