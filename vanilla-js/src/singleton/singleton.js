let instance;

class ExampleSingleton {
    counter

    constructor(value) {
        if (instance) {
            throw new Error('You can buld this class only onces');
        }
        instance = this;
        this.counter = value;
    }

    add() {
        return ++this.counter;
    }

    substract() {
        return --this.counter;
    }
}

export default ExampleSingleton;
