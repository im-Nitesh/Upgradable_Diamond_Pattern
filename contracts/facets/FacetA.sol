// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library LibA {
    struct DiamondStorage {
        address owner;
        bytes4 dataA;
        uint8 age;
        string name;
    }

    function diamondStorage()
        internal
        pure
        returns (DiamondStorage storage ds)
    {
        bytes32 storagePosition = keccak256("diamond.storage.LibA");
        assembly {
            ds.slot := storagePosition
        }
    }
}

contract FacetA {
    function setDataA(bytes4 _dataA) external {
        LibA.DiamondStorage storage ds = LibA.diamondStorage();
        ds.dataA = _dataA;
    }

    function getDataA() external view returns (bytes4) {
        return LibA.diamondStorage().dataA;
    }
    function setAge(uint8 _age) external {
        LibA.DiamondStorage storage ds = LibA.diamondStorage();
        ds.age = _age;
    }
    function getAge() external view returns (uint8) {
        return LibA.diamondStorage().age;
    }
    function setName(string memory _name) external {
        LibA.DiamondStorage storage ds = LibA.diamondStorage();
        ds.name = _name;
    }
    function getName() external view returns (string memory) {
        return LibA.diamondStorage().name;
    }
}
