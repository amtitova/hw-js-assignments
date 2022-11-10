class Button {
  constructor(width, height, type = "button", color = "green") {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }

  onClick() {
    console.log(`Width: ${this.width}`);
    console.log(`Height: ${this.height}`);
    console.log(`Type: ${this.type}`);
    console.log(`Color: ${this.color}`);
  }
}

let myButton = new Button(100, 50);

myButton.onClick();

function testButton(button) {
  if (button.width && button.height && button.type && button.color) {
    return true;
  }
  return false;
}

console.log(testButton(myButton));
