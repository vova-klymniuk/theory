# Посредник (Indirection)

Indirection или посредник. Можно столкнуться с таким вопросом:
"Как определить ответственность обьекта и избежать сильной связанности между обьектами, 
даже если один класс нуждается в функционале (сервисах)", который предоставляет другой класс?

Решение: возложите ответсвенность на промежуточный обьект,
чтобы он осуществлял связь между другими компонентами или службами,
чтобы они не были напрямую связаны. Такое решение можно сделать с помощью GoF паттерна медиатор.

К примеру у нас был код:
```js
    public class CustomerOrdersController : Controller
    {
        private readonly IOrdersService _ordersService;

        public CustomerOrdersController(IOrdersService ordersService)
        {
            this._ordersService = ordersService;
        }
    }
```

мы можем переписать этот код с помощью mediator для связки между обьектами:
```js
    public class CustomerOrdersController : Controller
    {
        private readonly IMediator _mediator;

        public CustomerOrdersController(IOrdersService ordersService)
        {
             this._ordersService = ordersService;
        }
    }
```

мы можем переписать этот код с помощью mediator для связки между объектами:
```js
    public class CustomerOrdersController : Controller
    {
        private readonly IMediator _mediator;
        
        public CustomerOrdersController(IMediator mediator)
        {
            this._mediator = mediator;
        }
        
        public async Task<IActionResult> AddCustomerOrder(
            [FromRoute]Guid customerId,
            [FromBody]CustomerOrderRequest request)
        {
            await _mediator.Send(new AddCustomerOrderCommand(customerId, request.Products));
            
            return Created(string.Empty, null);
        }
    }
```
Обратите внимание. Посредник поддерживает "low coupling", но снижает читабельность и понимание всей системы. Вы не знаете, какой класс обрабатывает команду из определения Controller. Это компромисс.

