// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./AuctionHouse.sol";

contract AuctionHouseFactory {
    AuctionHouse[] private s_auctionHouseArray;
    mapping(address => AuctionHouse) private s_addressToContract;

    function createAuctionHouseContract() public {
        AuctionHouse auctionHouseContract = new AuctionHouse();
        s_auctionHouseArray.push(auctionHouseContract);
        s_addressToContract[msg.sender] = auctionHouseContract;
    }

    function getMyContract() public view returns (AuctionHouse) {
        return s_addressToContract[msg.sender];
    }

    function getContractByAddress(
        address userAddress
    ) public view returns (AuctionHouse) {
        return s_addressToContract[userAddress];
    }

    function getAuctionHouseArray() public view returns (AuctionHouse[] memory) {
        return s_auctionHouseArray;
    }

    function getAuctionHouseArrayAtIndex(uint256 index) public view returns (AuctionHouse) {
        return s_auctionHouseArray[index];
    }
}
