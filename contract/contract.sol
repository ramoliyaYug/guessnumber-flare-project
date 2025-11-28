// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GuessNumber {
    uint256 private secretNumber = 7; // fixed number, no input during deployment
    address public winner;

    function guess(uint256 _guess) public returns (string memory) {
        require(winner == address(0), "Game already won!");

        if (_guess == secretNumber) {
            winner = msg.sender;
            return "Correct! You won!";
        } else {
            return "Wrong guess. Try again!";
        }
    }
}