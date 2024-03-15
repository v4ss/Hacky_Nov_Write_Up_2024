// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

error TheLostTreasure__InvalidPosition();

contract TheLostTreasure {
    string[] private s_chestMap = [
        "devant",
        "devant",
        "droite",
        "devant",
        "gauche",
        "gauche",
        "derriere",
        "gauche",
        "devant",
        "devant",
        "droite",
        "devant"
    ];
    string[] private s_submarinePosition;
    string private s_theLostTreasure = "HN0x03{jUh5FFr!ED43gyppm}";

    function goForward() public {
        s_submarinePosition.push("devant");
    }

    function goBackward() public {
        s_submarinePosition.push("derriere");
    }

    function goLeft() public {
        s_submarinePosition.push("gauche");
    }

    function goRight() public {
        s_submarinePosition.push("droite");
    }

    function undoMoving() public {
        s_submarinePosition.pop();
    }

    function resetPosition() public {
        delete s_submarinePosition;
    }

    function getTheLostTreasure() public view returns (string memory) {
        if (
            keccak256(abi.encode(s_submarinePosition)) !=
            keccak256(abi.encode(s_chestMap))
        ) revert TheLostTreasure__InvalidPosition();

        return s_theLostTreasure;
    }

    function getSubmarinePosition() public view returns (string[] memory) {
        return s_submarinePosition;
    }

    function getChestPosition() public view returns (string[] memory) {
        return s_chestMap;
    }
}
