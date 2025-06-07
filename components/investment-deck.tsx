"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Shield, Globe, Network, Building, Layers, Database } from "lucide-react"

// Financial Projections Chart Component
function FinancialProjectionsChart() {
  const projections = [
    { year: "2024", arr: 180, customers: 15, burn: 62 },
    { year: "2025", arr: 1200, customers: 45, burn: 85 },
    { year: "2026", arr: 4500, customers: 120, burn: 120 },
    { year: "2027", arr: 12000, customers: 300, burn: 180 },
    { year: "2028", arr: 25000, customers: 500, burn: 250 },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">5-Year Financial Projections</h3>
      <div className="relative h-64 bg-[#0f0f17] rounded p-4">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2d2d3d" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* ARR Line */}
          <path
            d="M 60 200 L 140 180 L 220 120 L 300 60 L 380 20"
            stroke="#9d8cff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {/* Data points */}
          {projections.map((point, index) => (
            <g key={point.year}>
              <circle cx={60 + index * 80} cy={200 - (point.arr / 25000) * 180} r="5" fill="#9d8cff" />
              <text x={60 + index * 80} y="230" textAnchor="middle" className="text-xs fill-gray-400">
                {point.year}
              </text>
              <text
                x={60 + index * 80}
                y={190 - (point.arr / 25000) * 180}
                textAnchor="middle"
                className="text-xs fill-[#b8a6ff] font-semibold"
              >
                ${point.arr}K
              </text>
            </g>
          ))}

          {/* Y-axis labels */}
          <text x="20" y="30" className="text-xs fill-gray-400">
            $25M
          </text>
          <text x="20" y="110" className="text-xs fill-gray-400">
            $12M
          </text>
          <text x="20" y="200" className="text-xs fill-gray-400">
            $0
          </text>
        </svg>
      </div>
    </div>
  )
}

// Market Opportunity Visualization
function MarketOpportunityChart() {
  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-green-500/30">
      <h3 className="text-lg font-semibold text-green-300 mb-4">Market Opportunity</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">TAM (Total Addressable Market)</span>
          <span className="text-green-300 font-bold">$850B</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div className="bg-green-400 h-3 rounded-full w-full"></div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">SAM (Serviceable Addressable)</span>
          <span className="text-blue-300 font-bold">$85B</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div className="bg-blue-400 h-3 rounded-full w-1/10"></div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-300">SOM (Serviceable Obtainable)</span>
          <span className="text-purple-300 font-bold">$8.5B</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <div className="bg-purple-400 h-3 rounded-full w-1/100"></div>
        </div>
      </div>
    </div>
  )
}

