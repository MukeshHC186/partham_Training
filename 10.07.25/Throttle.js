   // Throttle function definition
        function throttle(fn, delay) {
            let lastTime = 0;
            return function(args) {
                const now = Date.now();
                if (now - lastTime >= delay) {
                    lastTime = now;
                    fn(args);
                }
            }
        }

        // Function to run after throttling
        function searchQuery(value) {
            console.log("Throttled input:", value);
        }

        // Wrap the searchQuery with throttle
        const throttleSearch = throttle(searchQuery, 1000); // 1 second

        // Event listener on input box
        document.getElementById("searchbox").addEventListener("input", (e) => {
            throttleSearch(e.target.value);
        });