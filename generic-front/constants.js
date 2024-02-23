export const contractAddress = "0x23959FD3269e6a351c14A765c86c2a1B807Fe306";
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
            { internalType: "address", name: "userAddress", type: "address" },
        ],
        name: "getContractByAddress",
        outputs: [
            { internalType: "contract Keccak", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getKeccakArray",
        outputs: [
            { internalType: "contract Keccak[]", name: "", type: "address[]" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
        name: "getKeccakArrayAtIndex",
        outputs: [
            { internalType: "contract Keccak", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getMyContract",
        outputs: [
            { internalType: "contract Keccak", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
];

export const contractAbi = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "Keccak__InvalidHash", type: "error" },
    {
        inputs: [{ internalType: "bytes32", name: "hash", type: "bytes32" }],
        name: "changeOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
];