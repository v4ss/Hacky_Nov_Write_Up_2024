// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Keccak {
    string private flag;

    // Supposons qu'il y ait une fonction qui peut être exploitée
    function getFlag(bytes32 _hash) public view returns (string memory) {
        require(
            _hash == keccak256(abi.encodePacked(msg.sender)),
            "Hash invalide"
        );
        return flag;
    }
}
