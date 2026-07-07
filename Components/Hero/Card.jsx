export default function Card({ item }) {
  return (
    <div
      style={{
        animationDelay: `${item.id * 0.25}s`,
      }}
      className="
      float
      group
      relative
      min-w-[270px]
      md:min-w-[300px]
      h-[300px]
      rounded-[24px]
      overflow-hidden
      border
      border-white/10
      bg-gradient-to-br
      from-white/8
      to-white/3
      backdrop-blur-2xl
      p-6
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#FFC801]/60
      hover:shadow-[0_20px_60px_rgba(255,200,1,.12)]
      cursor-grab
      active:cursor-grabbing
      "
    >
      {/* Glow Background */}

      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity"
        style={{ background: item.color }}
      />

      {/* Header */}

      <div className="relative z-10 flex justify-between items-start mb-6">

        <h3 className="font-semibold text-lg leading-tight text-[#F1F6F4]">

          {item.title}

        </h3>

        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap ml-3"
          style={{
            background: item.color,
            color: "#172B36",
          }}
        >
          {item.badge}
        </span>

      </div>

      {/* Value */}

      <div className="relative z-10 flex-1 flex flex-col">

        <h2 className="font-mono text-3xl font-bold text-[#FFC801]">

          {item.value}

        </h2>

        <p className="mt-2 text-xs text-[#D9E8E2] opacity-80">

          {item.subtitle}

        </p>

      </div>

      {/* Progress */}

      {item.type === "progress" && (

        <div className="relative z-10 mt-auto pt-6">

          <div className="h-2 rounded-full bg-white/10">

            <div
              className="h-2 rounded-full transition-all duration-700"
              style={{
                width: item.value,
                background: item.color,
              }}
            />

          </div>

        </div>

      )}

      {/* Graph */}

      {item.type === "graph" && (

        <div className="relative z-10 mt-auto pt-6 flex h-16 items-end gap-2">

          {[35, 55, 70, 45, 90, 60].map((height, index) => (

            <div
              key={index}
              className="flex-1 rounded-full transition-all duration-300 group-hover:scale-y-110"
              style={{
                height: `${height}%`,
                background: item.color,
              }}
            />

          ))}

        </div>

      )}

      {/* Revenue */}

      {item.type === "stats" && (

        <div className="relative z-10 mt-auto pt-6">

          <div className="flex items-center gap-3 mb-4">

            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: item.color,
              }}
            />

            <span className="text-xs text-[#D9E8E2]">

              Monthly Growth

            </span>

          </div>

          <div className="flex gap-2 h-12">

            {[25,45,35,60,55,85].map((v,index)=>(

              <div
                key={index}
                className="flex-1 rounded-full"
                style={{
                  height: `${v}px`,
                  background: item.color,
                  opacity: 0.7 + (index * 0.05)
                }}
              />

            ))}

          </div>

        </div>

      )}

      {/* Apps */}

      {item.type === "apps" && (

        <div className="relative z-10 mt-auto pt-6 flex flex-wrap gap-2">

          {["Slack","GitHub","Stripe","Notion"].map((app)=>(

            <span
              key={app}
              className="rounded-full border border-white/20 px-3 py-1.5 text-xs hover:border-[#FFC801] transition"
            >

              {app}

            </span>

          ))}

        </div>

      )}

    </div>
  );
}