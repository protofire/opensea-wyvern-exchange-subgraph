# OpenSea: Wyvern Exchange
_Made by Protoire.io under MIT License_

"The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items."
 > https://opensea.io/

This subgraph custom approach based on the orders book and assets management trough an time series entities model and it's complemented w/ a layer of metadata such as block and transaction information. 

The main functionality of this subgraph is to index the openSea sales (matched order) the nft tokens, their owners, the erc20 tokens used to pay for them an the nft and erc20 transactions associated.

Future updates:
- Open listings 

Thys subgraph rely's on this contract:
- OpenSea WyvernExchange: 0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b

TODO: relationship diagrams

## Relationship diagram
Simple lookup table for relationship between entities.

### Reference:

| **Name**       | **Indicator** 
|------------------|-------------
| Account          | x           
| Derived	       |     D
| Many To One      |     OTM
| One To One   	   |     OTO
| Not related      |     -

### Table:

| **entity**       | **Account** | **Balance** | **Erc20Token** | **Erc20Transaction** | **Nft** | **NftContract** | **NftTransaction** | **Sale** | **Order** | **MinuteVolume** | **HourVolume** | **DayVolume** | **WeekVolume** | **Minute** | **Hour** | **Day** | **Week** | **Block** | **Transaction** |
|------------------|-------------|-------------|----------------|----------------------|---------|-----------------|--------------------|----------|-----------|------------------|----------------|---------------|----------------|------------|----------|---------|----------|-----------|-----------------|
| Account          | x           | D           | -              | D                    | D       | -               | D                  | -        | D         | -                | -              | -             | -              | -          | -        | -       | -        | -         | -               |
| Balance          | MTO         | x           | MTO            | D                    | -       | -               | -                  | -        | -         | -                | -              | -             | -              | -          | -        | -       | -        | -         | -               |
| Erc20Token       | -           | D           | x              | D                    | -       | -               | -                  | D        | D         | D                | D              | D             | D              | -          | -        | -       | -        | -         | -               |
| Erc20Transaction | MTO         | MTO         | MTO            | x                    | -       | -               | -                  | OTO      | -         | MTO              | MTO            | MTO           | MTO            | MTO        | MTO      | MTO     | MTO      | MTO       | MTO             |
| Nft              | MTO         | -           | -              | -                    | x       | MTO             | D                  | -        | -         | -                | -              | -             | -              | -          | -        | -       | -        | -         | -               |
| NftContract      | -           | -           | -              | -                    | D       | x               | -                  | -        | -         | D                | D              | D             | D              | -          | -        | -       | -        | -         | -               |
| NftTransaction   | MTO         | -           | -              | -                    | MTO     | MTO             | x                  | MTO      | -         | MTO              | MTO            | MTO           | MTO            | MTO        | MTO      | MTO     | MTO      | MTO       | MTO             |
| Sale             | -           | -           | MTO            | D                    | -       | -               | D                  | x        | D         | -                | -              | -             | -              | MTO        | MTO      | MTO     | MTO      | MTO       | MTO             |
| Order            | MTO         | -           | MTO            | -                    | -       | MTO             | -                  | MTO      | x         | -                | -              | -             | -              | MTO        | MTO      | MTO     | MTO      | MTO       | MTO             |
| MinuteVolume     | -           | -           | MTO            | D                    | -       | MTO             | D                  | -        | -         | x                | -              | -             | -              | MTO        | -        | -       | -        | -         | -               |
| HourVolume       | -           | -           | MTO            | D                    | -       | MTO             | D                  | -        | -         | -                | x              | -             | -              | -          | MTO      | -       | -        | -         | -               |
| DayVolume        | -           | -           | MTO            | D                    | -       | MTO             | D                  | -        | -         | -                | -              | x             | -              | -          | -        | MTO     | -        | -         | -               |
| WeekVolume       | -           | -           | MTO            | D                    | -       | MTO             | D                  | -        | -         | -                | -              | -             | x              | -          | -        | -       | MTO      | -         | -               |
| Minute           | -           | -           | -              | D                    | -       | -               | D                  | D        | D         | D                | -              | -             | -              | x          | -        | -       | -        |           |                 |
| Hour             | -           | -           | -              | D                    | -       | -               | D                  | D        | D         | -                | D              | -             | -              | -          | x        | -       | -        |           |                 |
| Day              | -           | -           | -              | D                    | -       | -               | D                  | D        | D         | -                | -              | D             | -              | -          | -        | x       | -        |           |                 |
| Week             | -           | -           | -              | D                    | -       | -               | D                  | D        | D         | -                | -              | -             | D              | -          | -        | -       | x        |           |                 |
| Block            | -           | -           | -              | D                    | -       | -               | D                  | D        | D         | -                | -              | -             | -              |            |          |         |          | x         | D               |
| Transaction      | -           | -           | -              | D                    | -       | -               | D                  | D        | D         | -                | -              | -             | -              |            |          |         |          | MTO       | x               |


