// localStorage.setItem(1, "One");
// localStorage.setItem(2, "two");
// localStorage.setItem(3, "THREE");
// localStorage.setItem(4, "Four");
// localStorage.getItem(1);
// localStorage.removeItem(2);
//localStorage.clear();

//We cannot store object in Local storage so we have to convert it into string

const user = { name: "Sagar" };

localStorage.setItem("user", user); //This is Wrong

localStorage.setItem("user", JSON.stringify(user)); // This is right

localStorage.getItem("user"); // This will return the object as string

JSON.parse(localStorage.getItem("user")); // This will convert the string to object



