const items = [
  'Microsoft Copilot', 'Azure AI', 'Microsoft Intune', 'M365',
  'Kyndryl', 'IBM', 'Digital Workplace Strategy', 'AI Governance',
  'Generative AI', 'Fortune 500', 'Microsoft Teams', 'Azure OpenAI',
  'Ironman Triathlete', 'Enterprise Architecture', 'Copilot Studio',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="py-8 overflow-hidden relative" style={{ borderTop: '1px solid rgba(245,158,11,0.08)', borderBottom: '1px solid rgba(245,158,11,0.08)', background: 'rgba(10, 8, 5, 0.6)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #080A0F, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #080A0F, transparent)' }} />

      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider flex-shrink-0 uppercase" style={{ color: '#5C4F42' }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#F59E0B', opacity: 0.5 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
