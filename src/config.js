export const CONFIG = {
  TEMPLATE: {
    // 1. Set your NFT collection contract address
    "collection_address": "0xF3402D09BfF30252872ec60A00305E3fD082A701",

    // 2. Set your blockchain chain ID where your NFT collection contract address is deployed (see below for value options)
    "block_chain_id": "137",

    // 3. Set the default title of your dashboard. If found, this template uses the NFT Collection name for the title.
    "title": "Boomi Dashboard",

    // 4. (Optional) Display the floor price chart
    "timeseries_chart": true,

    // 5. (Optional) Set your banner image
    "banner_picture": "https://lh3.googleusercontent.com/bPeLPTAvISHbkLLE6HxCvq9qfyxN7md6gPH5xQpv7filGYg9w6HGxMI3chAGnwrvTIu1f7hGQcN8gjA2N8aOC2Wrkl9GGPtncTNG=w600",
  },

  // These options just for your reference
  FILTER_OPTIONS : [
    {name: "Ethereum", value: 1},
    {name: "Polygon", value: 137},
    {name: "Avalanche", value: 43114}
    ],
  GRAPH_OPTIONS : [
    {name: "7 Days", value: 7},
    {name: "1 Month", value: 30},
    {name: "3 Month", value: 90},
    {name: "1 Year", value: 365},
      {name: "All time", value: 0},
    ],
}
