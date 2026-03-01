export default function Marquee() {
  const items = [
    'Microsoft Copilot',
    'Azure AI',
    'Microsoft Intune',
    'M365',
    'Kyndryl',
    'IBM',
    'Digital Workplace',
    'AI Governance',
    'Enterprise AI',
    'Generative AI',
    'Fortune 500',
    'Microsoft Teams',
    'Azure OpenAI',
    'Ironman Triathlete',
  ]

  const doubled = [...items, ...items]

  return (
    <div className="py-10 border-y border-white/[0.05] overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm text-gray-500 font-medium flex-shrink-0">
            <span className="w-1 h-1 rounded-full bg-indigo-500/60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
