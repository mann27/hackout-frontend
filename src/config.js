export const BStore_ADDRESS = "0x99d9845028653A5343905E0490F3e6c0908B7A92";

export const BStore_ABI = [
    {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "ownedbooks",
        "outputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "publisher",
            "type": "address"
          },
          {
            "name": "price",
            "type": "uint256"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "cover",
            "type": "string"
          },
          {
            "name": "avg_rating",
            "type": "uint256"
          },
          {
            "name": "total_reviews",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "user",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "books",
        "outputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "publisher",
            "type": "address"
          },
          {
            "name": "price",
            "type": "uint256"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "cover",
            "type": "string"
          },
          {
            "name": "avg_rating",
            "type": "uint256"
          },
          {
            "name": "total_reviews",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "bookCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "noOfBooks",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_publisher",
            "type": "address"
          },
          {
            "name": "_price",
            "type": "uint256"
          },
          {
            "name": "_title",
            "type": "string"
          },
          {
            "name": "_cover",
            "type": "string"
          }
        ],
        "name": "createBook",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "addBook",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_comment",
            "type": "string"
          },
          {
            "name": "_rate",
            "type": "uint256"
          }
        ],
        "name": "giveReview",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
];
