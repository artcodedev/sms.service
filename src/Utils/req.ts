

(async () => {

    const response = await fetch("localhost:3000/get", {
        method: "POST",
        body: JSON.stringify({ message: "Hello from Bun!" }),
        headers: { "Content-Type": "application/json" },
    });
    const html = await response.text();

    console.log(html)
    
})();
