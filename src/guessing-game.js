class GuessingGame {
    a = 0
    constructor() {
        
        
    }
 
    setRange(min, max) {
        this.min = min
        this.max = max
    }
    guess() {
        
       return this.a = Math.round((this.max - this.min) / 2 + this.min)
        
    }

    lower() {
         
       return this.max = this.a 
        
     this.guess()

    }

    greater() {
        
        return this.min = this.a
        
         this.guess()

    }
}

module.exports = GuessingGame;
