const financialAdvisor = Object.create({},
  {
    company: {
      value: "Company Name",
      enumerable: true,
      writable: true
    },
    specialty: {
      value: "The specialty",
      enumerable: true,
      writable: true
    },
    name: {
      value: "Name",
      enumerable: true
    },
    portfolio: {
      value: [],
      enumerable: false,
      writable: true
    },
    worth: {
      value: function() {
        return this.portfolio.reduce( (accumulator, currentValue) => {  
          console.log("accumulator: ", accumulator, "current value: ", currentValue);
                  
          if(currentValue.purchase){
            return accumulator += (currentValue.quantity * currentValue.price)
          } else {
            return accumulator -= (currentValue.quantity * currentValue.price)
          }
        }, 0)
      }, 
      enumerable: true
    },
    purchase: {
      value: function(stockSymbol, quantity, price) {
        this.portfolio.push(
          {
            symbol: stockSymbol,
            quantity: quantity,
            price: price,
            purchase: true
          }
        )
      }
    },
    sell: {
      value: function(stockSymbol, quantity, price) {
        // this.portfolio.push(
        //   {
        //     symbol: stockSymbol,
        //     quantity: quantity,
        //     price: price,
        //     purchase: false
        //   }
        // )
        console.log("bananas");
        
      }
    }
  }
);

financialAdvisor.sell("TEST", 15, 50)
financialAdvisor.purchase("SYM", 20, 75)
console.log(financialAdvisor.portfolio)
console.log(financialAdvisor.worth())


const bobby = Object.create(financialAdvisor)

const test = financialAdvisor.sell
console.log(test);
