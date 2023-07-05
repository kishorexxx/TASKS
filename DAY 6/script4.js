class UberPriceCalculator {
  constructor(distance, surgeMultiplier) {
    this.distance = distance;
    this.surgeMultiplier = surgeMultiplier;
  }

  calculatePrice() {
    var baseFare = 2.5;
    var perMileRate = 1.5;
    var surgeMultiplier = this.surgeMultiplier || 1;

    var totalFare = baseFare + perMileRate * this.distance * surgeMultiplier;
    return totalFare.toFixed(2);
  }
}

var distance = 10; 
var surgeMultiplier = 1.2; 
var calculator = new UberPriceCalculator(distance, surgeMultiplier);

var price = calculator.calculatePrice();
console.log("Uber Price:", price);