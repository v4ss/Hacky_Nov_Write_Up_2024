export const contractAddress = "0x9f072C6807Eeb722DaDB3284A4e10F22ADF3f07E";
export const factoryAbi = [
    {
        inputs: [],
        name: "createKeccakInstance",
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
        name: "getContractByAddress",
        outputs: [
            {
                internalType: "contract Keccak",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getKeccakArray",
        outputs: [
            {
                internalType: "contract Keccak[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        name: "getKeccakArrayAtIndex",
        outputs: [
            {
                internalType: "contract Keccak",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getMyContract",
        outputs: [
            {
                internalType: "contract Keccak",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

export const contractAbi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "Keccak__InvalidHash",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "changeOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
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
];
