// A2Z F16
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F16

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

var grammar;

// Here is the grammar
var data = {
  "start": ["#[hero:#character#][thing:#person#]story#"],
  "story": ["What if, there was #hero.a#. And that #hero# was kind of #adj#. And #hero# liked #season#. #hero# was very #adj#. Then #hero# met a #adj# #adj# #thing#. And she befriended the #thing#. #exclamation#. And then the #hero# saw the #season# and she was so #adj# and she was #adj# as always."],
  "character": ["she", "Ravyn", "Riyah", "Riahnna", "Jennifer", "Payton", "Beyonce"],
  "adj": ['🌚', '😍', '😱', "🔥", "🙌", 'smart', 'pretty', 'loyal', 'fierce', 'personable', 'anxious', 'helpful', 'intense'],
  "season": ["⛈", "🐚", "✨", "❄️", "⛅️"],
  "person": ['queen', 'woman', 'sister', 'friend', 'daughter', 'mother'],
  "exclamation": ['BOW DOWN', "👑👑👑👑👑", 'yaaaasss', 'werrrrk', 'flawless']
}

function setup() {
  noCanvas();
  // Make the grammar
  grammar = tracery.createGrammar(data);

  // A button to generate a new sentence
  var button = select('#generate');
  button.mousePressed(generate);

  // A button to clear everything
  var clear = select('#clear');
  clear.mousePressed(clearAll);
}

// Remove everything
function clearAll() {
  var elements = selectAll('.text');
  for (var i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function generate() {
  var expansion = grammar.flatten('#start#');
  var par = createP(expansion);
  var r = floor(random(100, 255));
  var g = floor(random(150, 255));
  var b = floor(random(200, 255));
  par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
  par.class('text');
}
