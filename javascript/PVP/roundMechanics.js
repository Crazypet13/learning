
module.exports = class Round{
    #timeLeft = 5.5
    constructor() {

    }
    getTime() {
        return this.#timeLeft;
    }
    reduceTime(time) {
        if (this.#timeLeft < time) {
            throw Error('Not enough time for that.');
        } else {
            this.#timeLeft -= time;//this.#timeLeft = (this.#timeLeft - time); 
        }
    }
}