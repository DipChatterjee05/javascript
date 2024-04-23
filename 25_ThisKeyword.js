// <---------- THIS KEYWORD ---------->
// "use strict"

// <---------- 1. THIS KEYWORD IN GLOBAL SCOPE ---------->
// console.log(this); // IN GLOBAL SPACE THIS ALWAYS POINTS TO GLOBAL OBJECT
// IN CASE OF BROWSER ITS WINDOW
// IN CASE OF NODE ITS GLOBAL


// <---------- 2. THIS KEYWORD INSIDE A FUNCTION ---------->
/* function hello() {
    console.log(this); // THIS ALSO WINDOW BUT ONLY IN NON STRICT MODE
    // IN STRICT MODE IT IS UNDEFINED
}
hello(); */


// <---------- 3. THIS KEYWORD IN NON STRICT MODE - (THIS SUBSTITUTION) ---------->


// <---------- 4. THIS KEYWORD VALUE DEPENDS ON HOW THE FUNCTION IS CALLED (WINDOW) ---------->
/* function hello() {
    console.log(this);
}
hello(); // IN NORMAL FUNCTION CALL IT IS UNDEFINED IN STRICT MODE
window.hello(); // IF WE CALL LIKE THIS IT IS WINDOW OBJECT IN STRICT MODE */


// <---------- 5. THIS KEYWORD INSIDE AN OBJECT METHOD ---------->
/* const obj = {
    name: "Hello",
    x: function() {
        console.log(this.name); // HELLO WORLD WILL BE PRINTED
        console.log(this); // WHOLE OBJECT IS PRINTED
    }
}
obj.x(); */


// <---------- 6. CALL, APPLY, BIND METHODS (SHARING METHOD) ---------->
/* const student = {
    name: "Hello",
    printName: function() {
        console.log(this.name); // IT WILL PRINT THE STUDENT OBJECT NAME
    }
}
student.printName();

const student2 = {
    name: "World",
}
student.printName.call(student2); // USING CALL WE USE STUDENT'S printName FUNCTION INTO STUDENT2 AND OVERWRITE THE VALUE
*/


// <---------- 7. THIS KEYWORD INSIDE ARROW FUNCTION ---------->
/* const obj = {
    a: 5,
    x: () => {
        console.log(this); // OUTPUT WILL BE ENCLOSING LEXICAL CONTEXT
    }
}
obj.x(); */


// <---------- 8. THIS KEYWORD INSIDE NESTED ARROW FUNCTION ---------->
/* const obj = {
    a: 5,
    x: function () {
        const y = () => {
            console.log(this); // OUTPUT WILL BE ENCLOSING LEXICAL CONTEXT
        }
        y();
    },
}
obj.x(); */


// <---------- 9. THIS KEYWORD INSIDE DOM ---------->
// REFERENCE TO HTML ELEMENT onclick="alert(this)
// REFERENCE TO HTML ELEMENT onclick="alert(this.tagName)
