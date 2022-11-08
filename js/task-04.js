const CounterPlagin = function ({rootselector, counterValue = 0, step = 1 } = {}) {
    this._value = counterValue;
    this._step = step;

    this._refs = this._getRefs(rootselector);

    this._bindEvents();
}

CounterPlagin.prototype._getRefs = function (rootselector) {
    const refs = {};
    refs.container = document.querySelector(rootselector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs._value = refs.container.querySelector('#value');

    return refs;
}

CounterPlagin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log(this);
        this.increment();
        this.updateValue();
    })

    
    this._refs.decrementBtn.addEventListener('click', () => {
        console.log(this);
        this.decrement();
        this.updateValue();
    })
    
}

CounterPlagin.prototype.updateValue = function () {
    this._refs._value.textContent = this._value;
}

CounterPlagin.prototype.increment = function () {
    this._value += this._step;
}

CounterPlagin.prototype.decrement = function () {
    this._value -= this._step;  
} 

new CounterPlagin({ rootselector: '#counter', step: 1 });
console.log(counter);

 