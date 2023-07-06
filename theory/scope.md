JavaScript has **3 types** of scope:

- Block scope

    Variables declared inside a { } block cannot be accessed from outside the block (only for let/const).



- Function scope

    Variables defined inside a function are not accessible (visible) from outside the function.



- Global scope

    A variable declared outside a function, becomes global.

*If you assign a value to a variable that has not been declared, it will automatically become a global variable.

BUT

In "Strict Mode", undeclared variables are not automatically global.

*Function (local) variables are deleted when the function is completed.