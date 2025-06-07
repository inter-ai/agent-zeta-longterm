"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Target, Brain, Network, Play } from "lucide-react"

// Enhanced Memory Timeline Illustration
function MemoryTimelineIllustration() {
  const [selectedNode, setSelectedNode] = useState<number | null>(null)

  const filingNodes = [
    { id: 1, quarter: "Q1 2023", financial: 75, risk: 80, strategy: 90, size: "small", x: 80, overall: "low" },
    { id: 2, quarter: "Q2 2023", financial: 85, risk: 70, strategy: 80, size: "medium", x: 200, overall: "medium" },
    { id: 3, quarter: "Q3 2023", financial: 90, risk: 85, strategy: 75, size: "medium", x: 320, overall: "medium" },
    { id: 4, quarter: "Q4 2023", financial: 60, risk: 65, strategy: 70, size: "large", x: 440, overall: "high" },
    { id: 5, quarter: "Q1 2024", financial: 50, risk: 55, strategy: 60, size: "large", x: 560, overall: "critical" },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">
        AgentZeta Analysis Depth: Tracking Filing Completeness
      </h3>
      <div className="relative h-48 bg-[#0f0f17] rounded p-4">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Timeline base */}
          <line x1="60" y1="120" x2="580" y2="120" stroke="#2d2d3d" strokeWidth="2" />

          {/* Filing nodes with enhanced visualization */}
          {filingNodes.map((node, index) => {
            const radius = node.size === "small" ? 12 : node.size === "medium" ? 16 : 20
            const isSelected = selectedNode === node.id
            const gradientColor =
              node.overall === "critical"
                ? "#ef4444"
                : node.overall === "high"
                  ? "#f59e0b"
                  : node.overall === "medium"
                    ? "#3b82f6"
                    : "#10b981"

            return (
              <g key={node.id}>
                {/* Connection line */}
                <line x1={node.x} y1="120" x2={node.x} y2={120 - radius - 10} stroke="#2d2d3d" strokeWidth="1" />

                {/* Memory node with pulsing animation for high risk */}
                <motion.circle
                  cx={node.x}
                  cy={120 - radius - 10}
                  r={radius}
                  fill={gradientColor}
                  stroke={isSelected ? "#b8a6ff" : "#2d2d3d"}
                  strokeWidth={isSelected ? 3 : 1}
                  className="cursor-pointer"
                  animate={{
                    scale: isSelected ? 1.2 : 1,
                    opacity: node.overall === "critical" ? [0.7, 1, 0.7] : 1,
                  }}
                  transition={{
                    scale: { duration: 0.3 },
                    opacity: { duration: 2, repeat: node.overall === "critical" ? Number.POSITIVE_INFINITY : 0 },
                  }}
                  onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
                />

                {/* Quarter label */}
                <text x={node.x} y="140" textAnchor="middle" className="text-xs fill-gray-400">
                  {node.quarter}
                </text>

                {/* Risk indicator */}
                <text x={node.x} y="155" textAnchor="middle" className="text-xs" fill={gradientColor}>
                  {node.overall.toUpperCase()}
                </text>

                {/* Enhanced pop-out semantic score */}
                {isSelected && (
                  <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <rect
                      x={node.x - 50}
                      y={50}
                      width="100"
                      height="50"
                      rx="6"
                      fill="#0f0f17"
                      stroke="#9d8cff"
                      strokeWidth="2"
                    />
                    <text x={node.x} y="65" textAnchor="middle" className="text-xs fill-[#b8a6ff] font-semibold">
                      ZetaScore
                    </text>
                    <text x={node.x} y="78" textAnchor="middle" className="text-sm fill-white font-bold">
                      {node.financial + node.risk + node.strategy}
                    </text>
                    <text x={node.x} y="88" textAnchor="middle" className="text-xs fill-gray-400">
                      Analysis Depth
                    </text>
                    <text x={node.x} y="98" textAnchor="middle" className="text-xs" fill={gradientColor}>
                      {node.overall} risk
                    </text>
                  </motion.g>
                )}
              </g>
            )
          })}

          {/* Drift trend line */}
          <path
            d="M 80 108 Q 200 105 320 110 Q 440 125 560 140"
            stroke="#ef4444"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,3"
            opacity="0.6"
          />
        </svg>

        <div className="absolute bottom-2 left-4 text-xs text-gray-500">
          Click nodes to view analysis scores • Red line shows depth trend
        </div>
      </div>
    </div>
  )
}

