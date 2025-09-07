

---

# Notes Smart Contract
![WhatsApp Image 2025-09-07 at 18 31 59_d3e5a9c0](https://github.com/user-attachments/assets/7fe9bb0b-3241-4866-b119-d31cd7489095)
https://lora.algokit.io/testnet/application/745509332
A simple Algorand smart contract built using **Algorand TypeScript SDK**. This project demonstrates how to create and manage a basic **to-do list** on-chain, where notes can be stored and retrieved in a decentralized manner.

---

## 📌 Project Description

This project serves as a **beginner-friendly example** of writing Algorand smart contracts in TypeScript. It provides a straightforward way to store notes (title + description) in Algorand’s **Global State**, making it a great starting point for anyone learning **Algorand + smart contract development**.

---

## 🚀 What it does

* Stores notes on Algorand blockchain.
* Each note is added with a `title` and a `description`.
* Data is persisted on-chain using the **GlobalState**.
* Easy to extend for building decentralized apps (dApps).

---

## ✨ Features

* 📄 **Add Notes** → Save a note with title and description.
* 🔒 **Immutable Storage** → Stored securely on-chain.
* 🛠️ **Beginner Friendly** → Clean, simple contract structure.
* ⚡ **TypeScript SDK** → Easy to write and maintain.

---

## 🌍 Deployed Smart Contract

🔗 [View Contract on AlgoExplorer](XXX)
*(Replace `XXX` with your deployed smart contract link)*

---

## 🧩 Code

```typescript
import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'

export class Notes extends Contract {
 todolist = GlobalState<string>({
    key: "Notelist",
    initialValue : " "
 })

 Addtodo(title:string, description:string):string {
    this.todolist.value = title + "" +  description;
    return title;
 }
}
```

---

## 🛠️ Getting Started

### Prerequisites

* Node.js & npm installed
* Algorand TypeScript SDK installed

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/notes-smart-contract.git

# Navigate into project
cd notes-smart-contract

# Install dependencies
npm install
```

### Deploy

* Write deployment script using Algorand SDK.
* Update deployed contract link in README.

---

## 📚 Resources

* [Algorand Foundation Docs](https://developer.algorand.org/)
* [Algorand TypeScript SDK](https://github.com/algorandfoundation/algorand-typescript)

---