# Entities description

## Account

This entity store information about EVM's wallets (EOA or smart contract), the ones that will trade and hold the assets.
Is an entity that only stores the wallet's public address.

### Derived relationships

#### Orders:

- makerOrders: orders were this account added liquidity to the market

- takerOrders: orders where this account extracted liquidity from the market

#### Erc20Tokens:

- balances: a many to many relationship betwen a Erc20Token and some account with some amount of tokens

#### Erc20Transactions:

- outgoingErc20Transaction: er20 tokens deposited into the market in maker Orders 

- incomingErc20Transaction: er20 tokens retired from the market in taker Orders 

#### Nfts

- nfts: nft tokens owned by this account

#### NftTransactions:

- incomingNftTransactions: Nft's sent to this account (adquisition)
- outgoingNftTransactions: Nft's sent form this account (transfer)

### Example:

```graphql
	# TODO
{
  accounts{
    address
  }
}
```

___

## Balance

This entity stores an amount of tokens and represents a Many to Many relationship betwen Accounts and Erc20Tokens since each Account can hold many tokens and each Erc20Token can be held by many accounts.

### Stored relationships:

#### Account: 

- account: The Account that holds some amount of some token

#### Erc20Token: 

- token: The Erc20Token that is being held by the Account

### Derived relationships:

#### Erc20Transactions:

- increasingTransactions: erc20Transactions that increased the amount of tokens for this balance

- decreasingTransactions: erc20Transactions that decreased  the amount of tokens for this balance

### Example:

```graphql
	# TODO
{
  balances{
    amount
  }
}
```

___

## Interface: SmartContract

This interface provides a common place for defining both erc20 contracts and nftContracts. It only contains information aboutocntract's address and provides relationships with other entities

### Stored relationships:

- No relationships are stored in entities with this interface

### Derived relationships:

- Orders: the orders where this contract was traded (as a payment token or as an nft)

- Volumes: All of the volume-kind entities where this contract was traded


### Example:

```graphql
	# TODO
{
	smartContracts {
		address
		... on Erc20Token{
			balances {
				amount
			}
		}
		... on NftContract{
			id
			owner {
				address
			}
		}
	}
}
```
___
## Erc20Token

OpenSea allows the users to pay in a wide diversity of erc20 tokens and the Token entitiy represent them and it's relations with entities such as: volumes, orders & erc20Tranasctions. Those entities are related to time series and accounts entities.


### Stored relationships:

- No relationships are stored this kind of entity

### Derived relationships:

#### Accounts:

- balances: a many to many relationship betwen a Erc20Token and some account with some amount of tokens

### SmartContractTransacitons:

- tokenTransactions: Transactions that transfered tokens from this contract between Accounts

### Sales

- Sales: Sales where this token was used as a payment token

### Orders

- orders: Orders where this contract's address is stored as payment Token

### Volumes

- MinuteVolume, HourVolume, DayVolume, WeekVolume: Volume entities representing the total value and transactions for a given timeframe
### Example:

```graphql
	# TODO
{
  Erc20Token{
		balances {
			amount
		}
		
	}
}
```
___

## NftContract

A given nft contract containning NFTs, provides a relationship between accounts trough the "Asset owner entity" and orders opened under this "target".


### Stored relationships:

- No relationships are stored this kind of entity

### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___
## Interface SmartContractTransaction

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___

## Erc20Transaction

Any time an erc20 is traded an Erc20Transaction entity will be created. This entitiy has many relationships suchs as volume entities, time series, orders, accounts, blocks and transactions(evm).
Allowing this subgraph to be source for many kinds of data visualizations.

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___

## NftTransaction

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___

## Nft

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___

## Sale

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___


