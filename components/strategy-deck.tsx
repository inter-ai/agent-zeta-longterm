"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  Play,
  Target,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Globe,
  Brain,
  Network,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

// Strategic Framework Visualization
function StrategicFrameworkVisualization() {
  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Strategic Framework</h3>
      <div className="relative h-80">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Central Vision Circle */}
          <motion.circle
            cx="300"
            cy="160"
            r="60"
            fill="#9d8cff"
            stroke="#b8a6ff"
            strokeWidth="3"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <text x="300" y="155" textAnchor="middle" className="text-sm fill-white font-bold">
            SEMANTIC
          </text>
          <text x="300" y="170" textAnchor="middle" className="text-sm fill-white font-bold">
            TRUTH
          </text>

          {/* Strategic Pillars */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            {/* Technology Excellence */}
            <circle cx="150" cy="80" r="40" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
            <text x="150" y="75" textAnchor="middle" className="text-xs fill-green-300 font-semibold">
              TECHNOLOGY
            </text>
            <text x="150" y="88" textAnchor="middle" className="text-xs fill-green-300 font-semibold">
              EXCELLENCE
            </text>
            <line x1="190" y1="100" x2="240" y2="130" stroke="#10b981" strokeWidth="2" />

            {/* Market Leadership */}
            <circle cx="450" cy="80" r="40" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="2" />
            <text x="450" y="75" textAnchor="middle" className="text-xs fill-yellow-300 font-semibold">
              MARKET
            </text>
            <text x="450" y="88" textAnchor="middle" className="text-xs fill-yellow-300 font-semibold">
              LEADERSHIP
            </text>
            <line x1="410" y1="100" x2="360" y2="130" stroke="#f59e0b" strokeWidth="2" />

            {/* Customer Success */}
            <circle cx="150" cy="240" r="40" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
            <text x="150" y="235" textAnchor="middle" className="text-xs fill-blue-300 font-semibold">
              CUSTOMER
            </text>
            <text x="150" y="248" textAnchor="middle" className="text-xs fill-blue-300 font-semibold">
              SUCCESS
            </text>
            <line x1="190" y1="220" x2="240" y2="190" stroke="#3b82f6" strokeWidth="2" />

            {/* Ecosystem Growth */}
            <circle cx="450" cy="240" r="40" fill="#8b5cf6" fillOpacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
            <text x="450" y="235" textAnchor="middle" className="text-xs fill-purple-300 font-semibold">
              ECOSYSTEM
            </text>
            <text x="450" y="248" textAnchor="middle" className="text-xs fill-purple-300 font-semibold">
              GROWTH
            </text>
            <line x1="410" y1="220" x2="360" y2="190" stroke="#8b5cf6" strokeWidth="2" />

            {/* Semantic Infrastructure */}
            <circle cx="300" cy="320" r="40" fill="#64748b" fillOpacity="0.2" stroke="#64748b" strokeWidth="2" />
            <text x="300" y="315" textAnchor="middle" className="text-xs fill-gray-300 font-semibold">
              SEMANTIC
            </text>
            <text x="300" y="328" textAnchor="middle" className="text-xs fill-gray-300 font-semibold">
              INFRASTRUCTURE
            </text>
            <line x1="300" y1="220" x2="300" y2="260" stroke="#64748b" strokeWidth="2" />
          </motion.g>
        </svg>
      </div>
    </div>
  )
}

