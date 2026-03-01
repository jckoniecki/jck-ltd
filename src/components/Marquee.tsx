const items = [
  'Microsoft Copilot', 'Azure AI', 'Microsoft Intune', 'M365',
  'Kyndryl', 'IBM', 'Digital Workplace', 'AI Governance',
  'Generative AI', 'Fortune 500', 'Azure OpenAI', 'Copilot Studio',
  'Enterprise Architecture', 'Microsoft Teams', 'Ironman Triathlete',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-6" style={{
      borderTop: '1px solid rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(255,255,255,0.04)',
      background: 'rgba(4,6,16,0.7)',
    }}>
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #03050E, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #03050E, transparent)' }} />
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 flex-shrink-0 text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: '#334155' }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#6366F1', opacity: 0.5 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
