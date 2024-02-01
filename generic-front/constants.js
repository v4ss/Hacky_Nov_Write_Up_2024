export const contractAddress = "0x26A52B7DCAc75EaBC3840Eb4D7c906d078fBc0A9";
export const abi = [
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
