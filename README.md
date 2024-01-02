﻿# dapp-crowdfund-campaigns

## 1. CampaignIndex Component

**Overview:**
- The `CampaignIndex` component is the initial screen of the application, displaying a list of deployed campaigns.
- It fetches the details of each campaign, including the campaign name and manager name.

**Features:**
1. Displays a list of campaigns with their names, manager names, and a link to view each project.
2. Provides a button to create a new project.

---

## 2. CampaignShow Component

**Overview:**
- The `CampaignShow` component displays detailed information about a specific campaign, including its summary and a contribution form.

**Features:**
1. Displays key information about the campaign, such as manager name, minimum contribution, balance, etc.
2. Allows users to contribute to the campaign using the `ContributeForm` component.
3. Provides a button to view the spending requests associated with the campaign.

---

## 3. CampaignNew Component

**Overview:**
- The `CampaignNew` component allows users to create a new campaign by providing details such as the project name, manager name, and minimum contribution.

**Features:**
1. Form for users to input project details.
2. Handles the creation of a new campaign through the factory contract.

---

## 4. RequestIndex Component

**Overview:**
- The `RequestIndex` component displays a list of spending requests associated with a specific campaign.

**Features:**
1. Lists all spending requests with details like ID, description, value, recipient, approvals, etc.
2. Provides a button to add a new spending request.

---

## 5. RequestNew Component

**Overview:**
- The `RequestNew` component allows users to create a new spending request for a specific campaign.

**Features:**
1. Form for users to input spending request details.
2. Handles the creation of a new spending request through the `campaign` contract.

---

## 6. ContributeForm Component

**Overview:**
- The `ContributeForm` component provides a form for users to contribute to a specific campaign.

**Features:**
1. Form for users to input the amount they want to contribute.
2. Handles the contribution through the `campaign` contract.

---

## 7. RequestRow Component

**Overview:**
- The `RequestRow` component represents a row in the table displaying spending requests in the `RequestIndex` component.

**Features:**
1. Displays details of a spending request, including ID, description, value, recipient, approvals, etc.
2. Provides buttons to approve and finalize spending requests.

---

## Campaign Smart Contract Documentation

## Overview

The Campaign Smart Contract is designed to facilitate crowdfunding campaigns on the Ethereum blockchain. It consists of two contracts: `CampaignFactory` for creating new campaigns, and `Campaign` for managing individual campaigns. This documentation provides a comprehensive overview of the contracts, their functionalities, and usage.

## CampaignFactory Contract

### 1. `deployedCampaigns` State Variable

- **Type:** `address payable[] public`
- **Description:** An array to store the addresses of all deployed campaigns.

### 2. `createCampaign` Function

- **Parameters:**
  - `uint minimum`: Minimum contribution required to participate in the campaign.
  - `string memory name`: Name of the campaign.
  - `string memory managerName`: Name of the campaign manager.
- **Description:** Creates a new campaign with specified parameters and adds its address to `deployedCampaigns`.

### 3. `getDeployedCampaigns` Function

- **Returns:**
  - `address payable[] memory`: Array of addresses of all deployed campaigns.
- **Description:** Retrieves the array of deployed campaign addresses.

## Campaign Contract

### 1. `Request` Struct

- **Fields:**
  - `string description`: Description of the spending request.
  - `uint value`: Amount of Ether to be sent for the request.
  - `address recipient`: Address to receive the Ether.
  - `bool complete`: Indicates whether the request has been processed.
  - `uint approvalCount`: Number of approvals received.
  - `mapping(address => bool) approvals`: Mapping of approvers and their approval status.

### 2. `requests` State Variable

- **Type:** `Request[] public`
- **Description:** An array to store spending requests for the campaign.

### 3. `manager` State Variable

- **Type:** `address public`
- **Description:** Address of the campaign manager.

### 4. `managerName` State Variable

- **Type:** `string public`
- **Description:** Name of the campaign manager.

### 5. `minimumContribution` State Variable

- **Type:** `uint public`
- **Description:** Minimum contribution required to become an approver.

### 6. `campaignName` State Variable

- **Type:** `string public`
- **Description:** Name of the campaign.

### 7. `approvers` State Variable

- **Type:** `mapping(address => bool) public`
- **Description:** Mapping of addresses that have contributed to the campaign.

### 8. `approversCount` State Variable

- **Type:** `uint public`
- **Description:** Number of contributors to the campaign.

### 9. `restricted` Modifier

- **Description:** Ensures that the caller of a function is the campaign manager.

### 10. `contribute` Function

- **Description:** Allows users to contribute Ether to the campaign, becoming an approver.

### 11. `createRequest` Function

- **Parameters:**
  - `string memory description`: Description of the spending request.
  - `uint value`: Amount of Ether to be sent for the request.
  - `address recipient`: Address to receive the Ether.
- **Description:** Creates a spending request for the campaign.

### 12. `approveRequest` Function

- **Parameters:**
  - `uint index`: Index of the spending request to be approved.
- **Description:** Allows approvers to vote in favor of a spending request.

### 13. `finalizeRequest` Function

- **Parameters:**
  - `uint index`: Index of the spending request to be finalized.
- **Description:** Executes the spending request if approved by the majority of approvers.

### 14. `getSummary` Function

- **Returns:**
  - `uint`: Minimum contribution.
  - `uint`: Current balance of the campaign.
  - `uint`: Number of spending requests.
  - `uint`: Number of campaign approvers.
  - `address`: Address of the campaign manager.
  - `string memory`: Name of the campaign.
  - `string memory`: Name of the campaign manager.
- **Description:** Retrieves key details about the campaign.

### 15. `getRequestsCount` Function

- **Returns:**
  - `uint`: Number of spending requests.
- **Description:** Retrieves the total number of spending requests in the campaign.

## Conclusion

This documentation provides a comprehensive guide to the Campaign Smart Contract and its functionalities. Developers can use this information to understand and integrate the contract into their decentralized applications (DApps). If further clarification or assistance is required, please feel free to contact the contract developer.
