"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface DocumentChange {
  id: string
  originalText: string
  modifiedText: string
  changeType: "intent-shift" | "meaning-drift" | "scope-change" | "liability-shift"
  description: string
  severity: "low" | "medium" | "high"
  position: { x: number; y: number }
  targetPosition: { x: number; y: number }
}

const documentChanges: DocumentChange[] = [
  {
    id: "interest-rate",
    originalText: "fixed annual interest rate of 5.5%",
    modifiedText: "variable annual interest rate starting at 5.5%",
    changeType: "intent-shift",
    description: "Changed from fixed to variable rate - significant financial impact",
    severity: "high",
    position: { x: 200, y: 180 },
    targetPosition: { x: 600, y: 180 },
  },
  {
    id: "payment-terms",
    originalText: "monthly payments of $2,500",
    modifiedText: "monthly payments of $2,500 or more at lender's discretion",
    changeType: "scope-change",
    description: "Added discretionary payment increase clause",
    severity: "medium",
    position: { x: 180, y: 280 },
    targetPosition: { x: 580, y: 280 },
  },
  {
    id: "default-clause",
    originalText: "30-day grace period for late payments",
    modifiedText: "15-day grace period for late payments",
    changeType: "liability-shift",
    description: "Reduced grace period increases default risk",
    severity: "high",
    position: { x: 220, y: 380 },
    targetPosition: { x: 620, y: 380 },
  },
  {
    id: "termination",
    originalText: "either party may terminate with 60 days notice",
    modifiedText: "lender may terminate with 30 days notice, borrower requires 90 days",
    changeType: "meaning-drift",
    description: "Asymmetric termination rights favor lender",
    severity: "medium",
    position: { x: 190, y: 480 },
    targetPosition: { x: 590, y: 480 },
  },
]

