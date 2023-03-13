# Полиморфизм (Polymorphism)

`Полиморфизм` позволяет реализовывать одноименные публичные методы, 
 позволяя различные действия при одном и том же вызове. То есть обьекты классов
 Square и Circle могут отображаться (реализовывать метод render) по-разному несмотря 
 не то, что они оба подклассы Shapre, метод render определен в Shape. (Overriding).

 Принцип полиморфизма является основопологающим в ООП. 
 В этом контексте принцип тесно связан с GoF паттерном strategy.
 Это самый яркий пример реализации полиморфизма.
 
```
    Назначение: определяет семейство алгоритмов, инкапсулирует каждый из них и делает их взаимозаменяемыми. 
    Стратегия позволяет изменять алгоритмы независимо от клиентов, которые ими пользуются.

    Другими словами: стратегия инкапсулирует определенное поведение с возможностью его подмены.
    
                                                  -------------     City bus
                                                 |
                                                 |
    TransportationToAirport <>-----> Straregy <  |-------------     Personal car           Concrete strategies (options)
                                                 |
                                                 |
                                                  -------------     Taxi
```

