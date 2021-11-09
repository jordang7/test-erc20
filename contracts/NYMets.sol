//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NYMets is ERC20 {
    uint256 constant _initial_supply = 1986 * (10**18);

    constructor() public ERC20("NYMets", "NYM") {
        _mint(msg.sender, _initial_supply);
    }
}
