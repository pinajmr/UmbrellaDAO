// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/draft-ERC721Votes.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

/// @custom:security-contact josepina@pinalikefruit.com
contract TokenGovernorUmbrela is
  ERC721,
  Ownable,
  EIP712,
  ERC721Votes,
  ERC721Burnable
{
  constructor()
    ERC721("Token Governor Umbrela", "TGU")
    EIP712("Token Governor Umbrela", "1")
  {}

  function safeMint(address to, uint256 tokenId) public onlyOwner {
    _safeMint(to, tokenId);
  }

  // The following functions are overrides required by Solidity.

  function _afterTokenTransfer(
    address from,
    address to,
    uint256 tokenId
  ) internal override(ERC721, ERC721Votes) {
    super._afterTokenTransfer(from, to, tokenId);
  }
}
