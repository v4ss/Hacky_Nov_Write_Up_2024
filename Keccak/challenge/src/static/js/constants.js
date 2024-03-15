export const factoryAddress = "0x66dC4A0f7e37a67757BD4776c53141Cd0BF55C60";
export const factoryAbi = [
    {
        inputs: [],
        name: "KeccakFactory__NotHacked",
        type: "error",
    },
    {
        inputs: [],
        name: "createInstance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "userAddress",
                type: "address",
            },
        ],
        name: "getInstanceAddress",
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
    {
        inputs: [
            {
                internalType: "address",
                name: "userAddress",
                type: "address",
            },
        ],
        name: "getInstanceVerifState",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getMyInstance",
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
    {
        inputs: [],
        name: "resetVerifState",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "verifyInstance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