// Use of Funds Breakdown
function UseOfFundsChart() {
  const funds = [
    { category: "Engineering Team", amount: 600, percentage: 40, color: "#9d8cff" },
    { category: "Sales & Marketing", amount: 450, percentage: 30, color: "#10b981" },
    { category: "Operations & Infrastructure", amount: 300, percentage: 20, color: "#f59e0b" },
    { category: "Working Capital", amount: 150, percentage: 10, color: "#ef4444" },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Use of Funds ($1.5M)</h3>
      <div className="space-y-4">
        {funds.map((fund, index) => (
          <motion.div
            key={fund.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{fund.category}</span>
              <div className="text-right">
                <span className="font-semibold" style={{ color: fund.color }}>
                  ${fund.amount}K
                </span>
                <span className="text-gray-400 text-sm ml-2">({fund.percentage}%)</span>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="h-3 rounded-full"
                style={{ backgroundColor: fund.color }}
                initial={{ width: 0 }}
                animate={{ width: `${fund.percentage}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

interface Slide {
  id: number
  title: string
  content: React.ReactNode
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Investment Opportunity: AgentZeta",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-6">
            <img src="/images/agentzeta-logo.png" alt="AgentZeta Logo" className="h-24 w-auto" />
          </div>
          <h2 className="text-6xl font-bold text-[#b8a6ff] mb-4">AgentZeta</h2>
          <h3 className="text-2xl text-gray-300 font-light">Investment Opportunity</h3>
          <p className="text-xl text-gray-400 max-w-4xl">
            Building the semantic infrastructure for the next generation of AI systems
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-[#0a0a0f] p-4 rounded border border-green-500/30 text-center">
            <div className="text-2xl font-bold text-green-400">$1.5M</div>
            <div className="text-gray-400 text-sm">Seed Round</div>
          </div>
          <div className="bg-[#0a0a0f] p-4 rounded border border-blue-500/30 text-center">
            <div className="text-2xl font-bold text-blue-400">$850B</div>
            <div className="text-gray-400 text-sm">Market Size</div>
          </div>
          <div className="bg-[#0a0a0f] p-4 rounded border border-purple-500/30 text-center">
            <div className="text-2xl font-bold text-purple-400">2-3x</div>
            <div className="text-gray-400 text-sm">Performance vs GPT-4</div>
          </div>
          <div className="bg-[#0a0a0f] p-4 rounded border border-orange-500/30 text-center">
            <div className="text-2xl font-bold text-orange-400">Q1 2024</div>
            <div className="text-gray-400 text-sm">Launch Target</div>
          </div>
        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff] rounded-full"></div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Investment Thesis",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Investment Thesis</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light max-w-4xl mx-auto">
            AgentZeta represents a fundamental shift from isolated AI models to collaborative intelligence networks,
            positioning us at the center of the next wave of AI infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Massive Market Opportunity</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>$850B+ total addressable market across domains</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Financial AI market growing 25% annually</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Enterprise AI adoption accelerating</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Regulatory compliance driving demand</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Proven Technology</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>2-3x better performance than GPT-4 with RAG</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Working pilot with financial institutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Proprietary agent orchestration framework</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Scalable semantic infrastructure</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Network Effects & Moat</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Agent marketplace creates network effects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Institutional memory builds competitive moat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Platform strategy from day one</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>High switching costs for enterprises</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Exceptional Team</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>15+ years combined AI/ML experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Former Google, Microsoft, Amazon engineers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Deep financial domain expertise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Proven execution track record</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Why Now?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">AI Infrastructure Gap</div>
              <p className="text-gray-300 text-sm">
                Current AI lacks institutional memory and cross-system collaboration
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">Regulatory Pressure</div>
              <p className="text-gray-300 text-sm">
                Increasing compliance requirements drive demand for intelligent analysis
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">Technology Maturity</div>
              <p className="text-gray-300 text-sm">
                LLMs are now capable enough to enable sophisticated agent architectures
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Market Analysis",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Market Analysis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MarketOpportunityChart />

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Primary Markets</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Financial Services</span>
                  <span className="text-blue-300 font-bold">$150B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Legal Tech</span>
                  <span className="text-green-300 font-bold">$200B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Healthcare IT</span>
                  <span className="text-purple-300 font-bold">$350B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Research Tools</span>
                  <span className="text-orange-300 font-bold">$150B</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Market Drivers</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Exponential growth in regulatory filings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Increasing complexity of compliance requirements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Need for real-time risk assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>AI adoption in enterprise workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Competitive Landscape</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0f] p-4 rounded border border-red-500/30">
              <h4 className="text-red-300 font-semibold mb-2">Traditional Solutions</h4>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Bloomberg Terminal</li>
                <li>• Thomson Reuters</li>
                <li>• Manual analysis tools</li>
              </ul>
              <p className="text-red-300 text-xs mt-2">Limited AI, no semantic understanding</p>
            </div>
            <div className="bg-[#0a0a0f] p-4 rounded border border-yellow-500/30">
              <h4 className="text-yellow-300 font-semibold mb-2">AI-First Startups</h4>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Kensho (S&P)</li>
                <li>• AlphaSense</li>
                <li>• Various RAG solutions</li>
              </ul>
              <p className="text-yellow-300 text-xs mt-2">Single-purpose, no agent collaboration</p>
            </div>
            <div className="bg-[#0a0a0f] p-4 rounded border border-green-500/30">
              <h4 className="text-green-300 font-semibold mb-2">AgentZeta Advantage</h4>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Multi-agent architecture</li>
                <li>• Institutional memory</li>
                <li>• Platform strategy</li>
              </ul>
              <p className="text-green-300 text-xs mt-2">Semantic infrastructure for AI systems</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Go-to-Market Strategy</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Phase 1: Financial Services</h4>
                <p className="text-gray-400 text-xs">Direct sales to hedge funds and investment banks</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Phase 2: Platform Launch</h4>
                <p className="text-gray-400 text-xs">Developer ecosystem and agent marketplace</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Phase 3: Cross-Domain</h4>
                <p className="text-gray-400 text-xs">Expand to legal, healthcare, and research</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
            <h3 className="text-xl font-semibold text-orange-300 mb-4">Customer Segments</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Hedge Funds</span>
                <span className="text-orange-300 font-bold">$50K-200K ARR</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Investment Banks</span>
                <span className="text-blue-300 font-bold">$100K-500K ARR</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Compliance Firms</span>
                <span className="text-green-300 font-bold">$25K-100K ARR</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Enterprise (Future)</span>
                <span className="text-purple-300 font-bold">$500K+ ARR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Business Model & Revenue Streams",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Business Model & Revenue Streams</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Multi-layered revenue model designed for sustainable growth and network effects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Primary Revenue Streams</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">SaaS Subscriptions</h4>
                  <p className="text-gray-400 text-xs mb-2">Tiered pricing based on usage and features</p>
                  <div className="text-blue-300 font-bold">$25K - $500K ARR per customer</div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Agent Marketplace</h4>
                  <p className="text-gray-400 text-xs mb-2">30% revenue share from agent transactions</p>
                  <div className="text-green-300 font-bold">High-margin recurring revenue</div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Enterprise Licensing</h4>
                  <p className="text-gray-400 text-xs mb-2">Private cloud and custom deployments</p>
                  <div className="text-purple-300 font-bold">$1M+ annual contracts</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Pricing Strategy</h3>
              <div className="space-y-3">
                <div className="bg-[#0f0f17] p-3 rounded border border-green-500/20">
                  <h4 className="text-green-300 font-semibold text-sm mb-1">Starter</h4>
                  <div className="text-white font-bold">$2,500/month</div>
                  <p className="text-gray-400 text-xs">Basic Q&A, 1K queries/month</p>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-blue-500/20">
                  <h4 className="text-blue-300 font-semibold text-sm mb-1">Professional</h4>
                  <div className="text-white font-bold">$10,000/month</div>
                  <p className="text-gray-400 text-xs">Advanced analytics, 10K queries/month</p>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-purple-500/20">
                  <h4 className="text-purple-300 font-semibold text-sm mb-1">Enterprise</h4>
                  <div className="text-white font-bold">$50,000+/month</div>
                  <p className="text-gray-400 text-xs">Custom agents, unlimited queries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Unit Economics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Contract Value</span>
                  <span className="text-purple-300 font-bold">$120K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Customer Acquisition Cost</span>
                  <span className="text-orange-300 font-bold">$15K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Gross Margin</span>
                  <span className="text-green-300 font-bold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">LTV/CAC Ratio</span>
                  <span className="text-blue-300 font-bold">8:1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Payback Period</span>
                  <span className="text-teal-300 font-bold">12 months</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Revenue Projections</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2024</span>
                  <span className="text-orange-300 font-bold">$180K ARR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2025</span>
                  <span className="text-blue-300 font-bold">$1.2M ARR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2026</span>
                  <span className="text-green-300 font-bold">$4.5M ARR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2027</span>
                  <span className="text-purple-300 font-bold">$12M ARR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2028</span>
                  <span className="text-teal-300 font-bold">$25M ARR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Competitive Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Network className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Network Effects</h4>
              <p className="text-gray-300 text-sm">
                Agent marketplace creates increasing value with each new participant
              </p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Data Moat</h4>
              <p className="text-gray-300 text-sm">Institutional memory becomes more valuable over time</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">High Switching Costs</h4>
              <p className="text-gray-300 text-sm">Deep integration into enterprise workflows creates stickiness</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Financial Projections",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">5-Year Financial Projections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FinancialProjectionsChart />

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Key Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">2028 ARR</span>
                  <span className="text-green-300 font-bold">$25M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Customer Count</span>
                  <span className="text-blue-300 font-bold">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Gross Margin</span>
                  <span className="text-purple-300 font-bold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Net Revenue Retention</span>
                  <span className="text-orange-300 font-bold">120%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Growth Drivers</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Agent marketplace revenue scaling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Cross-domain expansion (legal, healthcare)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Enterprise contract upselling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>International market expansion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0f] p-6 rounded border border-green-500/30">
            <h3 className="text-green-300 font-semibold mb-4">Revenue Breakdown (2028)</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">SaaS Subscriptions</span>
                <span className="text-green-300">$15M (60%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Marketplace Revenue</span>
                <span className="text-blue-300">$7.5M (30%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Enterprise Licensing</span>
                <span className="text-purple-300">$2.5M (10%)</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0f] p-6 rounded border border-blue-500/30">
            <h3 className="text-blue-300 font-semibold mb-4">Customer Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Annual Churn Rate</span>
                <span className="text-green-300">5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Avg Contract Value</span>
                <span className="text-blue-300">$50K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Customer LTV</span>
                <span className="text-purple-300">$1M</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0f] p-6 rounded border border-purple-500/30">
            <h3 className="text-purple-300 font-semibold mb-4">Profitability</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Gross Profit</span>
                <span className="text-green-300">$21.25M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Operating Expenses</span>
                <span className="text-orange-300">$18M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">EBITDA</span>
                <span className="text-purple-300">$3.25M</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Path to Profitability</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">2025</div>
              <div className="text-gray-400 text-sm">Break-even</div>
              <div className="text-gray-500 text-xs">Monthly recurring revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">2026</div>
              <div className="text-gray-400 text-sm">Cash Flow Positive</div>
              <div className="text-gray-500 text-xs">Sustainable growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">2027</div>
              <div className="text-gray-400 text-sm">EBITDA Positive</div>
              <div className="text-gray-500 text-xs">Scale economics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">2028</div>
              <div className="text-gray-400 text-sm">Exit Ready</div>
              <div className="text-gray-500 text-xs">Strategic options</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Use of Funds",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Use of Funds: $1.5M Seed Round</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Strategic allocation focused on product development, team scaling, and market penetration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseOfFundsChart />

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Engineering Team (40% - $600K)</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>2 Senior AI Engineers ($200K each)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>1 Full-Stack Engineer ($120K)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>1 DevOps Engineer ($100K)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Benefits and equity compensation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Sales & Marketing (30% - $450K)</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>VP of Sales ($150K + commission)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>2 Sales Development Reps ($120K total)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Marketing campaigns and events ($100K)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Content creation and PR ($80K)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
            <h3 className="text-xl font-semibold text-orange-300 mb-4">Operations & Infrastructure (20% - $300K)</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Cloud infrastructure and AI compute ($150K)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Security and compliance tools ($50K)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Legal and professional services ($60K)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Office and operational expenses ($40K)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 rounded-lg border border-red-500/30">
            <h3 className="text-xl font-semibold text-red-300 mb-4">Working Capital (10% - $150K)</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Emergency fund for unexpected costs</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Bridge funding for Series A preparation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Opportunity investments (partnerships)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Cash flow management</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">18-Month Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">Q2 2024</div>
              <div className="text-gray-400 text-sm mb-2">Product Launch</div>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• Financial pilot live</li>
                <li>• First paying customers</li>
                <li>• Core team hired</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">Q4 2024</div>
              <div className="text-gray-400 text-sm mb-2">Market Validation</div>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• $500K ARR</li>
                <li>• 15+ customers</li>
                <li>• Agent SDK released</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">Q2 2025</div>
              <div className="text-gray-400 text-sm mb-2">Series A Ready</div>
              <ul className="text-gray-500 text-xs space-y-1">
                <li>• $1.2M ARR</li>
                <li>• Agent marketplace live</li>
                <li>• Cross-domain expansion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Risk Mitigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Conservative burn rate planning</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Multiple revenue stream development</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Early customer validation focus</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Flexible team scaling approach</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 p-6 rounded-lg border border-teal-500/30">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">Success Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Customer Acquisition</span>
                <span className="text-teal-300">50+ customers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">ARR Growth</span>
                <span className="text-blue-300">$1.2M by Q2 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Agent Marketplace</span>
                <span className="text-green-300">100+ developers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Series A Readiness</span>
                <span className="text-purple-300">Q2 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Technology & Competitive Advantage",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Technology & Competitive Advantage</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Our proprietary agent architecture and semantic infrastructure create sustainable competitive advantages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Core Technology Stack</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Agent Orchestration Engine</h4>
                  <p className="text-gray-400 text-xs">
                    Proprietary framework for coordinating multiple AI agents with specialized capabilities
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Semantic Knowledge Graph</h4>
                  <p className="text-gray-400 text-xs">
                    Dynamic graph structure that captures relationships and evolves with new information
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Institutional Memory System</h4>
                  <p className="text-gray-400 text-xs">
                    Persistent storage and retrieval of insights across time and documents
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Answer Accuracy</span>
                  <span className="text-green-300 font-bold">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">vs GPT-4 with RAG</span>
                  <span className="text-blue-300 font-bold">2-3x better</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-purple-300 font-bold">&lt;300ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Semantic Consistency</span>
                  <span className="text-orange-300 font-bold">92%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Intellectual Property</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Agent orchestration algorithms (patent pending)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Semantic alignment scoring methods</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Dynamic knowledge graph architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Cross-agent communication protocols</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Scalability Features</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Horizontal agent scaling architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Distributed knowledge graph storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Auto-scaling compute infrastructure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Multi-tenant security isolation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Competitive Positioning</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-3 text-gray-400">Feature</th>
                  <th className="text-center p-3 text-[#b8a6ff]">AgentZeta</th>
                  <th className="text-center p-3 text-gray-400">Traditional RAG</th>
                  <th className="text-center p-3 text-gray-400">Single AI Models</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="p-3 text-gray-300">Multi-Agent Architecture</td>
                  <td className="text-center p-3 text-green-400">✓</td>
                  <td className="text-center p-3 text-red-400">✗</td>
                  <td className="text-center p-3 text-red-400">✗</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-3 text-gray-300">Institutional Memory</td>
                  <td className="text-center p-3 text-green-400">✓</td>
                  <td className="text-center p-3 text-yellow-400">Limited</td>
                  <td className="text-center p-3 text-red-400">✗</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-3 text-gray-300">Semantic Understanding</td>
                  <td className="text-center p-3 text-green-400">✓</td>
                  <td className="text-center p-3 text-yellow-400">Basic</td>
                  <td className="text-center p-3 text-yellow-400">Basic</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="p-3 text-gray-300">Cross-System Collaboration</td>
                  <td className="text-center p-3 text-green-400">✓</td>
                  <td className="text-center p-3 text-red-400">✗</td>
                  <td className="text-center p-3 text-red-400">✗</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-300">Platform Extensibility</td>
                  <td className="text-center p-3 text-green-400">✓</td>
                  <td className="text-center p-3 text-red-400">✗</td>
                  <td className="text-center p-3 text-red-400">✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0f] p-6 rounded border border-blue-500/30">
            <h3 className="text-blue-300 font-semibold mb-4">Technical Moats</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>• Proprietary agent coordination algorithms</li>
              <li>• Accumulated institutional knowledge</li>
              <li>• Network effects from agent marketplace</li>
              <li>• Deep domain expertise in financial semantics</li>
            </ul>
          </div>

          <div className="bg-[#0a0a0f] p-6 rounded border border-green-500/30">
            <h3 className="text-green-300 font-semibold mb-4">Data Advantages</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>• Continuous learning from user interactions</li>
              <li>• Cross-customer insights (anonymized)</li>
              <li>• Temporal relationship mapping</li>
              <li>• Semantic drift detection and correction</li>
            </ul>
          </div>

          <div className="bg-[#0a0a0f] p-6 rounded border border-purple-500/30">
            <h3 className="text-purple-300 font-semibold mb-4">Platform Benefits</h3>
            <ul className="space-y-2 text-gray-400 text-xs">
              <li>• Developer ecosystem growth</li>
              <li>• Standardized agent interfaces</li>
              <li>• Shared infrastructure costs</li>
              <li>• Collective intelligence effects</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Team & Execution",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Team & Execution</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            World-class team with deep AI expertise and proven track record of building scalable systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-semibold text-blue-300 mb-4">Leadership Team</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                    <img src="/images/tim-nguyen.png" alt="Tim Nguyen" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Tim Nguyen</h4>
                    <p className="text-blue-300 text-sm">Founder & CEO</p>
                    <p className="text-gray-300 text-xs">
                      Former McKinsey consultant • Stanford CS • 5+ years AI strategy
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                    <img src="/images/hakki.png" alt="Hakki" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Hakikat Singh</h4>
                    <p className="text-purple-300 text-sm">CTO & Co-founder</p>
                    <p className="text-gray-300 text-xs">Former Google SWE • MIT EECS • Distributed systems expert</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500">
                    <img src="/images/jagan-individual.png" alt="Jagan" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Jagan Peravali</h4>
                    <p className="text-green-300 text-sm">Head of AI</p>
                    <p className="text-gray-300 text-xs">
                      Former Microsoft Research • CMU ML PhD • Agent architectures
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-teal-500">
                    <img src="/images/minh-individual.png" alt="Minh" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Minh Nguyen</h4>
                    <p className="text-teal-300 text-sm">Head of Engineering</p>
                    <p className="text-gray-300 text-xs">Former Amazon • UC Berkeley • Full-stack & DevOps</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Advisory Board</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Dr. Sarah Chen</h4>
                  <p className="text-gray-400 text-xs">Former Head of AI at Goldman Sachs • Stanford AI Lab</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Michael Rodriguez</h4>
                  <p className="text-gray-400 text-xs">Former CTO at Palantir • Enterprise AI deployment expert</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Dr. Lisa Wang</h4>
                  <p className="text-gray-400 text-xs">
                    Former VP Engineering at OpenAI • Multi-agent systems researcher
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Team Strengths</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Deep AI Expertise</h4>
                  <p className="text-gray-400 text-xs">
                    Combined 15+ years in ML/AI from top tech companies and research institutions
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Financial Domain Knowledge</h4>
                  <p className="text-gray-400 text-xs">
                    Understanding of regulatory requirements, compliance needs, and industry workflows
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Enterprise Systems Experience</h4>
                  <p className="text-gray-400 text-xs">
                    Proven track record building and scaling enterprise-grade AI systems
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Execution Focus</h4>
                  <p className="text-gray-400 text-xs">Rapid prototyping and customer-driven development approach</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Hiring Plan</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Q1 2024</span>
                  <span className="text-orange-300 font-bold">2 AI Engineers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Q2 2024</span>
                  <span className="text-blue-300 font-bold">VP Sales + SDR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Q3 2024</span>
                  <span className="text-green-300 font-bold">Full-Stack Engineer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Q4 2024</span>
                  <span className="text-purple-300 font-bold">DevOps Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Execution Track Record</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">6 months</div>
              <div className="text-gray-400 text-sm mb-2">MVP to Pilot</div>
              <p className="text-gray-500 text-xs">Rapid prototyping and customer validation</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">2-3x</div>
              <div className="text-gray-400 text-sm mb-2">Performance Improvement</div>
              <p className="text-gray-500 text-xs">Proven technical superiority over existing solutions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-gray-400 text-sm mb-2">Early Partnerships</div>
              <p className="text-gray-500 text-xs">Strong market validation and customer interest</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 p-6 rounded-lg border border-teal-500/30">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">Culture & Values</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Customer-first mindset</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Technical excellence and innovation</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Rapid iteration and learning</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span>Transparency and collaboration</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 rounded-lg border border-red-500/30">
            <h3 className="text-xl font-semibold text-red-300 mb-4">Risk Mitigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Diverse skill sets across team members</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Strong advisory board guidance</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Proven ability to attract top talent</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span>Clear succession planning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Investment Terms & Next Steps",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Investment Terms & Next Steps</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Join us in building the semantic infrastructure for the next generation of AI systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Investment Terms</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Round Size</span>
                  <span className="text-green-300 font-bold">$1.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Round Type</span>
                  <span className="text-blue-300 font-bold">Seed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pre-money Valuation</span>
                  <span className="text-purple-300 font-bold">$8.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Post-money Valuation</span>
                  <span className="text-orange-300 font-bold">$10M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Minimum Investment</span>
                  <span className="text-teal-300 font-bold">$25K</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Investor Rights</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Board observer rights for lead investors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Pro-rata rights in future rounds</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Monthly investor updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Anti-dilution protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Tag-along rights</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Target Investors</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">AI-Focused VCs</h4>
                  <p className="text-gray-400 text-xs">Funds with deep AI/ML expertise and enterprise focus</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Strategic Angels</h4>
                  <p className="text-gray-400 text-xs">Former executives from Google, Microsoft, OpenAI</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">FinTech Investors</h4>
                  <p className="text-gray-400 text-xs">Funds with portfolio companies in financial services</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Timeline</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Fundraising Launch</span>
                  <span className="text-orange-300 font-bold">Q4 2023</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">First Close Target</span>
                  <span className="text-blue-300 font-bold">Q1 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Final Close</span>
                  <span className="text-green-300 font-bold">Q2 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Series A Prep</span>
                  <span className="text-purple-300 font-bold">Q4 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Exit Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Building className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Strategic Acquisition</h4>
              <p className="text-gray-300 text-sm mb-2">5-7 years</p>
              <p className="text-gray-400 text-xs">
                Target acquirers: Microsoft, Google, Salesforce, enterprise software companies
              </p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">IPO</h4>
              <p className="text-gray-300 text-sm mb-2">7-10 years</p>
              <p className="text-gray-400 text-xs">Public offering as a leading AI infrastructure platform company</p>
            </div>
            <div className="text-center">
              <Layers className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Platform Spin-offs</h4>
              <p className="text-gray-300 text-sm mb-2">5+ years</p>
              <p className="text-gray-400 text-xs">
                Potential to spin off domain-specific platforms as separate entities
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 p-6 rounded-lg border border-teal-500/30">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">Next Steps</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <span className="text-teal-300 text-xs">1</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Initial Discussion</div>
                  <div className="text-gray-400 text-xs">30-minute intro call to discuss opportunity</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <span className="text-teal-300 text-xs">2</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Product Demo</div>
                  <div className="text-gray-400 text-xs">Live demonstration of AgentZeta capabilities</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <span className="text-teal-300 text-xs">3</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Due Diligence</div>
                  <div className="text-gray-400 text-xs">Technical and business deep dive</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <span className="text-teal-300 text-xs">4</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Term Sheet</div>
                  <div className="text-gray-400 text-xs">Finalize investment terms and documentation</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 rounded-lg border border-red-500/30">
            <h3 className="text-xl font-semibold text-red-300 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Tim Nguyen</h4>
                <p className="text-gray-400 text-xs">Founder & CEO</p>
                <p className="text-red-300 text-xs">tim@agentzeta.ai</p>
                <p className="text-gray-400 text-xs">+1 (555) 123-4567</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Company</h4>
                <p className="text-gray-400 text-xs">AgentZeta, Inc.</p>
                <p className="text-blue-300 text-xs">www.agentzeta.ai</p>
                <p className="text-gray-400 text-xs">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#9d8cff]/20 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/30">
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff] mb-4">
            Join us in building the future of AI infrastructure
          </p>
          <p className="text-gray-400 max-w-3xl mx-auto">
            AgentZeta represents a once-in-a-generation opportunity to build the foundational layer for intelligent
            systems. We're not just creating another AI tool—we're building the infrastructure that will enable the next
            wave of AI innovation across every industry.
          </p>
        </div>
      </div>
    ),
  },
]

export function InvestmentDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPresenting, setIsPresenting] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#0a0a0f] border-b border-[#2d2d3d] p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src="/images/agentzeta-logo.png" alt="AgentZeta" className="h-8 w-auto" />
            <span className="text-lg font-medium text-white">Investment Deck</span>
            <div className="text-sm text-gray-400">
              Slide {currentSlide + 1} of {slides.length}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsPresenting(!isPresenting)}
              className="flex items-center space-x-2 px-4 py-2 bg-[#9d8cff] hover:bg-[#b8a6ff] rounded-lg transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>{isPresenting ? "Exit" : "Present"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Slide Navigation */}
        {!isPresenting && (
          <div className="w-64 bg-[#0a0a0f] border-r border-[#2d2d3d] p-4 overflow-y-auto">
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Slides</h3>
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    currentSlide === index ? "bg-[#9d8cff] text-white" : "bg-[#0f0f17] text-gray-300 hover:bg-[#1a1a2e]"
                  }`}
                >
                  <div className="text-sm font-medium">
                    {slide.id}. {slide.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Slide Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-h-[calc(100vh-200px)] overflow-y-auto"
                >
                  <div className="py-4">{slides[currentSlide].content}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="bg-[#0a0a0f] border-t border-[#2d2d3d] p-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center space-x-2 px-4 py-2 bg-[#0f0f17] hover:bg-[#1a1a2e] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-[#9d8cff]" : "bg-[#2d2d3d] hover:bg-[#4d4d5d]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center space-x-2 px-4 py-2 bg-[#0f0f17] hover:bg-[#1a1a2e] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
