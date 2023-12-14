// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

using stdStorage for StdStorage;

import {ERC20} from "openzeppelin-contracts/token/ERC20/ERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {stdStorage, StdStorage, Test, console} from "forge-std/Test.sol";
import {BtcMarketPlace} from "../../src/swap/Btc_Marketplace.sol";
import {Utilities} from "./Utilities.sol";
import {BitcoinTx} from "../../src/bridge/BitcoinTx.sol";
import {TestLightRelay} from "../../src/relay/TestLightRelay.sol";
import "../../src/swap/Ord_Marketplace.sol";

contract ArbitaryErc20 is ERC20, Ownable {
    constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {}

    function sudoMint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract OrdMarketPlaceTest is OrdMarketplace, Test {
    Utilities internal utils;
    address payable[] internal users;
    address internal alice;
    address internal bob;

    ArbitaryErc20 token1;
    TestLightRelay testLightRelay;

    constructor() OrdMarketplace(testLightRelay) {}

    function setUp() public {
        utils = new Utilities();
        users = utils.createUsers(5);

        alice = users[0];
        vm.label(alice, "Alice");
        bob = users[1];
        vm.label(bob, "Bob");

        token1 = new ArbitaryErc20("Some token", "TKN");

        testLightRelay = new TestLightRelay();
        super.setRelay(testLightRelay);
        testLightRelay.setDifficultyFromHeaders(dummyProof().bitcoinHeaders);
    }

    function dummyTransaction() public view returns (BitcoinTx.Info memory) {
        return BitcoinTx.Info({
            version: hex"01000000",
            inputVector: hex"01996cf4e2f0016a1f092aaaba653c7eae5dd4b6eef1f9a2a94c64f34b2fecbd85010000006a47304402206f99da49ce586528ed8981842df30b4a5a91195fd2d83e440d4193fc16a944ec022055cfdf63a2c90638821f1b5ff1fdf77526163ae057a0d0de30a6e1d3009e7a29012102811832eef7216470f489991f1d87e36d2890755d2bbf827eb1e71804491506afffffffff",
            outputVector: hex"0200e9a435000000001976a914fd7e6999cd7e7114383e014b7e612a88ab6be68f88ac804a5d05000000001976a9145c1addbd0e4e78479e71fdca0555d2d44b67378e88ac",
            locktime: hex"00000000"
        });
    }

    function dummyProof() public view returns (BitcoinTx.Proof memory) {
        return BitcoinTx.Proof({
            merkleProof: hex"0465f99dbe384bbc5d86a5242712e4154958e4b01f595f14b76f873ec349e14a16b17770af2bb48c9b2ce4dddf4631866fe3753e6c54bdcf18dfb2d4fb9983ee58e4f3be92087c843b815bbe1d5d686dc972552f7ffda4342319ceb5bea67ab0f2e463ec8ce8e3f580c5e2470ef20c5b33398ab9fea5ccbd0b3e3f6211305edafa068a28c8ac634df5bbc8064357295373b97db2600745f23ad6ebc87b66b4a8685aa8ff8e69abc5029dbf4b2fa03f05680c7a2c491410b23a5a6b27c5a91b89dac8cdd16a4460ce8ac8d17491025d29336440a133867f938a7f41cc7a64f3f04ac3817c3eb6a6a11dc30850ca4e80f9abbd42268bcc626138bc01639a902713425e7d3aca45647001fb32ff396c07027c5b081325530e74f936e6c4a8078a05f9717efd315534a84d047ee2ff0b2b93159a2b98eabb578af67ef7540a58e488b9c587a994c1a9a86937ad343ea734b7427678e3e6ba0be8f5045ce47e541bbc",
            txIndexInBlock: 1,
            bitcoinHeaders: abi.encodePacked(
                hex"04000000e0879a33a87bf9481385adae91fa9e93713b932cbe8a09030000000000000000ee5ded948d805bb71bee5de25b447c42527898cac93eee1afe04663bb8204b358627fe56f4960618304a7db1",
                hex"04000000c0de92e7326cb020b59ffc5998405e539863c57da088a7040000000000000000d8e7273d0198ba4f10dfd57d151327c32113fc244fd0587d161a5c5332a53651ed28fe56f4960618b24502cc"
                )
        });
    }

    function dummyTransactionForOrd() public view returns (BitcoinTx.Info memory) {
        return BitcoinTx.Info({
            version: hex"01000000",
            inputVector: hex"011746bd867400f3494b8f44c24b83e1aa58c4f0ff25b4a61cffeffd4bc0f9ba300000000000ffffffff",
            outputVector: hex"1746bd867400f3494b8f44c24b83e1aa58c4f0ff25b4a61cffeffd4bc0f9ba300000000000ffffffff",
            locktime: hex"00000000"
        });
    }

    function dummyProofForOrd() public view returns (BitcoinTx.Proof memory) {
        return BitcoinTx.Proof({
            merkleProof: hex"0465f99dbe384bbc5d86a5242712e4154958e4b01f595f14b76f873ec349e14a16b17770af2bb48c9b2ce4dddf4631866fe3753e6c54bdcf18dfb2d4fb9983ee58e4f3be92087c843b815bbe1d5d686dc972552f7ffda4342319ceb5bea67ab0f2e463ec8ce8e3f580c5e2470ef20c5b33398ab9fea5ccbd0b3e3f6211305edafa068a28c8ac634df5bbc8064357295373b97db2600745f23ad6ebc87b66b4a8685aa8ff8e69abc5029dbf4b2fa03f05680c7a2c491410b23a5a6b27c5a91b89dac8cdd16a4460ce8ac8d17491025d29336440a133867f938a7f41cc7a64f3f04ac3817c3eb6a6a11dc30850ca4e80f9abbd42268bcc626138bc01639a902713425e7d3aca45647001fb32ff396c07027c5b081325530e74f936e6c4a8078a05f9717efd315534a84d047ee2ff0b2b93159a2b98eabb578af67ef7540a58e488b9c587a994c1a9a86937ad343ea734b7427678e3e6ba0be8f5045ce47e541bbc",
            txIndexInBlock: 1,
            bitcoinHeaders: abi.encodePacked(
                hex"04000000e0879a33a87bf9481385adae91fa9e93713b932cbe8a09030000000000000000ee5ded948d805bb71bee5de25b447c42527898cac93eee1afe04663bb8204b358627fe56f4960618304a7db1",
                hex"04000000c0de92e7326cb020b59ffc5998405e539863c57da088a7040000000000000000d8e7273d0198ba4f10dfd57d151327c32113fc244fd0587d161a5c5332a53651ed28fe56f4960618b24502cc"
                )
        });
    }

    function dummyBitcoinAddress() public returns (BitcoinAddress memory) {
        return BitcoinAddress({scriptPubKey: hex"76a914fd7e6999cd7e7114383e014b7e612a88ab6be68f88ac"});
    }

    function test_placeOrdinalSellOrder() public {
        token1.sudoMint(bob, 101);

        OrdinalId memory ord;
        ord.ordinalID =
            hex"00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff";
        BitcoinTx.UTXO memory utxo;

        // placeOrdinalSellOrder by alice
        vm.startPrank(alice);
        vm.expectEmit();
        emit placeOrdinalSellOrderEvent(0, ord, address(token1), 100);
        this.placeOrdinalSellOrder(ord, utxo, address(token1), 100);

        // acceptOrdinalSellOrder by bob
        vm.startPrank(bob);
        token1.approve(address(this), 100);

        vm.expectEmit();
        emit acceptOrdinalSellOrderEvent(0, 1, dummyBitcoinAddress(), address(token1), 100);
        uint256 acceptId = this.acceptOrdinalSellOrder(0, dummyBitcoinAddress());
        assertEq(acceptId, 1);

        // proofOrdinalSellOrder
        vm.startPrank(alice);
        vm.expectEmit();
        emit proofOrdinalSellOrderEvent(1);
        this.proofOrdinalSellOrder(1, dummyTransaction(), dummyProof());
        vm.stopPrank();
    }

    function test_placeOrdinalSellOrderForParticularUTXO() public {
        token1.sudoMint(bob, 101);
        OrdinalId memory ord;
        ord.ordinalID =
            hex"00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff";
        BitcoinTx.UTXO memory utxo;
        utxo.txHash = hex"1746bd867400f3494b8f44c24b83e1aa58c4f0ff25b4a61cffeffd4bc0f9ba30";
        utxo.txOutputIndex = 0;
        utxo.txOutputValue = 0;

        // placeOrdinalSellOrder by alice
        vm.startPrank(alice);
        vm.expectEmit();
        emit placeOrdinalSellOrderEvent(0, ord, address(token1), 100);
        this.placeOrdinalSellOrder(ord, utxo, address(token1), 100);

        // acceptOrdinalSellOrder by bob
        vm.startPrank(bob);
        token1.approve(address(this), 100);

        vm.expectEmit();
        emit acceptOrdinalSellOrderEvent(0, 1, dummyBitcoinAddress(), address(token1), 100);
        uint256 acceptId = this.acceptOrdinalSellOrder(0, dummyBitcoinAddress());
        assertEq(acceptId, 1);

        // proofOrdinalSellOrder
        vm.startPrank(alice);
        //        vm.expectEmit();
        //        emit proofOrdinalSellOrderEvent(1);
        // ToDo: _checkBitcoinTxOutput failing dummy Proof needs to be updated
        this.proofOrdinalSellOrder(1, dummyTransactionForOrd(), dummyProofForOrd());
        vm.stopPrank();
    }
}
