// hooks/useContract.ts
"use client"

import { useState, useEffect } from "react"
import {
    useAccount,
    useReadContract,
    useWriteContract,
    useWaitForTransactionReceipt,
} from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ContractData {
    winner: string
}

export interface ContractState {
    isLoading: boolean
    isPending: boolean
    isConfirming: boolean
    isConfirmed: boolean
    hash: `0x${string}` | undefined
    error: Error | null
}

export interface ContractActions {
    guessNumber: (num: number) => Promise<void>
}

export const useGuessContract = () => {
    const { address } = useAccount()
    const [isLoading, setIsLoading] = useState(false)

    const { data: winner, refetch: refetchWinner } = useReadContract({
        address: contractAddress,
        abi: contractABI,
        functionName: "winner",
    })

    const {
        writeContractAsync,
        data: hash,
        error,
        isPending,
    } = useWriteContract()

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    useEffect(() => {
        if (isConfirmed) {
            refetchWinner()
        }
    }, [isConfirmed, refetchWinner])

    const guessNumber = async (num: number) => {
        if (!address) return
        try {
            setIsLoading(true)
            await writeContractAsync({
                address: contractAddress,
                abi: contractABI,
                functionName: "guess",
                args: [BigInt(num)],
            })
        } catch (err) {
            console.error("Guess error:", err)
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    const data: ContractData = {
        winner: winner ? (winner as string) : "0x0000",
    }

    const actions: ContractActions = {
        guessNumber,
    }

    const state: ContractState = {
        isLoading: isLoading || isPending || isConfirming,
        isPending,
        isConfirming,
        isConfirmed,
        hash,
        error,
    }

    return { data, actions, state }
}
