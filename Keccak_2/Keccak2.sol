// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error Keccak2__Not_Owner();

contract Keccak2 {
    string private constant FLAG = "HN0x03{Tr4N5AcT10n!P3t4rd}";
    address private immutable i_owner;
    uint256 private s_secretNumber;

    constructor(uint256 _secretNumber) {
        i_owner = msg.sender;
        s_secretNumber = _secretNumber;
    }

    modifier onlyOwner() {
        // require(
        //     msg.sender == i_owner,
        //     "Seul le proprietaire peut appeler cette fonction"
        // );
        if (msg.sender != i_owner) revert Keccak2__Not_Owner();
        _;
    }

    function setSecretNumber(uint256 _newSecret) public onlyOwner {
        s_secretNumber = _newSecret;
    }

    function getFlag(
        uint256 _guess,
        bytes32 _hash
    ) public view returns (string memory) {
        require(
            _hash == keccak256(abi.encodePacked(_guess, address(this))),
            "Hash invalide"
        );
        require(_guess == s_secretNumber, "Nombre secret incorrect");
        return FLAG;
    }
}

// Analyser les transactions pour récupérer le nombre secret
// Deploy contract -> Call changeSecretNumber() -> Analysis the transaction to find the secret number
