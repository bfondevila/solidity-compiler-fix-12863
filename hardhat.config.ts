import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";

import { TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD } from "hardhat/builtin-tasks/task-names";
import path = require("path");
import { subtask } from 'hardhat/config';

process.env.USE_LOCAL_SOLC && subtask(TASK_COMPILE_SOLIDITY_GET_SOLC_BUILD, async (args: any, _, runSuper) => {
  if (args.solcVersion === "0.8.17") {
    const compilerPath = path.join(__dirname, "solc");

    return {
      compilerPath,
      isSolcJs: false,
      version: args.solcVersion,
      longVersion: "0.8.17-fix-12863"
    }
  }

  return runSuper();
});

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};

export default config;