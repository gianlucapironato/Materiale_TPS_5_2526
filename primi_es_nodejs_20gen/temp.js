// Function to fetch user data with Async/Await
async function fetchUserDataWithAsyncAwait() {
    // Simulating an API request
    const userData = { id: 1, name: "John Doe" };

    return new Promise((resolve) => {
        resolve(userData);
    });
}

// Function to process user data using Async/Await
async function processUserDataWithAsyncAwait() {
    try {
        const data = await fetchUserDataWithAsyncAwait();
        console.log("Processing user data:", data);
        console.log("User data processed successfully.");
    } catch (error) {
        console.error("Error:", error);
    }
}

// Using Async/Await
processUserDataWithAsyncAwait();