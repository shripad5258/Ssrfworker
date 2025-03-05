export default {
  async fetch(request) {
    try {
      const response = await fetch('http://169.254.169.254/latest/meta-data/');
      const data = await response.text();
      return new Response(data, {
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }
};
