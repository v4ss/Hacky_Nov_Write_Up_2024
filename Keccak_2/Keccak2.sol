// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CTFChallenge {
    string private flag = "CTF{Votre_Flag_Ici}";
    address private owner;
    uint256 private secretNumber;

    constructor(uint256 _secretNumber) {
        owner = msg.sender;
        secretNumber = _secretNumber;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Seul le proprietaire peut appeler cette fonction"
        );
        _;
    }

    function changeSecretNumber(uint256 _newSecret) public onlyOwner {
        secretNumber = _newSecret;
    }

    function getFlag(
        uint256 _guess,
        bytes32 _hash
    ) public view returns (string memory) {
        require(
            _hash == keccak256(abi.encodePacked(_guess, address(this))),
            "Hash invalide"
        );
        require(_guess == secretNumber, "Nombre secret incorrect");
        return flag;
    }
}

// Analyser les transactions pour récupérer le nombre secret
// Deploy contract -> Call changeSecretNumber() -> Analysis the transaction to find the secret number
