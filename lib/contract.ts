// lib/contract.ts
export const contractAddress =
    "0xeA3630a0F78A5050C91b62e4a6a9fD8A86b9222e"

export const contractABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_guess",
                type: "uint256",
            },
        ],
        name: "guess",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "winner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
] as const
