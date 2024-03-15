// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IFallback {
    function getFlag() public onlyOwner view returns(string memory);
    function contribute() public payable();
}

contract HNParticipantContract {
    IFallback fallbackChallenge;

    constructor(address _fallbackChallengeAddress) {
        fallbackChallenge = IFallback(_fallbackChallengeAddress);
    }

    function Contribution() public payable () {
        contribute{0,001: 0,001}();
    }

    function retrieveFlag() public view returns (string memory) {
        
}
