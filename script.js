class Example {
  #value;

  get value() {
    return this.#value;
  }

  set value(newValue) {
    this.#value = newValue;
  }
}

const instance = new Example();
instance.value = 10;
console.log(instance.value); // logs 10
