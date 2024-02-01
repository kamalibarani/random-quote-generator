// Update the import statement to use dynamic import()
import('node-fetch').then(async (module) => {
    const fetch = module.default;

    // Function to fetch a random quote
    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            return data.content;
        } catch (error) {
            console.error('Error fetching quote:', error);
            return 'An error occurred while fetching the quote.';
        }
    }

    // Main function to display a random quote
    async function displayRandomQuote() {
        const quote = await fetchQuote();
        console.log('Random Quote:', quote);
    }

    // Display a random quote when the script is executed
    displayRandomQuote();
}).catch((error) => {
    console.error('Error importing node-fetch:', error);
});
