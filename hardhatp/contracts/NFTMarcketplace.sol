// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTMarcketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    uint public count =0;
    uint256 mintPrice = 0.025 ether;
    uint256 MAX_INT = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;
    address payable owner;
    struct Item {
      uint256 tokenId;
      address payable owner;
      uint256 price;
      bool sold;
    }
  mapping(uint256 => Item) private idToItem;
 
  constructor() ERC721("MyNFT", "NFT") {
    owner = payable(msg.sender); 
    console.log("Owner", owner);
    }
 
  function getmintPrice() public view returns (uint256) {
      return mintPrice;
    }

    /* Mints a token and lists it in the marketplace */
    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
      _tokenIds.increment();
      uint256 newTokenId = _tokenIds.current();

      _mint(msg.sender, newTokenId);
      owner.transfer(mintPrice);
      console.log(msg.sender);
      count++;
      _setTokenURI(newTokenId, tokenURI);
      createMarketItem(newTokenId, price);
      console.log("TokenId", newTokenId);
      return newTokenId;
    }

    function createMarketItem(uint256 tokenId,uint256 price) private {
    
      require(price > 0, "Price must be at least 1 wei");
      Item memory tmp;
      tmp.sold = false;
      tmp.price = price;
      tmp.owner = payable(msg.sender);
      tmp.tokenId = tokenId;
      idToItem[tokenId] =  tmp;  
    }

   
    /* Creates the sale of a marketplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function createMarketSale(uint256 tokenId) public payable {
      // require(mintPrice == price, "Please submit the asking price in order to complete the purchase");
      _itemsSold.increment();
      payable(ownerOf(tokenId)).transfer(msg.value);
      _transfer(ownerOf(tokenId), msg.sender, tokenId);
      idToItem[tokenId].owner = payable(msg.sender);
      idToItem[tokenId].sold = true;     
      idToItem[tokenId].price = MAX_INT;   
      
    }
    //     function listOnMarketplace(uint256 _tokenId, uint256 _price) public {
    //     require(_exists(_tokenId), "listOnMarketplace: token not found");
    //     require(ownerOf(_tokenId) == msg.sender, "listOnMarketplace: only owner can list the token on marketplace");
    //     marketplace[_tokenId].listing = true;
    //     marketplace[_tokenId].price = _price;
    // }

    function removeFromMarketplace(uint256 _tokenId) public {
        require(_exists(_tokenId), "removeFromMarketplace: token not found");
        require(ownerOf(_tokenId) == msg.sender, "removeFromMarketplace: only owner can remove the token from marketplace");
        idToItem[_tokenId].sold = true;
        idToItem[_tokenId].price = MAX_INT;
    }

// afficher tous les transactions
     function getAllItems() public view returns (Item[] memory){
        Item[] memory allItems = new Item[](count);
        for (uint j = 0; j < count; j++) {
          if (_exists(j+1)) {
               allItems[j] = idToItem[j+1];
             console.log(msg.sender);
        }}
        return allItems;
    }
    //afficher les transactions d'un utilisateur
     function getMyTransactions() public view returns (Item[] memory){
        Item[] memory mine = new Item[](count);
        for (uint j = 0; j < count; j++) {
            console.log(idToItem[j+1].owner);
           
            //verifier si le demandeur est soit le vendeur ou l'acheteur(retourner ses transactions)
            if((idToItem[j+1].owner==msg.sender) ){
               
                if (_exists(j+1)) {
                     console.log(msg.sender);
            mine[j] = idToItem[j+1];
           
        }
             
            }
        }
       
        return mine;
    }
    
}