## Order

	- OrderApprovedPartOne(indexed bytes32,address,indexed address,address,uint256,uint256,uint256,uint256,indexed address,uint8,uint8,uint8,address)

	- OrderApprovedPartTwo(indexed bytes32,uint8,bytes,bytes,address,bytes,address,uint256,uint256,uint256,uint256,uint256,bool)

	- OrderCancelled(indexed bytes32)

	- OrdersMatched(bytes32,bytes32,indexed address,indexed address,uint256,indexed bytes32)

This entity hold data about open and matched orders. Represents the whole order data as stored in the WyvernExchange contract.

The contract yields the data on two events to achieve this: OrderApprovedPartOne and OrderApprovedPartTwo. 

multi-event yield condition requires to add the following enum to the order schema:

	enum ContractOrderYieldStatus {
		# entity created w/ no data
		NONE 

		# entity after OrderApprovedPartOne
		PART_ONE 

		# entity after OrderApprovedPartTwo
		PART_TWO
	}

This Order entity is the starting point for building the whole subgraph

# Interface Time-series

Each Order is yield in the context of a transaction inside an specific block. Each block contains an unix timestamp which can be divided to obtain the Minute, Hour, Day and Week epoch. Those entities are based on the time unit entity 

	interface TimeUnit {
		"internal id used for indexation"
		id: ID!

		"timestamp division of the starting point"
		epoch: BigInt!

		"orders filled at this time candle"
		orders: [Order!]!

		"blocks signed at this thime candle"
		blocks: [Block!]

		"transactions created at this thime candle"
		transactions: [Transaction!]!

		"related volume entity"
		volume: Volume!
	}

This allows the subgraph to index the information metadata based (block or transaction) or time based relating Vollumen, Blocks, Transactions and orders with an specific date.

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___

## Interface Volume 



Every asset exchange calculates the volume known as the amount of something traded at some point in time. For this subgraph "Volume" is the interface where volumes are stored and matched with an specific time unit such as “minuteVolume”.

This entity creates relationships between entities suchs as: erc20Transactions, tokens, assets, orders. Giving values for payments and assets volume.

	type MinuteVolume implements Volume @entity {
		"internal id used for indexation"
		id: ID! # Set to `minute-${asset.id}-${token-id}-${epoch}`

		"traded asset"
		asset: Asset!

		"amount of traded orders for this asset in a given time frame"
		ordersAmount: BigInt!

		"derived list of orders traded for this asset in a given time frame"
		orders: [Order!]! @derivedFrom(field: "minuteVolume")

		"erc20 token used to pay for this asset"
		token: Token!

		"derived list of Erc20Transactions for this token in a given time frame"
		erc20Transactions: [Erc20Transaction!]! @derivedFrom(field: "minuteVolume")

		"amount of tokens traded for this assets in a given time frame"
		tokenAmount: BigInt!

		"related time serie entitiy, ej dailyVolume for x day is related to x dayCandle"
		timeUnit: TimeUnit!
	}

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___

## Interface Metadata

### Stored relationships:


### Derived relationships:

### Example:

```graphql
	# TODO
{
  
}
```
___

### Transaction

Transactions excetuted in the Ethereum virtual machine. These transacctions are meant to be included in blocks. Relates to time series entities, orders and blocks. Also contains information like hash, gas price, eth.

### Block

Each piece of the blockchains, contins a number and a timestamp and is related to orders, transactions and time series entities.

# Example queries

## Orders

```graphql
	# Returns a list of succesfully catched by the subgraph sorted by listingTime
{
	orders(
		first: 15
		where: {
			yieldStatus: PART_TWO
		}
		orderDirection: desc
		orderBy: listingTime, 
	) {
		id
		callData
		target { 
			address
		}
	}
}
```
## Time Series

```graphql
	# For minutes returns a list of block's numbers
	# For days returns a list of order's Volume
{
   timeUnits{
	   ...on Minute {
		   block: {
			   number
		   }
	   }
	   ...on Day {
			volume: {
		   		ordersAmount
	   		}
	   }
   }
}
```

## Volume

```graphql
	# Minute volume for ether
{
   timeUnits{
	   #token
	   ...on MinuteVolume (
		   where: {
			   token: {
				   address: "0x000..."
			   }
		   }
	   ) {
		   tokenAmount
	   	}
	   }
   }
}
```