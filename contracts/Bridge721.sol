// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Bridge721 is ERC721URIStorage {
    constructor() ERC721("Web3Bridge Last Test", "WLT") {}

    uint256 tokenId = 0;

    function mint(string memory uri) public {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        tokenId++;
    }
}