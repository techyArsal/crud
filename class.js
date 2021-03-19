// function fn() {}
// let john = {};

let eva = {
  name: "Eva",
};

// console.log(eva.name);
// eva.name =
let lengthGlobal, widthGlobal;
function setValue(length, width) {
  lengthGlobal = length;
  widthGlobal = width;
}
class Rectangle {
  // Attributes/ Properties
  _length;
  _width;
  // Constructor
  //   constructor() {
  //     console.log("This is a Constructor!");
  //   }

  constructor(length, width) {
    this._length = length;
    this._width = width;
  }
  // Functions
  setValue(length, width) {
    this._length = length;
    this._width = width;
  }

  getValue() {
    return {
      length: this._length,
      width: this._width,
    };
  }
}

let recOne = new Rectangle(10, 10);
recOne.setValue(10, 10);
let recTwo = new Rectangle();
recTwo.setValue(9, 9);

console.log(recOne.getValue());
console.log(recTwo.getValue());

function echoValues(valOne, valTwo, valThree) {
  console.log(valOne, valTwo, valThree);
}

echoValues(1, 2, 3);
echoValues(1, 2);
echoValues();
