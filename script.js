function Button(text) {
  this.text = text || 'Hello';
}
Button.prototype = {
  create: function() {
    var self = this;

    this.element = document.createElement('button');
    this.element.innerText = this.text;
    this.element.addEventListener('click', function() {
      alert(self.text);
    });
    document.body.appendChild(this.element);
  }
}

var btn1 = new Button;
var btn2 = new Button('button 2');

btn1.create();
btn2.create();
