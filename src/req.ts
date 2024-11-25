

(async () => {

    const response = await fetch("localhost:3005/getallmessages", {
        method: "POST",
        body: JSON.stringify({ port: '/dev/ttyUSB0'}),
        headers: { "Content-Type": "application/json" },
    });
    const html = await response.text();

    console.log(html)
    
})();
