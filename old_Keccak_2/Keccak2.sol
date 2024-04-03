// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error Keccak2__NotOwner();
error Keccak2__InvalidSecretNumber();
error Keccak2__InvalidHash();

contract Keccak2 {
    string private s_flag = "HN0x03{Tr4N5AcT10n!P3t4rd}";
    address private immutable i_owner;
    uint256 private s_secretNumber;

    constructor(uint256 _secretNumber) {
        i_owner = msg.sender;
        s_secretNumber = _secretNumber;
    }

    modifier onlyOwner() {
        if (msg.sender != i_owner) revert Keccak2__NotOwner();
        _;
    }

    function setSecretNumber(uint256 _newSecret) public onlyOwner {
        s_secretNumber = _newSecret;
    }

    function getFlag(
        uint256 _guess,
        bytes32 _hash
    ) public view returns (string memory) {
        if (_guess != s_secretNumber) revert Keccak2__InvalidSecretNumber();
        if (_hash != keccak256(abi.encodePacked(_guess, address(this))))
            revert Keccak2__InvalidHash();

        return s_flag;
    }
}
