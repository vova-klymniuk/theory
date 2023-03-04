
```ts
    class Customer
    {
        private readonly List<Order> _orders = new List<Order>();

        public decimal GetTotalAmount(Guid orderId)
        {
            return this._orders.Sum(x => x.Amount);
        }
    }
```

var customer = {
    orderList: {
        total: 0,
        elements: [
            { Amount: 10 },
            { Amount: 20 },
            { Amount: 30 },
        ],
    },

    GetTotalAmount: function (id) {
        console.log(this.orderList)
        this.orderList.total = 0;

        this.orderList.elements.map((elem) => {

              this.orderList.total += elem.Amount;
        });

        console.log(this.orderList)
        return this.orderList.total;
    }
}