'use strict';

var Gaffa = require('gaffa'),
    crel = require('crel');

function Checkbox(){}
Checkbox = Gaffa.createSpec(Checkbox, Gaffa.ContainerView);
Checkbox.prototype.type = 'checkbox';

Checkbox.prototype.render = function(){
    var view = this,
        label,
        checkbox,
        content,
        renderedElement = crel('span',
            checkbox = crel('input', {'type': 'checkbox'}),
            label = crel('label'),
            content = crel('span')
        );

    this.checkboxInput = checkbox;
    this.checkboxLabel = label;

    checkbox.addEventListener(this.updateEventName || 'change', function(event){
        view.checked.set(this.checked);
    });
    label.addEventListener('click', function(){
        checkbox.click();
    });

    this.views.content.element = content;

    this.renderedElement = renderedElement;

};

Checkbox.prototype.checked = new Gaffa.Property(function(view, value) {
    view.checkboxInput.checked = value;
});

Checkbox.prototype.text = new Gaffa.Property(function(view, value){
    view.checkboxLabel.textContent = (value && typeof value === 'string') ? value : null;
});

Checkbox.prototype.showLabel = new Gaffa.Property(function(view, value){
    view.checkboxLabel.style.display = value === false ? 'none' : null;
});

Checkbox.prototype.enabled = new Gaffa.Property({
    update: function(view, value){
        view.checkboxInput[value ? 'removeAttribute' : 'setAttribute']('disabled','disabled');
    },
    value: true
});

module.exports = Checkbox;