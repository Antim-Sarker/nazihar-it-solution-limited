

import { useState } from "react"


export default function Banner({
  title,
  subtitle,
  imageSrc,
  actionLabel,
  onAction,
  className = ""
}) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className={`relative w-full bg-blue-600 text-white ${className}`}>
      {imageSrc && (
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image src={imageSrc} alt="" fill style={{ objectFit: "cover" }} unoptimized />
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="mt-1 text-sm">{subtitle}</p>}
        </div>

        <div className="flex items-center space-x-2">
          {actionLabel && (
            <button
              onClick={onAction}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              {actionLabel}
            </button>
          )}
          <button
            onClick={() => setVisible(false)}
            className="text-white hover:text-gray-200"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}
