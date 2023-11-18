function checkCashRegister(price, cash, cid) {
    let change = cash - price
    let totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);
    totalCID = Math.round(totalCID * 100) / 100;
    if (totalCID < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (totalCID === change) {
        return { status: "CLOSED", change: cid };
    } else { 
      let changeArr = [];
        let currencyUnit = {
            "ONE HUNDRED": 100.00,
            "TWENTY": 20.00,
            "TEN": 10.00,
            "FIVE": 5.00,
            "ONE": 1.00,
            "QUARTER": 0.25,
            "DIME": 0.10,
            "NICKEL": 0.05,
            "PENNY": 0.01
        };

        for (let i = cid.length - 1; i >= 0; i--) {
            let coinName = cid[i][0];
            let coinTotal = cid[i][1];
            let coinValue = currencyUnit[coinName];
            let coinAmount = (coinTotal / coinValue).toFixed(2);
            let coinsToReturn = 0;

            while (change >= coinValue && coinAmount > 0) {
                change -= coinValue;
                change = Math.round(change * 100) / 100; // round off to avoid precision errors
                coinAmount--;
                coinsToReturn++;
            }

            if (coinsToReturn > 0) {
                changeArr.push([coinName, coinsToReturn * coinValue]);
            }
        }

        if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }

        return { status: "OPEN", change: changeArr };
  }
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
