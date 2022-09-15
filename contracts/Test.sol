//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Test {
    struct Data {
        uint256[] ids;
        uint256 createdAt;
    }
    mapping(uint256 => Data) public mappedData;

    constructor() {
        mappedData[0].ids.push(1);
    }
}
