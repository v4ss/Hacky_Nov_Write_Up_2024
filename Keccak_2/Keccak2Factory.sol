// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "./Keccak2.sol";

// interface IKeccak2 {
//     function changeSecretNumber(uint256 _newSecret) external onlyOwner;
// }

contract KeccakFactory {
    // IKeccak2 s_iKeccakContract;
    Keccak2[] private s_keccakArray;
    mapping(address => Keccak2) private s_addressToContract;

    function createKeccakContract() public {
        Keccak2 keccakContract = new Keccak2(78);
        // s_iKeccakContract = IKeccak2(keccakContract);
        s_keccakArray.push(keccakContract);
        s_addressToContract[msg.sender] = keccakContract;
    }

    // function changeSecretNumber() public {
    //     keccakContract.changeSecretNumber(56);
    // }

    function getMyContract() public view returns (Keccak2) {
        return s_addressToContract[msg.sender];
    }

    function getContractByAddress(
        address userAddress
    ) public view returns (Keccak2) {
        return s_addressToContract[userAddress];
    }

    function getKeccakArray() public view returns (Keccak2[] memory) {
        return s_keccakArray;
    }

    function getKeccakArrayAtIndex(
        uint256 index
    ) public view returns (Keccak2) {
        return s_keccakArray[index];
    }
}
