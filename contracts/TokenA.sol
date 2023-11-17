// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '@openzeppelin/contracts/drafts/ERC20Permit.sol';

contract TokenA is ERC20Permit {
    constructor(uint256 amountToMint) ERC20('TokenA', 'TKA') ERC20Permit('TokenA') {
        _mint(msg.sender, amountToMint);
    }
}