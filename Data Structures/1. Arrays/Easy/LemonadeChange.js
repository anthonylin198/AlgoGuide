// ! At a lemonade stand, each lemonade costs $5.
// ! Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// ! Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

// Input: [5, 5, 5, 10, 20]
// Output: true -- Since can provide all customers with the correct change

// ! Solution 1: Keep track of the bills we have on hand -- using an object/hashtable -- If posibble, always get rid of our largest bills first, keeping our 5s.
// !
