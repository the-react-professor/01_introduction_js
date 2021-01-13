1. make a Computer class

2. make a boot() function

3. make Monitor, Keyboard, Mouse, Printer classes, each with a method attach() and detach()

4. when running boot(), each peripheral class should be added to a "peripherals" array and their attach() method should be called

5. when running terminate(), each peripheral should run detach() and be removed from peripherals

6. make a Memory class, with a save() and get() function which should accept an object

7. when writing in a text field <input id="input" />, the Memory.save() should save an object like { text: text }

7. when terminating, the computer should save the object in Memory

8. when starting, the computer should get the object from Memory and use the Monitor display() function to console.log it. 

9. create "Iphone", "Ipad", "SSD" classes. These should have an init() and detach() function. 

10. add a attachUSB() function, which can accept any number of arguments;
If a name of type "Iphone", "Ipad", 'SSD" is in the array, it should instance that class and add it to an array of "devices".

11. when terminating, the computer should run detach() on any registered device.

