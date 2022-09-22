//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./UPNFT.sol";

contract UPNFT2 is UPNFT {

    function test() pure public returns(string memory) {
        return "upgraded";
    }
}