function CurvedArrow({
  start,
  end,
  changeType,
  description,
  severity,
}: {
  start: { x: number; y: number }
  end: { x: number; y: number }
  changeType: string
  description: string
  severity: string
}) {
  const midX = (start.x + end.x) / 2
  const midY = (start.y + end.y) / 2 - 40

  const pathD = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`

  const getColor = () => {
    switch (severity) {
      case "high":
        return "#ef4444"
      case "medium":
        return "#f59e0b"
      case "low":
        return "#10b981"
      default:
        return "#6b7280"
    }
  }

  const getChangeTypeIcon = () => {
    switch (changeType) {
      case "intent-shift":
        return "⚠️"
      case "meaning-drift":
        return "🔄"
      case "scope-change":
        return "📏"
      case "liability-shift":
        return "⚖️"
      default:
        return "📝"
    }
  }

  return (
    <g>
      <motion.path
        d={pathD}
        stroke={getColor()}
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        markerEnd="url(#arrowhead)"
      />

      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <rect
          x={midX - 80}
          y={midY - 25}
          width="160"
          height="50"
          rx="8"
          fill="white"
          stroke={getColor()}
          strokeWidth="2"
          filter="url(#shadow)"
        />
        <text x={midX} y={midY - 8} textAnchor="middle" className="text-xs font-semibold" fill={getColor()}>
          {getChangeTypeIcon()} {changeType.replace("-", " ").toUpperCase()}
        </text>
        <text x={midX} y={midY + 8} textAnchor="middle" className="text-xs" fill="#374151">
          {description.length > 30 ? description.substring(0, 30) + "..." : description}
        </text>
      </motion.g>
    </g>
  )
}

function DocumentPage({
  title,
  content,
  changes,
  isOriginal,
}: {
  title: string
  content: string[]
  changes: DocumentChange[]
  isOriginal: boolean
}) {
  const highlightText = (text: string, changeId: string) => {
    const change = changes.find((c) => c.id === changeId)
    if (!change) return text

    const targetText = isOriginal ? change.originalText : change.modifiedText
    const highlightColor = change.severity === "high" ? "bg-red-200" : "bg-yellow-200"

    return text.replace(
      targetText,
      `<span class="px-1 py-0.5 rounded ${highlightColor} font-medium">${targetText}</span>`,
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200 h-full"
    >
      <div className="border-b-2 border-gray-300 pb-4 mb-6">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">Loan Agreement - Document Version {isOriginal ? "1.0" : "2.0"}</p>
      </div>

      <div className="space-y-4 text-sm leading-relaxed">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-800"
            dangerouslySetInnerHTML={{
              __html: paragraph
                .replace(
                  /fixed annual interest rate of 5\.5%/,
                  isOriginal
                    ? highlightText(paragraph, "interest-rate")
                    : paragraph.replace(
                        "fixed annual interest rate of 5.5%",
                        highlightText("variable annual interest rate starting at 5.5%", "interest-rate"),
                      ),
                )
                .replace(
                  /monthly payments of \$2,500(?! or more)/,
                  isOriginal
                    ? highlightText(paragraph, "payment-terms")
                    : paragraph.replace(
                        "monthly payments of $2,500",
                        highlightText("monthly payments of $2,500 or more at lender's discretion", "payment-terms"),
                      ),
                )
                .replace(
                  /30-day grace period/,
                  isOriginal
                    ? highlightText(paragraph, "default-clause")
                    : paragraph.replace("30-day grace period", highlightText("15-day grace period", "default-clause")),
                )
                .replace(
                  /either party may terminate with 60 days notice/,
                  isOriginal
                    ? highlightText(paragraph, "termination")
                    : paragraph.replace(
                        "either party may terminate with 60 days notice",
                        highlightText(
                          "lender may terminate with 30 days notice, borrower requires 90 days",
                          "termination",
                        ),
                      ),
                ),
            }}
          />
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Page 1 of 12</span>
          <span>
            {isOriginal ? "Original" : "Revised"} - {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function DocumentDiffIllustration() {
  const [showAnnotations, setShowAnnotations] = useState(true)

  const originalContent = [
    "SECTION 1: LOAN TERMS - The Borrower agrees to repay the principal amount of $500,000 with a fixed annual interest rate of 5.5% over a term of 30 years.",
    "SECTION 2: PAYMENT SCHEDULE - The Borrower shall make monthly payments of $2,500 on the first day of each month, beginning thirty (30) days after the execution of this agreement.",
    "SECTION 3: DEFAULT PROVISIONS - In the event of late payment, the Borrower shall have a 30-day grace period for late payments before default proceedings may commence.",
    "SECTION 4: TERMINATION - This agreement may be terminated by either party may terminate with 60 days notice provided in writing to the other party.",
  ]

  const modifiedContent = [
    "SECTION 1: LOAN TERMS - The Borrower agrees to repay the principal amount of $500,000 with a variable annual interest rate starting at 5.5% over a term of 30 years.",
    "SECTION 2: PAYMENT SCHEDULE - The Borrower shall make monthly payments of $2,500 or more at lender's discretion on the first day of each month, beginning thirty (30) days after the execution of this agreement.",
    "SECTION 3: DEFAULT PROVISIONS - In the event of late payment, the Borrower shall have a 15-day grace period for late payments before default proceedings may commence.",
    "SECTION 4: TERMINATION - This agreement may be terminated where lender may terminate with 30 days notice, borrower requires 90 days provided in writing to the other party.",
  ]

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Legal Document Change Analysis</h2>
        <p className="text-gray-600 mb-4">
          Visual comparison showing semantic changes between document versions with impact analysis
        </p>

        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showAnnotations ? "Hide" : "Show"} Annotations
          </button>

          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-200 rounded"></div>
              <span>High Impact</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-200 rounded"></div>
              <span>Medium Impact</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DocumentPage
            title="ORIGINAL DOCUMENT"
            content={originalContent}
            changes={documentChanges}
            isOriginal={true}
          />

          <DocumentPage
            title="REVISED DOCUMENT"
            content={modifiedContent}
            changes={documentChanges}
            isOriginal={false}
          />
        </div>

        {showAnnotations && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
              </marker>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
              </filter>
            </defs>

            {documentChanges.map((change) => (
              <CurvedArrow
                key={change.id}
                start={change.position}
                end={change.targetPosition}
                changeType={change.changeType}
                description={change.description}
                severity={change.severity}
              />
            ))}
          </svg>
        )}
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Change Impact Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documentChanges.map((change) => (
            <motion.div
              key={change.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`p-4 rounded-lg border-l-4 ${
                change.severity === "high" ? "border-red-500 bg-red-50" : "border-yellow-500 bg-yellow-50"
              }`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-lg">
                  {change.changeType === "intent-shift" && "⚠️"}
                  {change.changeType === "meaning-drift" && "🔄"}
                  {change.changeType === "scope-change" && "📏"}
                  {change.changeType === "liability-shift" && "⚖️"}
                </span>
                <div>
                  <h4 className="font-semibold text-gray-900 capitalize">{change.changeType.replace("-", " ")}</h4>
                  <p className="text-sm text-gray-700 mt-1">{change.description}</p>
                  <div className="mt-2 text-xs">
                    <span className="font-medium">From:</span> {change.originalText}
                    <br />
                    <span className="font-medium">To:</span> {change.modifiedText}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
