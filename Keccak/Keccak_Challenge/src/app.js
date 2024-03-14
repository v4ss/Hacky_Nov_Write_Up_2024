const ethers = require("ethers");
const factoryAbi = [
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

require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const factoryAddress = process.env.FACTORY_ADDRESS;
const flag = process.env.FLAG;
const cors = require("cors");

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
    res.send(`Hacky'Nov Blockchain API - ${process.env.CHALL_NAME}`);
});

app.get("/request-flag/:userAddress", async (req, res) => {
    const userAddress = req.params.userAddress;
    if (userAddress == factoryAddress) {
        res.send("Use your own address !");
        return 0;
    }

    const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // To load a factory contract
    const factory = new ethers.Contract(factoryAddress, factoryAbi, wallet);

    try {
        let userContractAddress =
            await factory.getContractByAddress(userAddress);
        if (
            userContractAddress == "0x0000000000000000000000000000000000000000"
        ) {
            res.send("Address don't create instance");
            return 0;
        }

        // To load user contract
        const userContract = new ethers.Contract(
            userContractAddress,
            ["function getOwner() public view returns (address)"],
            wallet,
        );

        let owner = await userContract.getOwner();

        if (owner == userAddress) {
            res.send({ flag });
        } else {
            res.send("Challenge non validé");
            return 0;
        }
    } catch (e) {
        return 0;
    }
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
