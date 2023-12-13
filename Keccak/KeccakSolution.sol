// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IKeccak {
    function getFlag(bytes32 _hash) external view returns (string memory);
}

contract CTFParticipantContract {
    IKeccak keccakChallenge;

    constructor(address _keccakChallengeAddress) {
        keccakChallenge = IKeccak(_keccakChallengeAddress);
    }

    function retrieveFlag() public view returns (string memory) {
        bytes32 hash = keccak256(abi.encodePacked(address(this)));
        return keccakChallenge.getFlag(hash);
    }
}
