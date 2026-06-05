import FadeIn from '../common/FadeIn'

export default function PortalSection({ title, subtitle, stats, columns, rows }) {
  return (
    <div>
      <FadeIn>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text sm:text-3xl">{title}</h1>
          <p className="mt-1 text-muted">{subtitle}</p>
        </div>
      </FadeIn>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.05}>
            <div className="card-shadow rounded-xl bg-card p-5">
              <p className="text-sm text-muted">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-text">{stat.value}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <div className="card-shadow overflow-hidden rounded-xl bg-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-surface">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="px-6 py-4 font-semibold text-text"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-slate-100 last:border-0 hover:bg-surface/60"
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 text-muted">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
