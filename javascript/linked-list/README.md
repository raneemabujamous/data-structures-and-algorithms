# Singly Linked List

<!-- Short summary or background information -->

Create a Linked List class
insert : Adds a new node with that value to the head of the list with an O(1) Time performance.
include : checks if a value in the list exist
toString : returns all the nodes in a list in a String format.

## Challenge

*Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
*Create a Linked List class
Within your Linked List class, include a head property.
Upon instantiation, an empty Linked List should be created.
The class should contain the following methods
*insert
Arguments: value
Returns: nothing
Adds a new node with that value to the head of the list with an O(1) Time performance.
*includes
Arguments: value
Returns: Boolean
Indicates whether that value exists as a Node’s value somewhere within the list.
to string
Arguments: none
Returns: a string representing all the values in the Linked List

<!-- Description of the challenge -->

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

create the tests
test expecting failed
-create the node class -create the linked list class
-create the insert method (create node. add it to the head and shift the other ,test again.
-create the includes method, loop over the node values till it finds amatching value ,return true, if not , return false ,test again.
-create the to string method , loop over the values tell end ,add the values to astring ,when finished add null to the end and return test again .

## API

<!-- Description of each method publicly available to your Linked List -->

Insert(): which takes value of type any adding new node with the input value to the list.
include(): this method compare input value if it's exist in linked list.
toString(): return a string visiulizing the linked list shape.
