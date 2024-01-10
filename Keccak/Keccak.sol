// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Keccak {
    string private s_flag = "HN0x03{Ges4pp3lleGrr00t!}";

    function getFlag(bytes32 hash) public view returns (string memory) {
        require(
            hash == keccak256(abi.encodePacked(msg.sender)),
            "Hash invalide"
        );
        return s_flag;
    }
}
