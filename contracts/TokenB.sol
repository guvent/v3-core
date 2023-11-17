// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '@openzeppelin/contracts/drafts/ERC20Permit.sol';

contract TokenB is ERC20Permit {
    constructor(uint256 amountToMint) ERC20('TokenB', 'TKB') ERC20Permit('TokenB') {
        _mint(msg.sender, amountToMint);
    }
}