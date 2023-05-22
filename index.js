const name = prompt("Please enter your name:");

if (name === null || name === "" || !isNaN(name)) {
  alert("Please, enter a valid name!");
} else {
  alert(`Hello, ${name}! How are you?`);
}
