// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./Keccak2.sol";

contract Keccak2Solution {
    Keccak2 s_keccak2Challenge;
    uint256 public immutable i_secretNumber;

    // When you deploy this contract, you have to already find the secret number (cf. WriteUp Keccak2)
    constructor(address keccak2ChallengeAddress, uint256 secretNumber) {
        s_keccak2Challenge = Keccak2(keccak2ChallengeAddress);
        i_secretNumber = secretNumber;
    }

    function retrieveFlag() public view returns (string memory) {
        bytes32 hash = keccak256(
            abi.encodePacked(i_secretNumber, address(s_keccak2Challenge))
        );
        return s_keccak2Challenge.getFlag(i_secretNumber, hash);
    }
}
