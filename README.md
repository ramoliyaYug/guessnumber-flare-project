# README.md

# 🔢 Guess Number dApp — Flare Coston2

## **Contract Address**
**0xeA3630a0F78A5050C91b62e4a6a9fD8A86b9222e**  
Explorer: https://coston2-explorer.flare.network/address/0xeA3630a0F78A5050C91b62e4a6a9fD8A86b9222e

---

## **📌 Project Overview**

This project is a decentralized "Guess the Number" game deployed on the **Flare Coston2 Testnet**.  
Users can interact with the smart contract through a clean, wallet-gated UI, submit guesses, and view the current winner directly on-chain.

The dApp is built using **Next.js**, **Wagmi + Viem**, and **TailwindCSS**, providing a smooth and modern Web3 UX.

---

## **✨ Features**

### **Smart Contract Interaction**
- Submit a guess using the `guess(uint256)` function
- Read the current winner via the `winner()` public variable
- Displays transaction hash, confirmation state, and error messages

### **Frontend Functionality**
- Wallet connection using Wagmi hooks
- Clean, user-friendly UI built with TailwindCSS
- Real-time contract state updates after transactions
- Form validation and loading indicators

### **Developer-Friendly Code**
- Modular `lib/contract.ts` with ABI + address
- Dedicated `useGuessContract()` hook for all contract interactions
- Example integration UI (`sample.tsx`) showing best practices

---

## **💡 How It Solves the Problem**

Blockchain games often suffer from poor UI, difficult wallet interaction patterns, or confusing state updates.  
This project solves those issues by providing:

### **1. Clear Wallet-Gated Flow**
Users can interact only after connecting their wallet, preventing common errors.

### **2. Clean Abstraction of Contract Logic**
The `useGuessContract` hook:
- Wraps read/write contract functions
- Handles loading, pending, and confirmation states
- Automatically refetches the winner on each confirmed guess

### **3. Simple and Transparent Guessing Mechanism**
Users:
1. Enter a number
2. Submit a guess
3. Wait for blockchain confirmation
4. See if they become the new winner

### **4. Instant Feedback UX**
The UI provides:
- Transaction hash
- Pending + confirmed states
- Error messages
- Winner display

This ensures users always understand what is happening on-chain.

---

## **🏁 Summary**

This project demonstrates a complete, production-ready flow for interacting with a Web3 smart contract using modern frontend tooling.  
It provides developers and users with a clean, intuitive example of how to build decentralized applications with real blockchain interactions.

Feel free to extend it, integrate it into your own project, or use it as a template for future Web3 dApps.
