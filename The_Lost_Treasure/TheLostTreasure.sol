// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TheLostTreasure {
    // Une carte au trésor indiquant des directions pour aller jusqu'au trésor
    // Des fonctions pour déplacer le sous-marin (devant-derriere-gauche-droite-bas-haut)
    // Une fonction pour récupérer le coffre au trésor (si à la bonne position)

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
    string[] private s_submarineMoving;

    function goForward() public {
        s_submarineMoving.push("devant");
    }

    function goBackward() public {
        s_submarineMoving.push("derriere");
    }

    function goLeft() public {
        s_submarineMoving.push("gauche");
    }

    function goRight() public {
        s_submarineMoving.push("droite");
    }

    function undoMoving() public {
        s_submarineMoving.pop();
    }

    function resetPosition() public {}
}
