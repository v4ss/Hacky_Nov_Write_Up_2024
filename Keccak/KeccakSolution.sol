// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Keccak.sol";

contract KeccakSolution {
    Keccak s_keccakChallenge;

    constructor(address keccakChallengeAddress) {
        s_keccakChallenge = Keccak(keccakChallengeAddress);
    }

    function retrieveFlag() public view returns (string memory) {
        bytes32 hash = keccak256(abi.encodePacked(address(this)));
        return s_keccakChallenge.getFlag(hash);
    }
}
