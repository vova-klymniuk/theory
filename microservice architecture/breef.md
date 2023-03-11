## Refactoring a monolith to microservices
https://microservices.io/patterns/refactoring/strangler-application.html


### Implement new functionality as services
A good way to begin the migration to microservices is to implement significant new functionality as services. 
This is sometimes easier than breaking apart of the monolith. 
It also demonstrates to the business that using microservices significantly accelerates software delivery.



Extract services from the monolith

While implementing new functionality as services is extremely useful, the
only way of eliminating the monolith is to incrementally extract modules out of
the monolith and convert them into services. Fox example, let's imagine
that the FTGO team wants to improve the efficiency of the business and customer satisfaction
by rapidly iterating on the courier scheduling algorithm. 
It will be a lot easier for them to work on the delivery management from order management and 
convert it into service.


https://microservices.io/refactoring/index.html

