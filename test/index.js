var Gaffa = require('gaffa'),
    Checkbox = require('../'),
    Text = require('gaffa-text'),
    gaffa = new Gaffa();

// Register used viewItems with gaffa
gaffa.registerConstructor(Checkbox);
gaffa.registerConstructor(Text);

var checkbox1 = new Checkbox();
checkbox1.checked.binding = '[value]';
checkbox1.actions.trigger = [set];

// create a button to test with
var text = new Text();
text.text.binding = '(join " " "Current value of [value]:" [value])';



var checkbox2 = new Checkbox();
checkbox2.checked.binding = '[value]';
checkbox2.text.value = 'Disabled checkbox';
checkbox2.enabled.value = false;

var checkbox3 = new Checkbox();
checkbox3.checked.binding = '[value]';
checkbox3.text.value = 'This label shouldnt be shown';
checkbox3.showLabel.value = false;

// An example model
gaffa.model.set({
    value:false
})

// Add the view on load.
window.onload = function(){
    gaffa.views.add([
        text,
        checkbox1,
        checkbox2,
        checkbox3
    ]);
};

// Globalise gaffa for easy debugging.
window.gaffa = gaffa;