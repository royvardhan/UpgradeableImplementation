const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("ERC721 Upgradeable", function () {
  it("Should deploy an upgradeable ERC721 Contract", async function () {
    const UPNFT = await ethers.getContractFactory("UPNFT");
    const UPNFT2 = await ethers.getContractFactory("UPNFT2");

    let proxyContract = await hre.upgrades.deployProxy(UPNFT, {
      kind: "uups",
    });
    const [owner] = await ethers.getSigners();
    const ownerOfToken1 = await proxyContract.ownerOf(1);

    expect(ownerOfToken1).to.equal(owner.address);

    proxyContract = await hre.upgrades.upgradeProxy(proxyContract, UPNFT2);
    expect(await proxyContract.test()).to.equal("upgraded");
  });
});
