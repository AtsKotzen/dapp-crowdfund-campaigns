import web3 from './web3';
//import CampaignFactory from './build/CampaignFactory.json';

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "minimum",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "createCampaign",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "deployedCampaigns",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeployedCampaigns",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];



const instance = new web3.eth.Contract(
  abi,
  '0x862973b872CAc286e555D3e59f21DCb21702aC30'
);

export default instance;
