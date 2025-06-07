"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { PitchDeck } from "@/components/pitch-deck"
import { InvestmentDeck } from "@/components/investment-deck"
import { StrategyDeck } from "@/components/strategy-deck"
import { motion } from "framer-motion"
import { Lock, Eye, EyeOff } from "lucide-react"

// Supabase Email/Password Auth Component
import { supabase } from "@/lib/supabaseClient"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

function AuthScreen({ onUnlock }: { onUnlock: () => void }) {
  const router = useRouter && typeof useRouter === 'function' ? useRouter() : undefined;
  // IMPORTANT: Replace with the email of the user you created in Supabase for the global password.
  const FIXED_EMAIL = "keshavarora.bt22cse@pec.edu.in";
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);
  



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setDebugInfo("Attempting to sign in...");
    try {
      // Sign in with fixed email and entered password
      const { error } = await supabase.auth.signInWithPassword({ email: FIXED_EMAIL, password });
      if (error) throw error;
      setDebugInfo("Sign in successful, unlocking...");
      onUnlock();
    } catch (error: any) {
      setDebugInfo(`Sign in error: ${error.message}`);
      setError(error.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Enter Password</CardTitle>
            <CardDescription className="text-center">
              Enter the password to access the decks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {debugInfo && (
              <Alert className="mb-4 bg-blue-50 border-blue-200">
                <AlertDescription className="text-blue-800">Debug: {debugInfo}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pr-10"
                    disabled={loading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" disabled={loading} />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={loading}
                onClick={() => setDebugInfo("Attempting to sign in...")}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-500 space-y-1 text-center mt-2">
              <p>🔒 This presentation contains confidential information</p>
              <p>Authorized access only</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function Page() {
  const [currentDeck, setCurrentDeck] = useState<"pitch" | "investment" | "strategy">("pitch")
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleUnlock = () => {
    setIsUnlocked(true)
  }

  // Show auth screen if not unlocked
  if (!isUnlocked) {
    return <AuthScreen onUnlock={handleUnlock} />
  }

  return (
    <div className="min-h-screen">
      {/* Deck Switcher - Centered horizontally and positioned higher */}
      <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-40 flex flex-col sm:flex-row gap-2 bg-black/80 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
        <button
          onClick={() => setCurrentDeck("pitch")}
          className={`px-3 py-2 text-sm rounded-md transition-colors whitespace-nowrap ${
            currentDeck === "pitch"
              ? "bg-[#9d8cff] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          Pitch Deck
        </button>
        <button
          onClick={() => setCurrentDeck("investment")}
          className={`px-3 py-2 text-sm rounded-md transition-colors whitespace-nowrap ${
            currentDeck === "investment"
              ? "bg-[#9d8cff] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          Investment Deck
        </button>
        <button
          onClick={() => setCurrentDeck("strategy")}
          className={`px-3 py-2 text-sm rounded-md transition-colors whitespace-nowrap ${
            currentDeck === "strategy"
              ? "bg-[#9d8cff] text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          Strategy Deck
        </button>
      </div>

      {/* Render Current Deck */}
      {currentDeck === "pitch" ? <PitchDeck /> : currentDeck === "investment" ? <InvestmentDeck /> : <StrategyDeck />}
    </div>
  )
}
