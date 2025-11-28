// components/sample.tsx
"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useGuessContract } from "@/hooks/useContract"

const SampleIntregation = () => {
    const { isConnected, address } = useAccount()
    const [guess, setGuess] = useState("")

    const { data, actions, state } = useGuessContract()

    const handleGuess = async () => {
        if (!guess) return
        try {
            await actions.guessNumber(Number(guess))
            setGuess("")
        } catch (err) {
            console.error(err)
        }
    }

    if (!isConnected) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <div className="max-w-md w-full">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                        Guess Number Contract
                    </h2>
                    <p className="text-muted-foreground">
                        Please connect your wallet to interact with the contract.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-xl mx-auto space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Guess Number Game
                    </h1>
                    <p className="text-muted-foreground text-sm mt-1">
                        Try your luck and guess the secret number!
                    </p>
                </div>

                {/* Winner Display */}
                <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">
                        Current Winner
                    </p>
                    <p className="text-lg font-semibold text-foreground break-all">
                        {data.winner}
                    </p>
                </div>

                {/* Guess Input */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        Enter Your Guess (Number)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter a number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground"
                    />
                </div>

                {/* Guess Button */}
                <button
                    onClick={handleGuess}
                    disabled={state.isLoading || state.isPending || !guess}
                    className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition"
                >
                    {state.isLoading ? "Submitting Guess..." : "Submit Guess"}
                </button>

                {/* TX Status */}
                {state.hash && (
                    <div className="mt-6 p-4 bg-card border border-border rounded-lg">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                            Transaction Hash
                        </p>
                        <p className="text-sm font-mono text-foreground break-all mb-3">
                            {state.hash}
                        </p>
                        {state.isConfirming && (
                            <p className="text-sm text-primary">Waiting for confirmation...</p>
                        )}
                        {state.isConfirmed && (
                            <p className="text-sm text-green-500">
                                Transaction confirmed!
                            </p>
                        )}
                    </div>
                )}

                {/* Error */}
                {state.error && (
                    <div className="mt-6 p-4 bg-card border border-destructive rounded-lg">
                        <p className="text-sm text-destructive-foreground">
                            Error: {state.error.message}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SampleIntregation
