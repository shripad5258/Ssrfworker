addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    // Fetch AWS metadata
    const awsResponse = await fetch('http://169.254.169.254/latest/meta-data/');

    // Check if the response is valid
    if (!awsResponse.ok) {
      throw new Error(`AWS request failed: ${awsResponse.status}`);
    }

    // Get the data as text
    const data = await awsResponse.text();

    // Return the data with CORS headers
    return new Response(data, {
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    // Return the error message for debugging
    return new Response(`Error: ${error.message}`, {
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
}
