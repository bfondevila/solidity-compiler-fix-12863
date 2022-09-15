import { expect } from "chai";
import { Test } from "../typechain-types";
const { ethers } = require("hardhat");

describe("when having a struct with an array member", () => {
  let contract: Test;
  
  before(async () => {
    const factory = await ethers.getContractFactory("Test");
    contract = await factory.deploy();
  });

  it("then we can retrieve information from the array", async () => {
    //Fails to compile with solidity <=0.8.17
    //Compiles and passes with the fix-12863 version of solc
    expect((await contract.mappedData(0)).ids[0]).to.eq(1);
  });
});