// Market Penetration Strategy
function MarketPenetrationStrategy() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Beachhead",
      duration: "0-12 months",
      target: "Hedge Funds",
      strategy: "Alpha Discovery",
      color: "#10b981",
      customers: "12-15",
      arr: "$180K",
    },
    {
      phase: "Phase 2",
      title: "Expansion",
      duration: "12-24 months",
      target: "Compliance Teams",
      strategy: "Risk Management",
      color: "#3b82f6",
      customers: "45-60",
      arr: "$1.2M",
    },
    {
      phase: "Phase 3",
      title: "Scale",
      duration: "24-36 months",
      target: "Enterprise",
      strategy: "Platform Integration",
      color: "#8b5cf6",
      customers: "120-150",
      arr: "$4.5M",
    },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Market Penetration Strategy</h3>
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className="flex items-center space-x-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: phase.color }}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-lg">{phase.title}</h4>
                  <span className="text-gray-400 text-sm">{phase.duration}</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Target:</span>
                    <div className="text-white font-semibold">{phase.target}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Strategy:</span>
                    <div className="text-white font-semibold">{phase.strategy}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Customers:</span>
                    <div style={{ color: phase.color }} className="font-semibold">
                      {phase.customers}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">ARR Target:</span>
                    <div style={{ color: phase.color }} className="font-semibold">
                      {phase.arr}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index < phases.length - 1 && (
              <div className="ml-8 mt-4 mb-2">
                <div className="w-0.5 h-8 bg-gray-600"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Competitive Moats Visualization
function CompetitiveMoatsVisualization() {
  const moats = [
    { name: "Technical Moat", strength: 95, description: "DKG Expertise & Agent Orchestration", color: "#10b981" },
    { name: "Data Moat", strength: 85, description: "Proprietary training data", color: "#3b82f6" },
    { name: "Network Moat", strength: 70, description: "Customer ecosystem", color: "#8b5cf6" },
    { name: "Regulatory Moat", strength: 90, description: "Compliance expertise", color: "#f59e0b" },
    { name: "Brand Moat", strength: 60, description: "Market recognition", color: "#ef4444" },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Competitive Moats & Defensibility</h3>
      <div className="space-y-4">
        {moats.map((moat, index) => (
          <motion.div
            key={moat.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-white font-semibold">{moat.name}</span>
                <p className="text-gray-400 text-sm">{moat.description}</p>
              </div>
              <span className="text-lg font-bold" style={{ color: moat.color }}>
                {moat.strength}%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                className="h-3 rounded-full"
                style={{ backgroundColor: moat.color }}
                initial={{ width: 0 }}
                animate={{ width: `${moat.strength}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Partnership Ecosystem Map
function PartnershipEcosystemMap() {
  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Partnership Ecosystem Strategy</h3>
      <div className="relative h-64">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Central AgentZeta */}
          <motion.circle
            cx="300"
            cy="130"
            r="35"
            fill="#9d8cff"
            stroke="#b8a6ff"
            strokeWidth="3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <text x="300" y="135" textAnchor="middle" className="text-xs fill-white font-bold">
            AgentZeta
          </text>

          {/* Technology Partners */}
          <circle cx="150" cy="60" r="25" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
          <text x="150" y="55" textAnchor="middle" className="text-xs fill-green-300 font-semibold">
            Cloud
          </text>
          <text x="150" y="68" textAnchor="middle" className="text-xs fill-green-300 font-semibold">
            Partners
          </text>
          <line x1="175" y1="75" x2="265" y2="115" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />

          {/* Data Partners */}
          <circle cx="450" cy="60" r="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
          <text x="450" y="55" textAnchor="middle" className="text-xs fill-blue-300 font-semibold">
            Data
          </text>
          <text x="450" y="68" textAnchor="middle" className="text-xs fill-blue-300 font-semibold">
            Providers
          </text>
          <line x1="425" y1="75" x2="335" y2="115" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />

          {/* Integration Partners */}
          <circle cx="150" cy="200" r="25" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2" />
          <text x="150" y="195" textAnchor="middle" className="text-xs fill-purple-300 font-semibold">
            Platform
          </text>
          <text x="150" y="208" textAnchor="middle" className="text-xs fill-purple-300 font-semibold">
            Partners
          </text>
          <line x1="175" y1="185" x2="265" y2="145" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="3,3" />

          {/* Channel Partners */}
          <circle cx="450" cy="200" r="25" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
          <text x="450" y="195" textAnchor="middle" className="text-xs fill-yellow-300 font-semibold">
            Channel
          </text>
          <text x="450" y="208" textAnchor="middle" className="text-xs fill-yellow-300 font-semibold">
            Partners
          </text>
          <line x1="425" y1="185" x2="335" y2="145" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,3" />
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="text-center">
          <div className="text-green-300 font-semibold">Cloud Partners</div>
          <div className="text-gray-400">AWS, Azure, GCP</div>
        </div>
        <div className="text-center">
          <div className="text-blue-300 font-semibold">Data Providers</div>
          <div className="text-gray-400">Bloomberg, Refinitiv</div>
        </div>
        <div className="text-center">
          <div className="text-purple-300 font-semibold">Platform Partners</div>
          <div className="text-gray-400">Palantir, Snowflake</div>
        </div>
        <div className="text-center">
          <div className="text-yellow-300 font-semibold">Channel Partners</div>
          <div className="text-gray-400">Consulting firms</div>
        </div>
      </div>
    </div>
  )
}

// OKR Dashboard
function OKRDashboard() {
  const okrs = [
    {
      objective: "Achieve Product-Market Fit",
      keyResults: [
        { metric: "Customer Retention", target: "95%", current: "87%", status: "on-track" },
        { metric: "NPS Score", target: "70+", current: "68", status: "at-risk" },
        { metric: "Monthly Active Users", target: "500", current: "420", status: "on-track" },
      ],
    },
    {
      objective: "Scale Revenue Growth",
      keyResults: [
        { metric: "ARR Growth", target: "$180K", current: "$145K", status: "on-track" },
        { metric: "Customer Acquisition", target: "15", current: "12", status: "on-track" },
        { metric: "Average Contract Value", target: "$84K", current: "$78K", status: "at-risk" },
      ],
    },
    {
      objective: "Build Technical Moat",
      keyResults: [
        { metric: "Model Accuracy", target: "95%", current: "95.7%", status: "achieved" },
        { metric: "Processing Speed", target: "<300ms", current: "285ms", status: "achieved" },
        { metric: "Patent Applications", target: "3", current: "2", status: "on-track" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "achieved":
        return "#10b981"
      case "on-track":
        return "#3b82f6"
      case "at-risk":
        return "#f59e0b"
      case "behind":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "achieved":
        return <CheckCircle className="w-4 h-4" />
      case "on-track":
        return <TrendingUp className="w-4 h-4" />
      case "at-risk":
        return <AlertTriangle className="w-4 h-4" />
      case "behind":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Q1 2024 OKRs Dashboard</h3>
      <div className="space-y-6">
        {okrs.map((okr, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0f0f17] p-4 rounded-lg border border-gray-700"
          >
            <h4 className="text-white font-semibold mb-3">{okr.objective}</h4>
            <div className="space-y-3">
              {okr.keyResults.map((kr, krIndex) => (
                <div key={krIndex} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div style={{ color: getStatusColor(kr.status) }}>{getStatusIcon(kr.status)}</div>
                    <span className="text-gray-300 text-sm">{kr.metric}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400 text-sm">
                      {kr.current} / {kr.target}
                    </span>
                    <span
                      className="px-2 py-1 rounded text-xs font-semibold"
                      style={{
                        backgroundColor: `${getStatusColor(kr.status)}20`,
                        color: getStatusColor(kr.status),
                      }}
                    >
                      {kr.status.replace("-", " ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Risk Matrix
function RiskMatrix() {
  const risks = [
    {
      name: "Competitive Response",
      probability: "Medium",
      impact: "High",
      mitigation: "Patent protection, speed to market",
      color: "#f59e0b",
    },
    {
      name: "Regulatory Changes",
      probability: "Low",
      impact: "High",
      mitigation: "Regulatory relationships, compliance focus",
      color: "#ef4444",
    },
    {
      name: "Technical Complexity",
      probability: "Medium",
      impact: "Medium",
      mitigation: "Modular architecture, rigorous testing",
      color: "#3b82f6",
    },
    {
      name: "Market Education",
      probability: "Medium",
      impact: "Medium",
      mitigation: "Thought leadership, customer success programs",
      color: "#8b5cf6",
    },
    {
      name: "Market Adoption",
      probability: "Low",
      impact: "High",
      mitigation: "Customer validation, pilot programs",
      color: "#f59e0b",
    },
    {
      name: "Talent Acquisition",
      probability: "High",
      impact: "Medium",
      mitigation: "Competitive compensation, equity packages",
      color: "#10b981",
    },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Strategic Risk Matrix</h3>
      <div className="space-y-3">
        {risks.map((risk, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0f0f17] p-4 rounded-lg border border-gray-700"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white font-semibold">{risk.name}</h4>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  {risk.probability} Probability
                </span>
                <span
                  className="px-2 py-1 rounded text-xs font-semibold"
                  style={{
                    backgroundColor: `${risk.color}20`,
                    color: risk.color,
                  }}
                >
                  {risk.impact} Impact
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{risk.mitigation}</p>
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
    title: "Strategic Overview",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-6">
            <img src="/images/agentzeta-logo.png" alt="AgentZeta Logo" className="h-24 w-auto" />
          </div>
          <h2 className="text-6xl font-bold text-[#b8a6ff] mb-4">AgentZeta</h2>
          <h3 className="text-2xl text-gray-300 font-light">Strategic Roadmap 2024-2027</h3>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff] rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
            <Target className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-green-300 mb-2">Vision</h4>
            <p className="text-gray-300 text-sm">Semantic infrastructure for institutional truth</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
            <Shield className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-blue-300 mb-2">Mission</h4>
            <p className="text-gray-300 text-sm">Detect truth drift before it becomes risk</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <Zap className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-purple-300 mb-2">Strategy</h4>
            <p className="text-gray-300 text-sm">First-mover advantage in semantic drift</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Strategic Framework",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Strategic Framework & Core Pillars</h2>

        <StrategicFrameworkVisualization />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                Technology Excellence
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Multi-agent semantic architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>95%+ accuracy in drift detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Real-time processing capabilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Continuous model improvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Customer Success
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>White-glove onboarding process</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dedicated customer success managers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Custom integration support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Continuous value demonstration</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-900/10 to-orange-800/10 p-6 rounded-lg border border-yellow-500/30">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Market Leadership
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Category creation and definition</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Thought leadership in semantic analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Industry conference presence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Regulatory body engagement</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Ecosystem Growth
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Strategic partnership development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>API-first integration platform</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Developer community building</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Marketplace and app ecosystem</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/10 to-gray-800/10 p-6 rounded-lg border border-gray-500/30">
              <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                Semantic Infrastructure
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Dynamic Knowledge Graph (DKG)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Agent Orchestration Engine</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Semantic Query Interface</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <span>Memory and Drift Tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Strategic Objectives 2024-2027</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300">95%+</div>
              <div className="text-gray-400 text-sm">Market Share in Semantic Drift</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300">$25M</div>
              <div className="text-gray-400 text-sm">ARR by 2027</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">500+</div>
              <div className="text-gray-400 text-sm">Enterprise Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300">Global</div>
              <div className="text-gray-400 text-sm">Market Presence</div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Vision: LLM^n</h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="text-center">
              <div className="text-gray-400 text-sm">
                AgentZeta envisions a future where Large Language Models (LLMs) are interconnected and augmented by a
                semantic web infrastructure, creating a powerful network of knowledge and reasoning capabilities. This
                "LLM^n" vision represents a significant leap beyond current AI capabilities, enabling more sophisticated
                and nuanced understanding of complex information.
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Market Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Market Penetration & Expansion Strategy</h2>

        <MarketPenetrationStrategy />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
              <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4">Beachhead Strategy</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-green-300 font-semibold">Target: Quantitative Hedge Funds</h4>
                  <p className="text-gray-400 text-sm">
                    Focus on funds with $1B+ AUM seeking alpha from alternative data sources
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-blue-300 font-semibold">Value Proposition: Alpha Discovery</h4>
                  <p className="text-gray-400 text-sm">
                    Semantic drift signals provide 6-week early warning for position adjustments
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-purple-300 font-semibold">Go-to-Market: Direct Sales</h4>
                  <p className="text-gray-400 text-sm">
                    Relationship-driven sales through industry connections and conferences
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0f] p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Geographic Expansion</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">North America (Primary)</span>
                  <span className="text-orange-300 font-bold">Year 1-2</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full w-full"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Europe (Secondary)</span>
                  <span className="text-blue-300 font-bold">Year 2-3</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-3/4"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Asia-Pacific</span>
                  <span className="text-purple-300 font-bold">Year 3+</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0a0a0f] p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Customer Segmentation</h3>
              <div className="space-y-4">
                <div className="bg-green-900/10 p-3 rounded border border-green-500/20">
                  <h4 className="text-green-300 font-semibold mb-1">Tier 1: Large Hedge Funds</h4>
                  <p className="text-gray-400 text-sm">$5B+ AUM, 50+ analysts, enterprise contracts</p>
                  <div className="text-green-300 text-xs mt-1">Target: 15 customers, $150K+ ACV</div>
                </div>
                <div className="bg-blue-900/10 p-3 rounded border border-blue-500/20">
                  <h4 className="text-blue-300 font-semibold mb-1">Tier 2: Mid-Market Funds</h4>
                  <p className="text-gray-400 text-sm">$500M-5B AUM, 10-50 analysts, professional plans</p>
                  <div className="text-blue-300 text-xs mt-1">Target: 45 customers, $50K+ ACV</div>
                </div>
                <div className="bg-purple-900/10 p-3 rounded border border-purple-500/20">
                  <h4 className="text-purple-300 font-semibold mb-1">Tier 3: Compliance Teams</h4>
                  <p className="text-gray-400 text-sm">Banks, insurance, audit firms, starter plans</p>
                  <div className="text-purple-300 text-xs mt-1">Target: 120 customers, $25K+ ACV</div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0a0f] p-6 rounded-lg border border-teal-500/30">
              <h3 className="text-xl font-semibold text-teal-300 mb-4">Competitive Positioning</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">
                    <strong className="text-teal-300">vs. Enterprise AI Platforms:</strong> Regulatory specialization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">
                    <strong className="text-blue-300">vs. Legacy Systems:</strong> Proactive vs reactive
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">
                    <strong className="text-purple-300">vs. In-House Solutions:</strong> DKG Expertise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Product Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Product Development & Technology Roadmap</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-semibold text-green-300 mb-4">Core Platform (Now)</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>SEC filing analysis (10-K, 10-Q, 8-K)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Multi-agent semantic drift detection</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Real-time alerts and API</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Visual diff and annotation tools</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>95%+ accuracy, &lt;300ms latency</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Enhanced Platform (6-12mo)</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Earnings call transcript analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>ESG and sustainability reports</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>International regulatory filings</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Predictive risk modeling</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Custom workflow automation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Semantic Copilot (12-18mo)</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Legal writing assistance</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Cross-filing consistency checks</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Language-to-law alignment</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Regulatory change impact analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Automated compliance reporting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
          <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Technology Architecture Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-green-300 font-semibold">AI/ML Infrastructure</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• FinBERT + custom domain models</li>
                  <li>• Multi-agent orchestration framework</li>
                  <li>• Continuous learning pipeline</li>
                  <li>• Model versioning and A/B testing</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-blue-300 font-semibold">Data Architecture</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Neo4j knowledge graphs</li>
                  <li>• Vector embeddings database</li>
                  <li>• Real-time streaming pipeline</li>
                  <li>• Data lineage and governance</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-purple-300 font-semibold">Platform Infrastructure</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Kubernetes-native deployment</li>
                  <li>• API-first microservices</li>
                  <li>• Auto-scaling and load balancing</li>
                  <li>• Multi-cloud redundancy</li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-orange-300 font-semibold">Security & Compliance</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• SOC 2 Type II certification</li>
                  <li>• End-to-end encryption</li>
                  <li>• GDPR and CCPA compliance</li>
                  <li>• Financial services security standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Agent Marketplace Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Agent Marketplace Strategy</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">3rd Party Agent Development</h3>
              <p className="text-gray-300 text-sm">
                Enable external developers to build and deploy specialized agents on the AgentZeta platform.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Revenue Sharing Models</h3>
              <p className="text-gray-300 text-sm">
                Implement a fair and transparent revenue sharing model for agent developers, incentivizing high-quality
                contributions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Quality Assurance and Meta-Agents</h3>
              <p className="text-gray-300 text-sm">
                Establish rigorous quality assurance processes and develop meta-agents to curate and manage the agent
                ecosystem.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/10 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Ecosystem Growth Strategy</h3>
              <p className="text-gray-300 text-sm">
                Drive ecosystem growth through developer outreach, marketing initiatives, and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Technical Moats",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Technical Moats & Defensibility</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">DKG Expertise</h3>
              <p className="text-gray-300 text-sm">
                Deep understanding and experience in building and maintaining dynamic knowledge graphs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Agent Orchestration Capabilities</h3>
              <p className="text-gray-300 text-sm">
                Advanced capabilities in orchestrating and managing multiple agents to solve complex problems.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Semantic Reasoning Infrastructure</h3>
              <p className="text-gray-300 text-sm">
                Robust infrastructure for semantic reasoning and inference, enabling agents to understand and interpret
                complex information.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/10 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Enterprise-Grade Reliability</h3>
              <p className="text-gray-300 text-sm">
                High levels of reliability, scalability, and security, ensuring that the platform can meet the demands
                of enterprise customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Competitive Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Competitive Moats & Defensibility Strategy</h2>

        <CompetitiveMoatsVisualization />

        <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
          <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Competitive Response Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Incumbent Response</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>
                  <strong className="text-red-300">Threat:</strong> Enterprise AI Platforms add semantic features
                </p>
                <p>
                  <strong className="text-green-300">Counter:</strong> Deeper regulatory specialization
                </p>
                <p>
                  <strong className="text-blue-300">Advantage:</strong> 18-month technical lead
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold">New Entrant Response</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>
                  <strong className="text-red-300">Threat:</strong> Well-funded AI startups
                </p>
                <p>
                  <strong className="text-green-300">Counter:</strong> Domain expertise and data moat
                </p>
                <p>
                  <strong className="text-blue-300">Advantage:</strong> Customer relationships
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Big Tech Response</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>
                  <strong className="text-red-300">Threat:</strong> Google/Microsoft entry
                </p>
                <p>
                  <strong className="text-green-300">Counter:</strong> Regulatory compliance focus
                </p>
                <p>
                  <strong className="text-blue-300">Advantage:</strong> Specialized use case
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Partnership Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Strategic Partnerships & Ecosystem Development</h2>

        <PartnershipEcosystemMap />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Technology Partners</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold">Cloud Infrastructure</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• AWS: Primary cloud provider, AI/ML services</li>
                    <li>• Microsoft Azure: Enterprise customer preference</li>
                    <li>• Google Cloud: Advanced AI capabilities</li>
                  </ul>
                  <div className="text-green-300 text-xs mt-2">Value: Reduced infrastructure costs, faster scaling</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold">AI/ML Platforms</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Hugging Face: Model hosting and deployment</li>
                    <li>• Weights & Biases: MLOps and experiment tracking</li>
                    <li>• Databricks: Data processing and analytics</li>
                  </ul>
                  <div className="text-blue-300 text-xs mt-2">Value: Accelerated development, best practices</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Data Partners</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold">Financial Data Providers</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Bloomberg: Real-time market data integration</li>
                    <li>• Refinitiv: Regulatory filing feeds</li>
                    <li>• S&P Capital IQ: Company fundamentals</li>
                  </ul>
                  <div className="text-blue-300 text-xs mt-2">Value: Comprehensive data coverage, real-time feeds</div>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="text-white font-semibold">Alternative Data</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Quandl: Economic and financial datasets</li>
                    <li>• Thinknum: Web-scraped business metrics</li>
                    <li>• Satellite imagery providers</li>
                  </ul>
                  <div className="text-teal-300 text-xs mt-2">Value: Enhanced context for semantic analysis</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Integration Partners</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold">Analytics Platforms</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Palantir: Enterprise data integration</li>
                    <li>• Snowflake: Data warehouse connectivity</li>
                    <li>• Tableau: Visualization and dashboards</li>
                  </ul>
                  <div className="text-purple-300 text-xs mt-2">Value: Seamless customer workflows</div>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="text-white font-semibold">Trading Systems</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Charles River: Portfolio management</li>
                    <li>• Aladdin: Risk management platform</li>
                    <li>• FactSet: Research and analytics</li>
                  </ul>
                  <div className="text-pink-300 text-xs mt-2">Value: Direct trading signal integration</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/10 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Channel Partners</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-white font-semibold">Consulting Firms</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• McKinsey: Strategy and implementation</li>
                    <li>• Deloitte: Technology consulting</li>
                    <li>• PwC: Risk and compliance advisory</li>
                  </ul>
                  <div className="text-orange-300 text-xs mt-2">Value: Enterprise sales acceleration</div>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-white font-semibold">System Integrators</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Accenture: Digital transformation</li>
                    <li>• IBM: Enterprise AI solutions</li>
                    <li>• Capgemini: Financial services focus</li>
                  </ul>
                  <div className="text-red-300 text-xs mt-2">Value: Implementation and support services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Financial Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Financial Strategy & Capital Allocation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center">
                <DollarSign className="w-6 h-6 mr-2" />
                Revenue Strategy
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold">Pricing Optimization</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Value-based pricing model</li>
                    <li>• Annual contract incentives</li>
                    <li>• Usage-based scaling tiers</li>
                    <li>• Enterprise custom pricing</li>
                  </ul>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold">Revenue Diversification</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• SaaS subscriptions (60%)</li>
                    <li>• Agent Marketplace (20%)</li>
                    <li>• API usage fees (10%)</li>
                    <li>• Professional services (10%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Cost Management</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Engineering (40%)</span>
                  <span className="text-blue-300 font-bold">$100K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full w-2/5"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sales & Marketing (30%)</span>
                  <span className="text-green-300 font-bold">$75K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-3/10"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Operations (20%)</span>
                  <span className="text-purple-300 font-bold">$50K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full w-1/5"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Working Capital (10%)</span>
                  <span className="text-orange-300 font-bold">$25K</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full w-1/10"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Funding Strategy</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold">Current Round: Pre-Seed</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• $1.5M SAFE, $8M cap, 20% discount</li>
                    <li>• 24-month runway to Series A</li>
                    <li>• Focus on product-market fit</li>
                  </ul>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="text-white font-semibold">Next Round: Series A</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• $3-5M at $25-35M pre-money</li>
                    <li>• Target: $1.2M ARR, strong metrics</li>
                    <li>• Use: Team scaling, market expansion</li>
                  </ul>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-white font-semibold">Future: Series B</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• $8-12M at $50-80M pre-money</li>
                    <li>• Target: $1.2M ARR, international</li>
                    <li>• Use: Global expansion, R&D</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/10 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Financial Metrics</h3>
              <div className="space-y-3">
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Gross Margin</span>
                    <span className="text-green-300 font-bold">92%</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Target: Maintain 90%+</div>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">LTV/CAC Ratio</span>
                    <span className="text-blue-300 font-bold">7.2x</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Target: Maintain 5x+</div>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Payback Period</span>
                    <span className="text-purple-300 font-bold">14 months</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Target: Reduce to 12 months</div>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Burn Rate</span>
                    <span className="text-orange-300 font-bold">$62K</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Current: $7K, scaling up</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Financial Milestones & Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-300 font-bold">Q1</span>
              </div>
              <h4 className="text-green-300 font-semibold mb-2">$50K ARR</h4>
              <p className="text-gray-300 text-sm">Initial customer traction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-300 font-bold">Q4</span>
              </div>
              <h4 className="text-blue-300 font-semibold mb-2">$1.2M ARR</h4>
              <p className="text-gray-300 text-sm">Series A readiness</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-300 font-bold">Y2</span>
              </div>
              <h4 className="text-purple-300 font-semibold mb-2">$4.5M ARR</h4>
              <p className="text-gray-300 text-sm">Market validation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-300 font-bold">Y3</span>
              </div>
              <h4 className="text-orange-300 font-semibold mb-2">$12M ARR</h4>
              <p className="text-gray-300 text-sm">Scale achievement</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Success Metrics & KPIs",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Success Metrics & Performance Dashboard</h2>

        <OKRDashboard />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-semibold text-green-300 mb-4">Product Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Model Accuracy</span>
                <span className="text-green-300 font-bold">95.7%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Processing Speed</span>
                <span className="text-blue-300 font-bold">285ms</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">System Uptime</span>
                <span className="text-purple-300 font-bold">99.2%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full w-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">API Response Time</span>
                <span className="text-orange-300 font-bold">120ms</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Business Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Monthly Recurring Revenue</span>
                <span className="text-green-300 font-bold">$15K</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-1/3"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Customer Acquisition Cost</span>
                <span className="text-blue-300 font-bold">$12K</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-2/3"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Customer Lifetime Value</span>
                <span className="text-purple-300 font-bold">$84K</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Gross Revenue Retention</span>
                <span className="text-orange-300 font-bold">95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Customer Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Net Promoter Score</span>
                <span className="text-green-300 font-bold">68</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Customer Satisfaction</span>
                <span className="text-blue-300 font-bold">4.6/5</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-400 h-2 rounded-full w-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Monthly Active Users</span>
                <span className="text-purple-300 font-bold">420</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-400 h-2 rounded-full w-4/5"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">Feature Adoption Rate</span>
                <span className="text-orange-300 font-bold">78%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Strategic KPI Targets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Short-term (6 months)</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">ARR Growth</span>
                  <span className="text-green-300">$50K → $90K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Customer Count</span>
                  <span className="text-blue-300">12 → 25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Model Accuracy</span>
                  <span className="text-purple-300">95.7% → 96.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Team Size</span>
                  <span className="text-orange-300">2 → 5</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Long-term (18 months)</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">ARR Growth</span>
                  <span className="text-green-300">$90K → $180K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Customer Count</span>
                  <span className="text-blue-300">25 → 45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Market Share</span>
                  <span className="text-purple-300">5% → 15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">International</span>
                  <span className="text-orange-300">0% → 20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "Risk Management",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Strategic Risk Management & Mitigation</h2>

        <RiskMatrix />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-900/10 to-red-800/10 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-xl font-semibold text-red-300 mb-4">High-Impact Risks</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-white font-semibold">Competitive Response</h4>
                  <p className="text-gray-400 text-sm mb-2">Large incumbents (MSCI, Bloomberg) add semantic features</p>
                  <div className="text-red-300 text-xs">
                    <strong>Mitigation:</strong> Patent protection, speed to market, deeper specialization
                  </div>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-white font-semibold">Regulatory Changes</h4>
                  <p className="text-gray-400 text-sm mb-2">New regulations could impact our analysis methods</p>
                  <div className="text-orange-300 text-xs">
                    <strong>Mitigation:</strong> Regulatory relationships, compliance-first approach
                  </div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="text-white font-semibold">Market Adoption</h4>
                  <p className="text-gray-400 text-sm mb-2">
                    Slower than expected customer adoption of semantic analysis
                  </p>
                  <div className="text-yellow-300 text-xs">
                    <strong>Mitigation:</strong> Customer education, pilot programs, ROI demonstration
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Technical Risks</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-3">
                  <h4 className="text-white font-semibold text-sm">Model Performance</h4>
                  <p className="text-gray-400 text-xs">Accuracy degradation or false positives</p>
                  <div className="text-blue-300 text-xs mt-1">
                    <strong>Mitigation:</strong> Continuous monitoring, A/B testing, human oversight
                  </div>
                </div>
                <div className="border-l-4 border-teal-500 pl-3">
                  <h4 className="text-white font-semibold text-sm">Scalability Issues</h4>
                  <p className="text-gray-400 text-xs">Infrastructure unable to handle growth</p>
                  <div className="text-teal-300 text-xs mt-1">
                    <strong>Mitigation:</strong> Cloud-native architecture, auto-scaling, load testing
                  </div>
                </div>
                <div className="border-l-4 border-cyan-500 pl-3">
                  <h4 className="text-white font-semibold text-sm">Data Quality</h4>
                  <p className="text-gray-400 text-xs">Poor quality input data affecting results</p>
                  <div className="text-cyan-300 text-xs mt-1">
                    <strong>Mitigation:</strong> Data validation, multiple sources, quality metrics
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/10 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Business Risks</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold">Talent Acquisition</h4>
                  <p className="text-gray-400 text-sm mb-2">Difficulty hiring qualified AI/ML engineers</p>
                  <div className="text-purple-300 text-xs">
                    <strong>Mitigation:</strong> Competitive compensation, equity, remote work, university partnerships
                  </div>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="text-white font-semibold">Customer Concentration</h4>
                  <p className="text-gray-400 text-sm mb-2">Over-reliance on a few large customers</p>
                  <div className="text-pink-300 text-xs">
                    <strong>Mitigation:</strong> Diversified customer base, multiple market segments
                  </div>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-white font-semibold">Funding Risk</h4>
                  <p className="text-gray-400 text-sm mb-2">Inability to raise follow-on funding</p>
                  <div className="text-indigo-300 text-xs">
                    <strong>Mitigation:</strong> Strong metrics, multiple investor relationships, revenue growth
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/10 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Risk Monitoring</h3>
              <div className="space-y-3">
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Risk Assessment Frequency</span>
                    <span className="text-green-300 font-bold">Monthly</span>
                  </div>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Board Risk Review</span>
                    <span className="text-blue-300 font-bold">Quarterly</span>
                  </div>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Contingency Planning</span>
                    <span className="text-purple-300 font-bold">Bi-annual</span>
                  </div>
                </div>
                <div className="bg-[#0f0f17] p-3 rounded border border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Risk Register Updates</span>
                    <span className="text-orange-300 font-bold">Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Risk Response Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-green-300" />
              </div>
              <h4 className="text-green-300 font-semibold mb-2">Avoid</h4>
              <p className="text-gray-300 text-sm">Eliminate risk through strategic decisions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-blue-300" />
              </div>
              <h4 className="text-blue-300 font-semibold mb-2">Mitigate</h4>
              <p className="text-gray-300 text-sm">Reduce probability or impact</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Network className="w-6 h-6 text-purple-300" />
              </div>
              <h4 className="text-purple-300 font-semibold mb-2">Transfer</h4>
              <p className="text-gray-300 text-sm">Share risk through partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-orange-300" />
              </div>
              <h4 className="text-orange-300 font-semibold mb-2">Accept</h4>
              <p className="text-gray-300 text-sm">Monitor and prepare contingencies</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export function StrategyDeck() {
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
            <span className="text-lg font-medium text-white">Strategy Deck</span>
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
                className="flex items-center space-x-2 px-4 py-2 bg-[#0f0f17] hover:bg-[#1a1a2e] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? "bg-[#9d8cff]" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center space-x-2 px-4 py-2 bg-[#0f0f17] hover:bg-[#1a1a2e] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
