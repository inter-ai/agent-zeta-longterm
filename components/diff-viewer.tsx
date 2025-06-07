"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"

interface DiffWord {
  word: string
  type: "unchanged" | "added" | "removed" | "modified"
  index: number
  semanticDiff?: string
}

interface DiffViewerProps {
  originalText: string
  modifiedText: string
}

function diffWords(original: string, modified: string): { original: DiffWord[]; modified: DiffWord[] } {
  const originalWords = original.split(/(\s+)/).filter((word) => word.trim() !== "")
  const modifiedWords = modified.split(/(\s+)/).filter((word) => word.trim() !== "")

  const originalDiff: DiffWord[] = []
  const modifiedDiff: DiffWord[] = []

  let i = 0,
    j = 0

  while (i < originalWords.length || j < modifiedWords.length) {
    if (i >= originalWords.length) {
      // Remaining words in modified are additions
      modifiedDiff.push({
        word: modifiedWords[j],
        type: "added",
        index: j,
        semanticDiff: `Added: "${modifiedWords[j]}"`,
      })
      j++
    } else if (j >= modifiedWords.length) {
      // Remaining words in original are removals
      originalDiff.push({
        word: originalWords[i],
        type: "removed",
        index: i,
        semanticDiff: `Removed: "${originalWords[i]}"`,
      })
      i++
    } else if (originalWords[i] === modifiedWords[j]) {
      // Words match
      originalDiff.push({
        word: originalWords[i],
        type: "unchanged",
        index: i,
      })
      modifiedDiff.push({
        word: modifiedWords[j],
        type: "unchanged",
        index: j,
      })
      i++
      j++
    } else {
      // Words differ - check if it's a modification or insertion/deletion
      const nextOriginalMatch = modifiedWords.slice(j).findIndex((word) => word === originalWords[i])
      const nextModifiedMatch = originalWords.slice(i).findIndex((word) => word === modifiedWords[j])

      if (nextOriginalMatch !== -1 && (nextModifiedMatch === -1 || nextOriginalMatch < nextModifiedMatch)) {
        // Word was added in modified
        modifiedDiff.push({
          word: modifiedWords[j],
          type: "added",
          index: j,
          semanticDiff: `Added: "${modifiedWords[j]}"`,
        })
        j++
      } else if (nextModifiedMatch !== -1) {
        // Word was removed from original
        originalDiff.push({
          word: originalWords[i],
          type: "removed",
          index: i,
          semanticDiff: `Removed: "${originalWords[i]}"`,
        })
        i++
      } else {
        // Word was modified
        originalDiff.push({
          word: originalWords[i],
          type: "modified",
          index: i,
          semanticDiff: `Changed from "${originalWords[i]}" to "${modifiedWords[j]}"`,
        })
        modifiedDiff.push({
          word: modifiedWords[j],
          type: "modified",
          index: j,
          semanticDiff: `Changed from "${originalWords[i]}" to "${modifiedWords[j]}"`,
        })
        i++
        j++
      }
    }
  }

  return { original: originalDiff, modified: modifiedDiff }
}

function WordSpan({
  diffWord,
  isHovered,
  onHover,
}: {
  diffWord: DiffWord
  isHovered: boolean
  onHover: (word: DiffWord | null) => void
}) {
  const getColorClass = () => {
    switch (diffWord.type) {
      case "unchanged":
        return "text-green-600"
      case "added":
        return "text-red-500 bg-red-50"
      case "removed":
        return "text-red-500 bg-red-50 line-through"
      case "modified":
        return "text-red-500 bg-red-50"
      default:
        return "text-gray-900"
    }
  }

  return (
    <motion.span
      className={`inline-block px-1 py-0.5 rounded transition-all duration-300 cursor-pointer ${getColorClass()}`}
      initial={{ backgroundColor: "rgb(34, 197, 94)" }}
      animate={{
        backgroundColor: diffWord.type === "unchanged" ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)",
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        backgroundColor: { duration: 0.6, ease: "easeInOut" },
      }}
      onMouseEnter={() => onHover(diffWord)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ scale: 1.05 }}
    >
      {diffWord.word}
    </motion.span>
  )
}

function Tooltip({ content, isVisible }: { content: string; isVisible: boolean }) {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none"
      style={{
        top: "-40px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {content}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
    </motion.div>
  )
}

export function DiffViewer({ originalText, modifiedText }: DiffViewerProps) {
  const [hoveredWord, setHoveredWord] = useState<DiffWord | null>(null)

  const { original, modified } = useMemo(() => diffWords(originalText, modifiedText), [originalText, modifiedText])

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Text Diff Viewer</h2>
        <p className="text-gray-600">Compare two versions of text with semantic highlighting</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Original Text */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">Original Version</h3>
          </div>
          <div className="relative p-4 bg-gray-50 rounded-lg border-2 border-gray-200 min-h-[200px]">
            <div className="text-gray-900 leading-relaxed space-x-1">
              {original.map((diffWord, index) => (
                <span key={index} className="relative">
                  <WordSpan
                    diffWord={diffWord}
                    isHovered={hoveredWord?.index === diffWord.index}
                    onHover={setHoveredWord}
                  />
                  {hoveredWord?.index === diffWord.index && diffWord.semanticDiff && (
                    <Tooltip content={diffWord.semanticDiff} isVisible={true} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modified Text */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="text-lg font-semibold text-gray-900">Modified Version</h3>
          </div>
          <div className="relative p-4 bg-gray-50 rounded-lg border-2 border-gray-200 min-h-[200px]">
            <div className="text-gray-900 leading-relaxed space-x-1">
              {modified.map((diffWord, index) => (
                <span key={index} className="relative">
                  <WordSpan
                    diffWord={diffWord}
                    isHovered={hoveredWord?.index === diffWord.index}
                    onHover={setHoveredWord}
                  />
                  {hoveredWord?.index === diffWord.index && diffWord.semanticDiff && (
                    <Tooltip content={diffWord.semanticDiff} isVisible={true} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Legend</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span>Unchanged</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Added/Modified/Removed</span>
          </div>
          <div className="text-gray-600">Hover over highlighted words to see semantic differences</div>
        </div>
      </div>
    </>
  )
}
