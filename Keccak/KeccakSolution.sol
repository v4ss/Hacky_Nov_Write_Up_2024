// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Keccak.sol";

contract Keccak2Solution {
    Keccak keccakChallenge;

    constructor(address _keccakChallengeAddress) {
        keccakChallenge = Keccak(_keccakChallengeAddress);
    }

    function retrieveFlag() public view returns (string memory) {
        bytes32 hash = keccak256(abi.encodePacked(address(this)));
        return keccakChallenge.getFlag(hash);
    }
}
