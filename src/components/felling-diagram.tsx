export function FellingDiagram() {
  return (
    <svg
      viewBox="0 0 520 560"
      className="h-auto w-full max-w-[460px]"
      role="img"
      aria-label="Diagram of a directional felling cut: a notch and hinge at the base of the trunk, a rigging line to an anchor point, and a cleared drop zone the height of the tree."
    >
      <line
        x1="30"
        y1="480"
        x2="490"
        y2="480"
        stroke="var(--color-timber-line)"
        strokeWidth="1.5"
      />

      <path
        d="M 170 220 A 260 260 0 0 1 430 480"
        fill="none"
        stroke="var(--color-ivory-soft)"
        strokeWidth="1.5"
        strokeDasharray="3 6"
      />
      <polygon points="430,480 418,470 418,484" fill="var(--color-safety)" />
      <text
        x="330"
        y="430"
        fill="var(--color-ivory-soft)"
        fontSize="13"
        fontFamily="var(--font-display)"
        letterSpacing="0.04em"
      >
        DROP ZONE — CLEARED
      </text>

      <line
        x1="96"
        y1="480"
        x2="96"
        y2="228"
        stroke="var(--color-ivory-soft)"
        strokeWidth="1"
      />
      <line x1="88" y1="480" x2="104" y2="480" stroke="var(--color-ivory-soft)" strokeWidth="1" />
      <line x1="88" y1="228" x2="104" y2="228" stroke="var(--color-ivory-soft)" strokeWidth="1" />
      <text
        x="40"
        y="358"
        fill="var(--color-ivory-soft)"
        fontSize="13"
        fontFamily="var(--font-display)"
      >
        ≈18m
      </text>

      <rect x="163" y="228" width="16" height="232" fill="var(--color-bark-soft)" stroke="var(--color-ivory)" strokeWidth="1.5" />
      <line x1="140" y1="236" x2="171" y2="210" stroke="var(--color-ivory)" strokeWidth="1.5" />
      <line x1="200" y1="248" x2="171" y2="214" stroke="var(--color-ivory)" strokeWidth="1.5" />
      <line x1="155" y1="252" x2="171" y2="222" stroke="var(--color-ivory)" strokeWidth="1.5" />

      <path
        d="M 179 452 L 198 440 L 179 428 Z"
        fill="var(--color-bark)"
        stroke="var(--color-safety)"
        strokeWidth="1.5"
      />
      <line x1="208" y1="440" x2="246" y2="440" stroke="var(--color-safety)" strokeWidth="1" />
      <text
        x="250"
        y="444"
        fill="var(--color-safety)"
        fontSize="13"
        fontFamily="var(--font-display)"
        letterSpacing="0.04em"
      >
        NOTCH CUT
      </text>

      <line x1="163" y1="446" x2="155" y2="446" stroke="var(--color-safety)" strokeWidth="2" />
      <line x1="124" y1="446" x2="155" y2="446" stroke="var(--color-safety)" strokeWidth="1" />
      <text
        x="20"
        y="450"
        fill="var(--color-safety)"
        fontSize="13"
        fontFamily="var(--font-display)"
        letterSpacing="0.04em"
      >
        HINGE
      </text>

      <line
        x1="179"
        y1="300"
        x2="80"
        y2="480"
        stroke="var(--color-hazard)"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
      <polygon points="179,300 192,308 186,316" fill="var(--color-hazard)" />
      <circle cx="80" cy="480" r="5" fill="none" stroke="var(--color-hazard)" strokeWidth="1.5" />
      <text
        x="40"
        y="505"
        fill="var(--color-hazard)"
        fontSize="13"
        fontFamily="var(--font-display)"
        letterSpacing="0.04em"
      >
        RIGGING LINE
      </text>
    </svg>
  );
}
