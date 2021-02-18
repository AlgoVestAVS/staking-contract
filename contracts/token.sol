pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(string memory name, string memory symbol) public ERC20(name, symbol)
    {
        uint256 initialSupply = 10 ** 6 * 10 ** uint256(decimals());
        _mint(_msgSender(), initialSupply);
    }
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}