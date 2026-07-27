// ===== REUSABLE UI COMPONENTS =====

// Card wrapper
function Card({ children, style, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: T.card,
        borderRadius: 16,
        padding: 16,
        border: `1px solid ${T.line}`,
        boxShadow: "0 1px 4px rgba(11,42,74,.05)",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Chip / tag button
function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "9px 15px",
        borderRadius: 20,
        fontSize: 14,
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all .15s",
        border: `1.5px solid ${active ? T.blue : T.line}`,
        background: active ? T.blue : "#fff",
        color: active ? "#fff" : T.ink,
        fontWeight: active ? 700 : 400,
      }}
    >
      {children}
    </button>
  );
}

// Option row (radio-style)
function OptionRow({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "12px 14px",
        borderRadius: 12,
        fontSize: 14,
        cursor: "pointer",
        fontFamily: "inherit",
        marginBottom: 8,
        transition: "all .15s",
        border: `1.5px solid ${active ? T.blue : T.line}`,
        background: active ? "#E9F7FE" : "#fff",
        color: T.ink,
        fontWeight: active ? 700 : 400,
      }}
    >
      {active ? "●" : "○"} {children}
    </button>
  );
}

// Form field wrapper
function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 13, color: T.sub, marginBottom: 6 }}>
        {label}
      </div>
      {children}
    </div>
  );
}

// Input style constant
const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  borderRadius: 10,
  border: `1.5px solid ${T.line}`,
  fontSize: 15,
  color: T.ink,
  outline: "none",
  fontFamily: "inherit",
  background: "#fff",
};

// Score ring (SVG circular progress)
function Ring({ score, size = 64, stroke = 7 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const col = score >= 70 ? T.good : score >= 45 ? T.warn : T.bad;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={T.line}
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={col}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${(score / 100) * c} ${c}`}
        style={{ transition: "stroke-dasharray .6s ease" }}
      />
    </svg>
  );
}

// Page header with gradient
function Header({ title, sub, onBack, children }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${T.blue}, ${T.blueDark})`,
        padding: "20px 20px 26px",
        color: "#fff",
        borderRadius: "0 0 24px 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              background: "rgba(255,255,255,.18)",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "6px 12px",
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ← กลับ
          </button>
        )}
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>{title}</div>
          {sub && (
            <div style={{ fontSize: 13, opacity: 0.85 }}>{sub}</div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
