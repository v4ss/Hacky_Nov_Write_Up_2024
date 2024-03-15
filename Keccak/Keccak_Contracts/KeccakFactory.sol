// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./Keccak.sol";

contract KeccakFactory {
    Keccak[] private s_keccakArray;
    mapping(address => Keccak) private s_addressToContract;

    function createKeccakInstance() public {
        Keccak keccakContract = new Keccak();
        s_keccakArray.push(keccakContract);
        s_addressToContract[msg.sender] = keccakContract;
    }

    function getMyContract() public view returns (Keccak) {
        return s_addressToContract[msg.sender];
    }

    function getContractByAddress(
        address userAddress
    ) public view returns (Keccak) {
        return s_addressToContract[userAddress];
    }

    function getKeccakArray() public view returns (Keccak[] memory) {
        return s_keccakArray;
    }

    function getKeccakArrayAtIndex(uint256 index) public view returns (Keccak) {
        return s_keccakArray[index];
    }
}
