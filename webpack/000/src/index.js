function greet() {
    console.log("Hello, World!");
    const message = document.createElement('h1');
    message.textContent = "Hello, World!";
    document.body.appendChild(message);
}

greet();