// Enhanced AgentZeta Engine Visualization
function AgentZetaEngineVisualization() {
  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">The AgentZeta Engine: DKG + Agent Orchestration</h3>
      <div className="relative h-80">
        <svg width="100%" height="100%" className="absolute inset-0">
          {/* Central AgentZeta Core */}
          <motion.circle
            cx="300"
            cy="160"
            r="40"
            fill="#9d8cff"
            stroke="#b8a6ff"
            strokeWidth="3"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 20px #9d8cff", "0 0 30px #b8a6ff", "0 0 20px #9d8cff"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <text x="300" y="155" textAnchor="middle" className="text-sm fill-white font-bold">
            AgentZeta
          </text>
          <text x="300" y="170" textAnchor="middle" className="text-xs fill-white">
            Engine
          </text>

          {/* Dynamic Knowledge Graph Layer */}
          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            {/* DKG Nodes */}
            <circle cx="150" cy="80" r="25" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="150" y="75" textAnchor="middle" className="text-xs fill-green-300 font-semibold">
              DKG
            </text>
            <text x="150" y="88" textAnchor="middle" className="text-xs fill-green-300">
              Memory
            </text>

            <circle cx="450" cy="80" r="25" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
            <text x="450" y="75" textAnchor="middle" className="text-xs fill-blue-300 font-semibold">
              Agent
            </text>
            <text x="450" y="88" textAnchor="middle" className="text-xs fill-blue-300">
              Pool
            </text>

            <circle cx="150" cy="240" r="25" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2" />
            <text x="150" y="235" textAnchor="middle" className="text-xs fill-purple-300 font-semibold">
              Semantic
            </text>
            <text x="150" y="248" textAnchor="middle" className="text-xs fill-purple-300">
              Layer
            </text>

            <circle cx="450" cy="240" r="25" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
            <text x="450" y="235" textAnchor="middle" className="text-xs fill-yellow-300 font-semibold">
              Output
            </text>
            <text x="450" y="248" textAnchor="middle" className="text-xs fill-yellow-300">
              Synthesis
            </text>

            {/* Connection lines with data flow animation */}
            <motion.line
              x1="175"
              y1="95"
              x2="260"
              y2="140"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, -10] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.line
              x1="425"
              y1="95"
              x2="340"
              y2="140"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, -10] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.line
              x1="175"
              y1="225"
              x2="260"
              y2="180"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, -10] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.line
              x1="425"
              y1="225"
              x2="340"
              y2="180"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{ strokeDashoffset: [0, -10] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.g>

          {/* Agent recruitment indicators */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {/* Small agent icons being recruited */}
            <circle cx="380" cy="100" r="8" fill="#3b82f6" opacity="0.8" />
            <text x="380" y="104" textAnchor="middle" className="text-xs fill-white">
              A1
            </text>

            <circle cx="400" cy="120" r="8" fill="#10b981" opacity="0.8" />
            <text x="400" y="124" textAnchor="middle" className="text-xs fill-white">
              A2
            </text>

            <circle cx="420" cy="100" r="8" fill="#8b5cf6" opacity="0.8" />
            <text x="420" y="104" textAnchor="middle" className="text-xs fill-white">
              A3
            </text>
          </motion.g>
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="text-[#b8a6ff] font-semibold mb-2">Core Components</h4>
          <ul className="space-y-1 text-gray-300">
            <li>• Dynamic Knowledge Graph (DKG)</li>
            <li>• Agent Orchestration Engine</li>
            <li>• Semantic Reasoning Layer</li>
            <li>• Multi-Modal Output Synthesis</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#b8a6ff] font-semibold mb-2">Key Capabilities</h4>
          <ul className="space-y-1 text-gray-300">
            <li>• Real-time analysis depth detection</li>
            <li>• Dynamic agent recruitment</li>
            <li>• Persistent institutional memory</li>
            <li>• Cross-domain knowledge transfer</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Strategic Moat Visualization
function StrategicMoatVisualization() {
  const moats = [
    { name: "DKG Expertise", strength: 95, description: "Deep knowledge graph architecture", color: "#10b981" },
    { name: "Agent Orchestration", strength: 90, description: "Dynamic agent coordination", color: "#3b82f6" },
    { name: "Financial Domain", strength: 92, description: "SEC filing specialization", color: "#8b5cf6" },
    { name: "Semantic Reasoning", strength: 88, description: "Meaning-based analysis", color: "#f59e0b" },
    { name: "Network Effects", strength: 75, description: "Agent marketplace ecosystem", color: "#ef4444" },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Strategic Moats & Defensibility</h3>
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

// Expansion Roadmap Visualization
function ExpansionRoadmapVisualization() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Financial Mastery",
      duration: "0-18 months",
      focus: "SEC Filings → All Financial Documents",
      color: "#10b981",
      progress: 60,
    },
    {
      phase: "Phase 2",
      title: "Cross-Domain",
      duration: "18-36 months",
      focus: "Healthcare, Legal, Academic Research",
      color: "#3b82f6",
      progress: 20,
    },
    {
      phase: "Phase 3",
      title: "Semantic Web",
      duration: "36+ months",
      focus: "Universal Agent Communication",
      color: "#8b5cf6",
      progress: 5,
    },
  ]

  return (
    <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
      <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Expansion Roadmap: Finance to Semantic Web</h3>
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
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: phase.color }}
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-lg">{phase.title}</h4>
                  <span className="text-gray-400 text-sm">{phase.duration}</span>
                </div>
                <p className="text-gray-300 text-sm mb-2">{phase.focus}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: phase.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${phase.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">{phase.progress}% Complete</div>
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

// Progress and Traction Dashboard
// function ProgressTractionDashboard() {
//   const metrics = [
//     { label: "Current ARR", value: "$50K", target: "$180K", progress: 28, color: "#10b981" },
//     { label: "Customers", value: "8", target: "15", progress: 53, color: "#3b82f6" },
//     { label: "Model Accuracy", value: "95.7%", target: "96%", progress: 99, color: "#8b5cf6" },
//     { label: "Processing Speed", value: "285ms", target: "<300ms", progress: 95, color: "#f59e0b" },
//   ]

//   return (
//     <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
//       <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">Progress & Traction</h3>
//       <div className="grid grid-cols-2 gap-4">
//         {metrics.map((metric, index) => (
//           <motion.div
//             key={metric.label}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-[#0f0f17] p-4 rounded border border-gray-700"
//           >
//             <div className="text-center">
//               <div className="text-2xl font-bold" style={{ color: metric.color }}>
//                 {metric.value}
//               </div>
//               <div className="text-xs text-gray-400 mb-2">{metric.label}</div>
//               <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
//                 <motion.div
//                   className="h-2 rounded-full"
//                   style={{ backgroundColor: metric.color }}
//                   initial={{ width: 0 }}
//                   animate={{ width: `${metric.progress}%` }}
//                   transition={{ duration: 1, delay: index * 0.1 }}
//                 />
//               </div>
//               <div className="text-xs text-gray-500">Target: {metric.target}</div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

interface Slide {
  id: number
  title: string
  content: React.ReactNode
}

const slides: Slide[] = [
  {
    id: 1,
    title: "AgentZeta",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-6">
            <img src="/images/agentzeta-logo.png" alt="AgentZeta Logo" className="h-24 w-auto" />
          </div>
          <h2 className="text-6xl font-bold text-[#b8a6ff] mb-4">AgentZeta</h2>
          <h3 className="text-2xl text-gray-300 font-light">Building Memory for Intelligent Agents</h3>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff] rounded-full"></div>
        <p className="text-lg text-gray-400 max-w-2xl">
          The first platform to give AI agents the ability to understand, remember, and communicate meaning— starting
          with financial documents, evolving into the semantic web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mt-8">
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
            <Brain className="w-12 h-12 text-green-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-green-300 mb-2">Memory</h4>
            <p className="text-gray-300 text-sm">Agents remember and track semantic evolution over time</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
            <Network className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-blue-300 mb-2">Communication</h4>
            <p className="text-gray-300 text-sm">Agents share meaning through semantic protocols</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <Target className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-purple-300 mb-2">Understanding</h4>
            <p className="text-gray-300 text-sm">Deep semantic analysis beyond pattern matching</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Executive Summary",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Executive Summary</h2>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-8 rounded-lg border border-[#9d8cff]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#b8a6ff] mb-3">The Vision</h3>
                <p className="text-gray-300">
                  AgentZeta is building the foundational infrastructure for intelligent agents to understand, remember,
                  and communicate meaning. We start with financial documents where semantic drift has the highest
                  consequence, then expand to become the semantic layer for the entire web.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#b8a6ff] mb-3">The Problem</h3>
                <p className="text-gray-300">
                  Current AI lacks semantic understanding and memory. Agents can't detect when meaning changes over time
                  or communicate that meaning to other agents. This creates blind spots in critical decision-making,
                  especially in regulated industries.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#b8a6ff] mb-3">The Solution</h3>
                <p className="text-gray-300">
                  Our Dynamic Knowledge Graph (DKG) engine gives agents persistent memory and semantic reasoning.
                  Starting with SEC filings, we detect semantic drift that precedes market movements, then expand to
                  create universal agent communication protocols.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#b8a6ff] mb-3">The Opportunity</h3>
                <p className="text-gray-300">
                  $850B market opportunity starting with financial analysis, expanding to healthcare, legal, and
                  academic research. First-mover advantage in semantic drift detection with 18-month technical lead.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#0a0a0f] p-6 rounded-lg border border-green-500/30 text-center">
            <div className="text-3xl font-bold text-green-300">$1.5M</div>
            <div className="text-gray-400 text-sm">Raising Pre-Seed</div>
          </div>
          <div className="bg-[#0a0a0f] p-6 rounded-lg border border-blue-500/30 text-center">
            <div className="text-3xl font-bold text-blue-300">$50K</div>
            <div className="text-gray-400 text-sm">Current ARR</div>
          </div>
          <div className="bg-[#0a0a0f] p-6 rounded-lg border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-300">95.7%</div>
            <div className="text-gray-400 text-sm">Model Accuracy</div>
          </div>
          <div className="bg-[#0a0a0f] p-6 rounded-lg border border-orange-500/30 text-center">
            <div className="text-3xl font-bold text-orange-300">8</div>
            <div className="text-gray-400 text-sm">Paying Customers</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "The Problem",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">The Problem: LLMs Hit a Wall - We Need LLM^n</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Current AI systems are fundamentally limited by single-model thinking. The future requires exponential
            scaling through agent orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-xl font-semibold text-red-300 mb-4">Single LLM Limitations</h3>
              <p className="text-gray-300 mb-4">
                Even the most advanced LLMs hit fundamental limits when analyzing complex documents like SEC filings.
                They can't maintain context, build institutional memory, or coordinate specialized analysis.
              </p>
              <div className="bg-red-900/10 p-4 rounded border border-red-500/20">
                <h4 className="text-red-300 font-semibold text-sm mb-2">The Mathematical Reality</h4>
                <p className="text-gray-400 text-xs">
                  LLM performance scales logarithmically with parameters, but real-world problems require exponential
                  capability growth. We need LLM^n, not just bigger LLMs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 p-6 rounded-lg border border-yellow-500/30">
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">No Institutional Memory</h3>
              <p className="text-gray-300 mb-4">
                AI agents can't remember previous analyses or build on past insights. Each query starts from scratch.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>No temporal understanding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Repeated manual analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Lost institutional knowledge</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Agents Can't Communicate</h3>
              <p className="text-gray-300 mb-4">
                Different AI systems can't share semantic understanding or coordinate their analyses.
              </p>
              <div className="bg-blue-900/10 p-4 rounded border border-blue-500/20">
                <h4 className="text-blue-300 font-semibold text-sm mb-2">The Result</h4>
                <p className="text-gray-400 text-xs">
                  Siloed AI tools that can't build on each other's work, leading to inconsistent analyses and missed
                  connections.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">High-Stakes Consequences</h3>
              <p className="text-gray-300 mb-4">
                In finance, healthcare, and legal domains, missing semantic shifts can lead to:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Missed investment opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Regulatory compliance failures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Strategic blind spots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <MemoryTimelineIllustration />

        <div className="bg-gradient-to-r from-red-900/10 to-yellow-900/10 p-6 rounded-lg border border-red-500/20">
          <p className="text-red-300 text-center text-xl">
            <strong>The Core Issue:</strong> AI agents lack the semantic memory and communication protocols needed for
            institutional intelligence.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "The Big Idea",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">
          The Big Idea: Building LLM^n Through Agent Orchestration
        </h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            AgentZeta gives AI agents the ability to understand, remember, and communicate semantic meaning over time.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-8 rounded-lg border border-[#9d8cff]/20 mb-8">
          <h3 className="text-2xl font-semibold text-[#b8a6ff] mb-6 text-center">The LLM^n Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-300 mb-2">LLM¹</div>
              <div className="text-gray-400 text-sm mb-2">Single Model</div>
              <div className="text-red-300 text-xs">Limited context, no memory</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">LLM²</div>
              <div className="text-gray-400 text-sm mb-2">Multi-Agent</div>
              <div className="text-yellow-300 text-xs">Specialized coordination</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">LLM^n</div>
              <div className="text-gray-400 text-sm mb-2">AgentZeta Platform</div>
              <div className="text-green-300 text-xs">Exponential capability scaling</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-300">
              AgentZeta orchestrates specialized agents with persistent memory to achieve exponential capability growth
              beyond what any single LLM can deliver.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
            <Brain className="w-16 h-16 text-green-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-green-300 mb-4 text-center">Comprehensive Understanding</h3>
            <p className="text-gray-300 mb-4 text-center">
              Agents understand meaning, not just patterns. They detect when "robust supply chain" becomes "challenging
              supply chain."
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Intent detection</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Semantic drift analysis</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Context preservation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
            <Network className="w-16 h-16 text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-300 mb-4 text-center">Persistent Memory</h3>
            <p className="text-gray-300 mb-4 text-center">
              Dynamic Knowledge Graphs that grow and evolve, tracking how meaning changes across documents and time.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Temporal tracking</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Cross-document connections</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Institutional knowledge</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <Target className="w-16 h-16 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">Agent Communication</h3>
            <p className="text-gray-300 mb-4 text-center">
              Standardized semantic protocols that let agents share meaning and coordinate analyses.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Semantic protocols</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Knowledge sharing</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Coordinated intelligence</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-8 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-2xl font-semibold text-[#b8a6ff] mb-6 text-center">Why This Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">For Financial Institutions</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Detect risk language changes before market impact</li>
                <li>• Track regulatory compliance evolution</li>
                <li>• Build institutional memory of market patterns</li>
                <li>• Enable predictive risk assessment</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">For the Future</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Foundation for semantic web infrastructure</li>
                <li>• Universal agent communication protocols</li>
                <li>• Cross-domain knowledge transfer</li>
                <li>• Coordinated AI decision-making</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#9d8cff]/20 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/30">
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff]">
            We're not just building better AI tools—we're building the memory layer for intelligent agents.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "How It Works",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">How It Works: From Question to Multi-Modal Output</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-4 rounded-lg border border-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-300 mb-3 flex items-center">
              <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2 text-sm">
                1
              </span>
              Question Input
            </h3>
            <div className="bg-[#0f0f17] p-3 rounded border border-blue-500/20 mb-3">
              <p className="text-gray-300 text-sm italic">
                "Provide a comprehensive analysis of Tesla's Q4 2023 10-K filing including all risk factors, financial
                metrics, and strategic initiatives"
              </p>
            </div>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>• Natural language processing</li>
              <li>• Intent classification</li>
              <li>• Semantic parsing</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-4 rounded-lg border border-purple-500/30">
            <h3 className="text-lg font-semibold text-purple-300 mb-3 flex items-center">
              <span className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-2 text-sm">
                2
              </span>
              DKG Query
            </h3>
            <div className="bg-[#0f0f17] p-3 rounded border border-purple-500/20 mb-3">
              <p className="text-gray-300 text-sm">Dynamic Knowledge Graph searches for relevant semantic patterns</p>
            </div>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>• Temporal pattern matching</li>
              <li>• Cross-document linking</li>
              <li>• Semantic relationship mapping</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-4 rounded-lg border border-green-500/30">
            <h3 className="text-lg font-semibold text-green-300 mb-3 flex items-center">
              <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-2 text-sm">
                3
              </span>
              Agent Orchestration
            </h3>
            <div className="bg-[#0f0f17] p-3 rounded border border-green-500/20 mb-3">
              <p className="text-gray-300 text-sm">Specialized agents analyze different aspects of the question</p>
            </div>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>• Risk analysis agent</li>
              <li>• Temporal comparison agent</li>
              <li>• Semantic drift agent</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-4 rounded-lg border border-orange-500/30">
            <h3 className="text-lg font-semibold text-orange-300 mb-3 flex items-center">
              <span className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center mr-2 text-sm">
                4
              </span>
              Memory Update
            </h3>
            <div className="bg-[#0f0f17] p-3 rounded border border-orange-500/20 mb-3">
              <p className="text-gray-300 text-sm">Results stored in DKG for future queries and pattern detection</p>
            </div>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>• Knowledge graph update</li>
              <li>• Pattern reinforcement</li>
              <li>• Semantic link creation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 p-4 rounded-lg border border-teal-500/30">
            <h3 className="text-lg font-semibold text-teal-300 mb-3 flex items-center">
              <span className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center mr-2 text-sm">
                5
              </span>
              Multi-Modal Output
            </h3>
            <div className="bg-[#0f0f17] p-3 rounded border border-teal-500/20 mb-3">
              <p className="text-gray-300 text-sm">Comprehensive response with text, charts, and visualizations</p>
            </div>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>• Semantic analysis</li>
              <li>• Trend visualizations</li>
              <li>• Risk assessments</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0f] p-4 rounded border border-blue-500/30">
            <h4 className="text-blue-300 font-semibold mb-3 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              Text Analysis
            </h4>
            <div className="space-y-3">
              <div className="bg-blue-900/20 p-3 rounded border border-blue-500/20">
                <div className="text-blue-300 font-semibold text-sm mb-1">Semantic Shift Detected</div>
                <div className="text-gray-300 text-xs">
                  "Robust supply chain" → "Challenging supply chain" (Q2 to Q3 2023)
                </div>
              </div>
              <div className="bg-blue-900/20 p-3 rounded border border-blue-500/20">
                <div className="text-blue-300 font-semibold text-sm mb-1">Risk Language Evolution</div>
                <div className="text-gray-300 text-xs">Risk terminology became 23% more cautious over 4 quarters</div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0f] p-4 rounded border border-purple-500/30">
            <h4 className="text-purple-300 font-semibold mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Key Metrics
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-red-400">+42%</div>
                <div className="text-xs text-gray-400">Risk Score</div>
              </div>
              <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-yellow-400">-23%</div>
                <div className="text-xs text-gray-400">Confidence</div>
              </div>
              <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-orange-400">2</div>
                <div className="text-xs text-gray-400">New Risks</div>
              </div>
              <div className="bg-purple-900/20 p-3 rounded border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-blue-400">0.73</div>
                <div className="text-xs text-gray-400">Drift Score</div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0f] p-4 rounded border border-green-500/30">
            <h4 className="text-green-300 font-semibold mb-3 flex items-center">
              <Network className="w-5 h-5 mr-2" />
              Trend Analysis
            </h4>
            <div className="relative h-32 bg-[#0f0f17] rounded p-2">
              <svg width="100%" height="100%" className="absolute inset-0">
                <path
                  d="M 20 80 L 80 75 L 140 70 L 200 50 L 260 35"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="80" r="4" fill="#10b981" />
                <circle cx="80" cy="75" r="4" fill="#10b981" />
                <circle cx="140" cy="70" r="4" fill="#f59e0b" />
                <circle cx="200" cy="50" r="4" fill="#ef4444" />
                <circle cx="260" cy="35" r="4" fill="#ef4444" />
              </svg>
              <div className="absolute top-2 left-2 text-xs text-green-300">Risk Trend: 65 → 92</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Key Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">Semantic Understanding</div>
              <p className="text-gray-300 text-sm">
                Goes beyond keywords to understand meaning, context, and implications
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">Persistent Memory</div>
              <p className="text-gray-300 text-sm">
                Builds knowledge over time, connecting insights across documents and periods
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">Agent Collaboration</div>
              <p className="text-gray-300 text-sm">
                Multiple specialized agents work together to provide comprehensive answers
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "The AgentZeta Engine",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">The AgentZeta Engine: DKG + Agent Orchestration</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Our Dynamic Knowledge Graph engine orchestrates specialized LLMs to achieve LLM^n capabilities.
          </p>
        </div>

        <AgentZetaEngineVisualization />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Dynamic Knowledge Graph (DKG)</h3>
              <p className="text-gray-300 mb-4">
                Unlike static knowledge bases, our DKG evolves and learns from every interaction.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Temporal relationship tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Semantic drift detection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Cross-document pattern recognition</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Institutional memory preservation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Agent Orchestration</h3>
              <p className="text-gray-300 mb-4">
                Intelligent routing of queries to specialized agents based on semantic content and complexity.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Dynamic agent recruitment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Parallel processing coordination</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Result synthesis and validation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Semantic Reasoning Layer</h3>
              <p className="text-gray-300 mb-4">
                Advanced semantic processing that understands intent, context, and meaning evolution.
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Intent Classification</h4>
                  <p className="text-gray-400 text-xs">
                    Understands what users really want to know, not just what they ask
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Context Preservation</h4>
                  <p className="text-gray-400 text-xs">
                    Maintains semantic context across multiple document types and time periods
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Meaning Evolution</h4>
                  <p className="text-gray-400 text-xs">
                    Tracks how concepts and language change over time within organizations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Technical Advantages</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Sub-300ms Response Time</div>
                    <div className="text-gray-400 text-xs">Real-time semantic analysis at scale</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">95.7% Accuracy Rate</div>
                    <div className="text-gray-400 text-xs">Validated on financial document analysis</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Horizontal Scalability</div>
                    <div className="text-gray-400 text-xs">Agent pool scales with demand</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Why This Architecture Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Brain className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Institutional Memory</h4>
              <p className="text-gray-300 text-sm">
                Unlike stateless AI, our system builds and maintains knowledge over time
              </p>
            </div>
            <div className="text-center">
              <Network className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Semantic Communication</h4>
              <p className="text-gray-300 text-sm">
                Agents can share meaning and coordinate analyses across different domains
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Predictive Intelligence</h4>
              <p className="text-gray-300 text-sm">
                Semantic drift detection enables prediction of market and regulatory changes
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#b8a6ff] mx-auto mb-3">LLM^n</div>
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Exponential Scaling</h4>
              <p className="text-gray-300 text-sm">
                Each specialized agent amplifies the others, creating exponential rather than linear capability growth
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Strategic Moat",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Strategic Moat: 18-Month Technical Lead</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Our combination of DKG expertise, semantic reasoning, and agent orchestration creates multiple defensive
            layers.
          </p>
        </div>

        <StrategicMoatVisualization />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Technical Moats</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">DKG Architecture</h4>
                  <p className="text-gray-400 text-xs">
                    18 months of R&D in dynamic knowledge graphs with temporal reasoning
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Semantic Drift Detection</h4>
                  <p className="text-gray-400 text-xs">
                    Proprietary algorithms for detecting meaning changes in institutional documents
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Agent Orchestration</h4>
                  <p className="text-gray-400 text-xs">
                    Advanced coordination protocols for multi-agent semantic analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Data Moats</h3>
              <p className="text-gray-300 mb-4">
                Every query strengthens our semantic understanding and competitive position.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Proprietary semantic patterns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Institutional knowledge graphs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Temporal drift signatures</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Cross-domain transfer learning</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Network Effects</h3>
              <p className="text-gray-300 mb-4">
                Agent marketplace creates powerful network effects and switching costs.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-300 text-xs">1</span>
                  </div>
                  <span className="text-gray-300 text-sm">More agents → Better semantic coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-300 text-xs">2</span>
                  </div>
                  <span className="text-gray-300 text-sm">Better coverage → More customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-300 text-xs">3</span>
                  </div>
                  <span className="text-gray-300 text-sm">More customers → Attract developers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-300 text-xs">4</span>
                  </div>
                  <span className="text-gray-300 text-sm">More developers → More agents</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">Competitive Response Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">OpenAI/Anthropic</span>
                  <span className="text-orange-300 font-bold">18+ months</span>
                </div>
                <div className="text-xs text-gray-400">
                  Would need to rebuild from scratch: DKG + agent orchestration + semantic reasoning
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Traditional FinTech</span>
                  <span className="text-red-300 font-bold">24+ months</span>
                </div>
                <div className="text-xs text-gray-400">Lacks AI expertise and semantic understanding capabilities</div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Big Tech (Google/Microsoft)</span>
                  <span className="text-yellow-300 font-bold">12+ months</span>
                </div>
                <div className="text-xs text-gray-400">
                  Has resources but lacks domain focus and institutional knowledge
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Why We Win</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">First-Mover Advantage</div>
              <p className="text-gray-300 text-sm">
                First to solve semantic drift detection in institutional documents
              </p>
            </div>
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">Technical Depth</div>
              <p className="text-gray-300 text-sm">Deep expertise in DKG, semantic reasoning, and agent coordination</p>
            </div>
            <div className="text-center">
              <div className="text-[#b8a6ff] font-semibold mb-2">Platform Strategy</div>
              <p className="text-gray-300 text-sm">Building ecosystem effects from day one with agent marketplace</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Expansion Strategy",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">Expansion Strategy: Finance to Semantic Web</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            Our path from vertical financial AI to horizontal semantic infrastructure for all intelligent agents.
          </p>
        </div>

        <ExpansionRoadmapVisualization />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-semibold text-green-300 mb-4">Phase 1: Financial Mastery</h3>
            <p className="text-gray-300 mb-4">Dominate financial document analysis with semantic drift detection.</p>
            <div className="space-y-3">
              <div className="bg-[#0f0f17] p-3 rounded border border-green-500/20">
                <h4 className="text-green-300 font-semibold text-sm mb-1">Current Focus</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• SEC 10-K, 10-Q, 8-K filings</li>
                  <li>• Earnings call transcripts</li>
                  <li>• Risk language evolution</li>
                  <li>• Regulatory compliance tracking</li>
                </ul>
              </div>
              <div className="bg-[#0f0f17] p-3 rounded border border-green-500/20">
                <h4 className="text-green-300 font-semibold text-sm mb-1">Expansion Within Finance</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Credit agreements and loan docs</li>
                  <li>• Insurance policy analysis</li>
                  <li>• M&A due diligence</li>
                  <li>• ESG reporting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">Phase 2: Cross-Domain Transfer</h3>
            <p className="text-gray-300 mb-4">Apply proven semantic analysis to adjacent regulated industries.</p>
            <div className="space-y-3">
              <div className="bg-[#0f0f17] p-3 rounded border border-blue-500/20">
                <h4 className="text-blue-300 font-semibold text-sm mb-1">Healthcare & Life Sciences</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• FDA submissions and approvals</li>
                  <li>• Clinical trial documentation</li>
                  <li>• Drug safety monitoring</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </div>
              <div className="bg-[#0f0f17] p-3 rounded border border-blue-500/20">
                <h4 className="text-blue-300 font-semibold text-sm mb-1">Legal & Government</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Court filings and decisions</li>
                  <li>• Regulatory policy changes</li>
                  <li>• Contract analysis</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Phase 3: Semantic Web Infrastructure</h3>
            <p className="text-gray-300 mb-4">Universal agent communication protocols for the semantic web.</p>
            <div className="space-y-3">
              <div className="bg-[#0f0f17] p-3 rounded border border-purple-500/20">
                <h4 className="text-purple-300 font-semibold text-sm mb-1">Universal Protocols</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Agent-to-agent communication</li>
                  <li>• Semantic meaning exchange</li>
                  <li>• Cross-domain knowledge transfer</li>
                  <li>• Coordinated decision making</li>
                </ul>
              </div>
              <div className="bg-[#0f0f17] p-3 rounded border border-purple-500/20">
                <h4 className="text-purple-300 font-semibold text-sm mb-1">Global Impact</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Government policy analysis</li>
                  <li>• Scientific research acceleration</li>
                  <li>• Innovation coordination</li>
                  <li>• Global knowledge synthesis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Market Opportunity by Phase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">$120B</div>
              <div className="text-gray-400 text-sm mb-2">Financial Services AI</div>
              <div className="text-green-300 text-xs">Phase 1 Target Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">$730B</div>
              <div className="text-gray-400 text-sm mb-2">Cross-Domain Expansion</div>
              <div className="text-blue-300 text-xs">Healthcare + Legal + Gov</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">$2T+</div>
              <div className="text-gray-400 text-sm mb-2">Semantic Web Infrastructure</div>
              <div className="text-purple-300 text-xs">Universal AI Communication</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
            <h3 className="text-xl font-semibold text-orange-300 mb-4">Why This Strategy Works</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-orange-300 text-xs">1</span>
                </div>
                <div>
                  <div className="font-semibold">Proven Technology Foundation</div>
                  <div className="text-gray-400 text-xs">Success in finance validates our semantic approach</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-orange-300 text-xs">2</span>
                </div>
                <div>
                  <div className="font-semibold">Similar Document Structures</div>
                  <div className="text-gray-400 text-xs">Regulated industries share common patterns</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-orange-300 text-xs">3</span>
                </div>
                <div>
                  <div className="font-semibold">Network Effects Acceleration</div>
                  <div className="text-gray-400 text-xs">Each domain strengthens the overall platform</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 p-6 rounded-lg border border-teal-500/30">
            <h3 className="text-xl font-semibold text-teal-300 mb-4">Competitive Timeline</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">AgentZeta Phase 1</span>
                <span className="text-teal-300 font-bold">Now - 18mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">Competitors Enter Finance</span>
                <span className="text-yellow-300 font-bold">12-18mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">AgentZeta Phase 2</span>
                <span className="text-teal-300 font-bold">18-36mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-sm">Competitors Cross-Domain</span>
                <span className="text-red-300 font-bold">36+ mo</span>
              </div>
              <div className="text-xs text-gray-400 mt-3">Our 18-month head start compounds across domains</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Semantic Web Vision",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">
          The Semantic Web Vision: Universal Agent Communication
        </h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            AgentZeta becomes the foundational layer for how AI agents understand, communicate, and coordinate across
            the entire web.
          </p>
        </div>

        <div className="bg-[#0a0a0f] p-6 rounded-lg border border-[#9d8cff]/30">
          <h3 className="text-lg font-semibold text-[#b8a6ff] mb-4">The Semantic Web Architecture</h3>
          <div className="relative h-80">
            <svg width="100%" height="100%" className="absolute inset-0">
              {/* Central AgentZeta Hub */}
              <motion.circle
                cx="400"
                cy="160"
                r="40"
                fill="#9d8cff"
                stroke="#b8a6ff"
                strokeWidth="3"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <text x="400" y="155" textAnchor="middle" className="text-sm fill-white font-bold">
                AgentZeta
              </text>
              <text x="400" y="170" textAnchor="middle" className="text-xs fill-white">
                Semantic Layer
              </text>

              {/* Connected Domains */}
              {[
                { x: 200, y: 80, label: "Finance", color: "#10b981", agents: ["Risk", "ESG", "M&A"] },
                { x: 600, y: 80, label: "Healthcare", color: "#3b82f6", agents: ["FDA", "Clinical", "Safety"] },
                { x: 200, y: 240, label: "Legal", color: "#8b5cf6", agents: ["Contract", "Compliance", "Policy"] },
                { x: 600, y: 240, label: "Research", color: "#f59e0b", agents: ["Academic", "Patent", "Innovation"] },
                { x: 400, y: 60, label: "Government", color: "#ef4444", agents: ["Regulatory", "Policy", "Public"] },
                {
                  x: 400,
                  y: 260,
                  label: "Enterprise",
                  color: "#06b6d4",
                  agents: ["Operations", "Strategy", "Analytics"],
                },
              ].map((domain, index) => (
                <g key={domain.label}>
                  <motion.circle
                    cx={domain.x}
                    cy={domain.y}
                    r="30"
                    fill={domain.color}
                    fillOpacity="0.2"
                    stroke={domain.color}
                    strokeWidth="2"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <text x={domain.x} y={domain.y - 5} textAnchor="middle" className="text-sm fill-white font-bold">
                    {domain.label}
                  </text>
                  <text x={domain.x} y={domain.y + 8} textAnchor="middle" className="text-xs fill-gray-300">
                    Agents
                  </text>

                  {/* Agent indicators */}
                  {domain.agents.map((agent, agentIndex) => (
                    <motion.circle
                      key={agent}
                      cx={domain.x + (agentIndex - 1) * 15}
                      cy={domain.y + 20}
                      r="4"
                      fill={domain.color}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 1.5, delay: agentIndex * 0.2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  ))}

                  {/* Connection lines with semantic data flow */}
                  <motion.line
                    x1={domain.x}
                    y1={domain.y}
                    x2="400"
                    y2="160"
                    stroke={domain.color}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    animate={{
                      strokeDashoffset: [0, -10],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{ duration: 2, delay: index * 0.3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </g>
              ))}

              {/* Semantic data packets */}
              <motion.g
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transformOrigin: "400px 160px" }}
              >
                <circle cx="450" cy="160" r="3" fill="#b8a6ff" opacity="0.8" />
                <circle cx="350" cy="160" r="3" fill="#b8a6ff" opacity="0.8" />
                <circle cx="400" cy="110" r="3" fill="#b8a6ff" opacity="0.8" />
                <circle cx="400" cy="210" r="3" fill="#b8a6ff" opacity="0.8" />
              </motion.g>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Universal Semantic Protocols</h3>
              <p className="text-gray-300 mb-4">Standardized ways for agents to share meaning, not just data.</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Semantic meaning exchange</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Context preservation across domains</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Intent translation and routing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Coordinated decision making</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Cross-Domain Intelligence</h3>
              <p className="text-gray-300 mb-4">Insights from one domain enhance understanding in others.</p>
              <div className="space-y-3">
                <div className="bg-green-900/10 p-3 rounded border border-green-500/20">
                  <h4 className="text-green-300 font-semibold text-sm mb-1">Example: ESG Compliance</h4>
                  <p className="text-gray-400 text-xs">
                    Financial risk agents share insights with environmental compliance agents for comprehensive ESG
                    analysis.
                  </p>
                </div>
                <div className="bg-green-900/10 p-3 rounded border border-green-500/20">
                  <h4 className="text-green-300 font-semibold text-sm mb-1">Example: Drug Approval</h4>
                  <p className="text-gray-400 text-xs">
                    Healthcare agents coordinate with financial agents to assess market impact of FDA decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Global Knowledge Synthesis</h3>
              <p className="text-gray-300 mb-4">
                The semantic web enables unprecedented coordination of human knowledge.
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Scientific Research Acceleration</h4>
                  <p className="text-gray-400 text-xs">
                    Agents coordinate across disciplines to accelerate discovery and innovation
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Policy Impact Analysis</h4>
                  <p className="text-gray-400 text-xs">
                    Government agents share regulatory insights with industry agents for comprehensive impact assessment
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Global Risk Monitoring</h4>
                  <p className="text-gray-400 text-xs">
                    Coordinated monitoring of systemic risks across financial, environmental, and social domains
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">The Network Effect</h3>
              <p className="text-gray-300 mb-4">
                Each new domain that connects exponentially increases value for all participants.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300 text-sm">Connected Domains</span>
                  <span className="text-orange-300 font-bold">Exponential Value</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full w-full"></div>
                </div>
                <p className="text-gray-400 text-xs">6 domains connected = 30 potential agent collaboration pathways</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">The Ultimate Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Brain className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Collective Intelligence</h4>
              <p className="text-gray-300 text-sm">
                The sum of all connected agents becomes greater than its parts, creating unprecedented intelligence
              </p>
            </div>
            <div className="text-center">
              <Network className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Global Coordination</h4>
              <p className="text-gray-300 text-sm">
                Agents coordinate across institutions, industries, and nations for optimal decision-making
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Semantic Foundation</h4>
              <p className="text-gray-300 text-sm">
                AgentZeta becomes the foundational layer that enables all future AI innovation and coordination
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#9d8cff]/20 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/30">
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff] mb-4">
            We're not just building a product—we're building the operating system for intelligent civilization.
          </p>
          <p className="text-gray-400">
            AgentZeta starts with financial documents but evolves into the semantic backbone that connects all human
            knowledge and AI intelligence.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "The Team",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">The Team: Recursive Systems Thinkers</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            We combine deep AI expertise with systems thinking and semantic infrastructure experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
                  <img src="/images/tim-nguyen.png" alt="Tim Nguyen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Tim Nguyen</h3>
                  <p className="text-blue-300 text-sm">Founder & CEO</p>
                  <p className="text-gray-300 text-xs">Stanford CS • Former McKinsey</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-blue-300 font-semibold text-sm mb-1">Vision & Strategy</h4>
                  <p className="text-gray-400 text-xs">
                    Recognized the semantic drift problem while analyzing financial documents at McKinsey. Led the
                    vision for agent memory and communication protocols.
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 font-semibold text-sm mb-1">Key Contributions</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Semantic web architecture design</li>
                    <li>• Agent marketplace strategy</li>
                    <li>• Customer development and partnerships</li>
                    <li>• Product vision and roadmap</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500">
                  <img src="/images/hakki.png" alt="Hakki" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Hakikat Singh</h3>
                  <p className="text-purple-300 text-sm">CTO & Co-founder</p>
                  <p className="text-gray-300 text-xs">MIT EECS • Former Google</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-purple-300 font-semibold text-sm mb-1">Backend Systems Architecture</h4>
                  <p className="text-gray-400 text-xs">
                    Built large-scale distributed systems at Google. Designed the DKG engine architecture and agent
                    orchestration framework.
                  </p>
                </div>
                <div>
                  <h4 className="text-purple-300 font-semibold text-sm mb-1">Key Contributions</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Dynamic Knowledge Graph engine</li>
                    <li>• Scalable agent orchestration</li>
                    <li>• Real-time semantic processing</li>
                    <li>• Infrastructure and DevOps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-green-500">
                  <img src="/images/jagan-individual.png" alt="Jagan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Jagan Peravali</h3>
                  <p className="text-green-300 text-sm">Head of AI</p>
                  <p className="text-gray-300 text-xs">CMU ML • Former Microsoft</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-green-300 font-semibold text-sm mb-1">Agent Architecture & ML</h4>
                  <p className="text-gray-400 text-xs">
                    PhD in Machine Learning from CMU. Specialized in multi-agent systems and semantic reasoning. Led AI
                    research at Microsoft.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-300 font-semibold text-sm mb-1">Key Contributions</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Semantic drift detection algorithms</li>
                    <li>• Multi-agent coordination protocols</li>
                    <li>• ML model optimization</li>
                    <li>• Research and development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 p-6 rounded-lg border border-teal-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-teal-500">
                  <img src="/images/minh-individual.png" alt="Minh" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Minh Nguyen</h3>
                  <p className="text-teal-300 text-sm">Head of Engineering</p>
                  <p className="text-gray-300 text-xs">UC Berkeley • Former Amazon</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-teal-300 font-semibold text-sm mb-1">Full-Stack & Platform Engineering</h4>
                  <p className="text-gray-400 text-xs">
                    Built scalable platforms at Amazon. Expert in full-stack development, API design, and developer
                    experience.
                  </p>
                </div>
                <div>
                  <h4 className="text-teal-300 font-semibold text-sm mb-1">Key Contributions</h4>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• Agent marketplace platform</li>
                    <li>• Developer SDK and APIs</li>
                    <li>• Frontend and user experience</li>
                    <li>• Platform reliability and scaling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
          <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">Why This Team Wins</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Brain className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Systems Thinking</h4>
              <p className="text-gray-300 text-sm">
                We understand that the future of AI is about intelligent systems, not just better models
              </p>
            </div>
            <div className="text-center">
              <Network className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Semantic Expertise</h4>
              <p className="text-gray-300 text-sm">
                Deep understanding of semantic reasoning, knowledge graphs, and meaning representation
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-[#b8a6ff] mx-auto mb-3" />
              <h4 className="text-[#b8a6ff] font-semibold mb-2">Execution Track Record</h4>
              <p className="text-gray-300 text-sm">
                Proven ability to build and scale complex AI systems at top technology companies
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
            <h3 className="text-xl font-semibold text-orange-300 mb-4">Advisors & Investors</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Dr. Sarah Chen</h4>
                <p className="text-gray-400 text-xs">Former Head of AI at Goldman Sachs • Stanford AI Lab</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Michael Rodriguez</h4>
                <p className="text-gray-400 text-xs">Former VP Engineering at Palantir • Semantic systems expert</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-white font-semibold text-sm">Lisa Park</h4>
                <p className="text-gray-400 text-xs">
                  Former Partner at Andreessen Horowitz • Enterprise AI investments
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-6 rounded-lg border border-gray-500/30">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Team Culture & Values</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#9d8cff]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#b8a6ff] text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Recursive Thinking</div>
                  <div className="text-gray-400 text-xs">We build systems that improve themselves</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#9d8cff]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#b8a6ff] text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Long-term Vision</div>
                  <div className="text-gray-400 text-xs">Building for the next decade of AI</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#9d8cff]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#b8a6ff] text-xs">✓</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Customer Obsession</div>
                  <div className="text-gray-400 text-xs">Solving real problems with measurable impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#9d8cff]/20 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/30">
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff] mb-4">
            We're not just building another AI company—we're building the foundation for intelligent civilization.
          </p>
          <p className="text-gray-400">
            Our team combines the technical depth to solve hard problems with the vision to see where AI is heading.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "The Ask",
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-white text-center">The Ask: Join Us in Building the Future</h2>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-light">
            We're seeking $1.5M in pre-seed funding to accelerate our path from financial AI to semantic web
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Investment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Round:</span>
                  <span className="text-blue-300 font-bold">Pre-Seed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Amount:</span>
                  <span className="text-blue-300 font-bold">$1.5M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Valuation:</span>
                  <span className="text-blue-300 font-bold">$8M pre-money</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Runway:</span>
                  <span className="text-blue-300 font-bold">24 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Use of Funds:</span>
                  <span className="text-blue-300 font-bold">Team + Product + GTM</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 p-6 rounded-lg border border-green-500/30">
              <h3 className="text-xl font-semibold text-green-300 mb-4">Use of Funds Breakdown</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">Engineering Team (60%)</span>
                    <span className="text-green-300 font-bold">$900K</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-[60%]"></div>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">5 additional engineers, AI researchers</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">Product Development (25%)</span>
                    <span className="text-green-300 font-bold">$375K</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-[25%]"></div>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Agent marketplace, SDK, infrastructure</p>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">Go-to-Market (15%)</span>
                    <span className="text-green-300 font-bold">$225K</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full w-[15%]"></div>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Sales, marketing, partnerships</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">24-Month Milestones</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Month 6: Agent Marketplace</h4>
                  <p className="text-gray-400 text-xs">100+ developers, 50+ agents, SDK adoption</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Month 12: $500K ARR</h4>
                  <p className="text-gray-400 text-xs">50+ customers, financial document mastery</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Month 18: Cross-Domain</h4>
                  <p className="text-gray-400 text-xs">Healthcare and legal verticals launched</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-white font-semibold text-sm">Month 24: Series A Ready</h4>
                  <p className="text-gray-400 text-xs">$2M ARR, proven cross-domain expansion</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 p-6 rounded-lg border border-orange-500/30">
              <h3 className="text-xl font-semibold text-orange-300 mb-4">What We Offer Investors</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 text-xs">1</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">First-Mover Advantage</div>
                    <div className="text-gray-400 text-xs">18-month technical lead in semantic drift detection</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 text-xs">2</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Massive Market Opportunity</div>
                    <div className="text-gray-400 text-xs">$850B+ addressable market across domains</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 text-xs">3</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Network Effects Platform</div>
                    <div className="text-gray-400 text-xs">Agent marketplace creates defensible moats</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <span className="text-orange-300 text-xs">4</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Proven Team & Traction</div>
                    <div className="text-gray-400 text-xs">$50K ARR, 95.7% accuracy, customer validation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#9d8cff]/10 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/20">
            <h3 className="text-xl font-semibold text-[#b8a6ff] mb-4 text-center">The Opportunity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">10x</div>
                <div className="text-gray-400 text-sm mb-2">Revenue Growth Potential</div>
                <div className="text-green-300 text-xs">$50K → $500K ARR in 12 months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300">100x</div>
                <div className="text-gray-400 text-sm mb-2">Market Expansion</div>
                <div className="text-blue-300 text-xs">Finance → Cross-domain platform</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">1000x</div>
                <div className="text-gray-400 text-sm mb-2">Vision Scale</div>
                <div className="text-purple-300 text-xs">Semantic web infrastructure</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 p-6 rounded-lg border border-teal-500/30">
              <h3 className="text-xl font-semibold text-teal-300 mb-4">Investor Profile</h3>
              <p className="text-gray-300 mb-4">We're looking for investors who:</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Understand the semantic web opportunity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Have experience with platform businesses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Can provide strategic guidance and connections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Believe in long-term vision and systems thinking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-6 rounded-lg border border-gray-500/30">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Next Steps</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#9d8cff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#b8a6ff] text-xs">1</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Demo & Deep Dive</div>
                    <div className="text-gray-400 text-xs">Live platform demo and technical discussion</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#9d8cff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#b8a6ff] text-xs">2</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Customer References</div>
                    <div className="text-gray-400 text-xs">Speak with current customers and partners</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#9d8cff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#b8a6ff] text-xs">3</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Due Diligence</div>
                    <div className="text-gray-400 text-xs">Technical, financial, and market validation</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#9d8cff]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#b8a6ff] text-xs">4</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Partnership</div>
                    <div className="text-gray-400 text-xs">Join us in building the semantic web</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-[#9d8cff]/20 to-[#b8a6ff]/10 p-6 rounded-lg border border-[#9d8cff]/30">
            <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9d8cff] to-[#b8a6ff] mb-4">
              This is more than an investment—it's a chance to shape the future of AI.
            </p>
            <p className="text-gray-400 mb-4">
              AgentZeta will become the foundational layer that enables the next generation of intelligent systems.
            </p>
            <div className="text-lg text-[#b8a6ff] font-semibold">Join us in building the semantic web.</div>
          </div>
        </div>
      </div>
    ),
  },
]

export function PitchDeck() {
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
            <span className="text-lg font-medium text-white">Pitch Deck</span>
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
