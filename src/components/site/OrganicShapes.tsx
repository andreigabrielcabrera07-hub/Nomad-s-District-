interface OrganicShapesProps {
  className?: string;
}

export function OrganicShapes({ className }: OrganicShapesProps) {
  return (
    <div
      aria-hidden="true"
      className={
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden " + (className ?? "")
      }
    >
      {/* Navy blob top-right */}
      <svg
        className="absolute -right-32 -top-20 h-[420px] w-[420px] text-primary/15 animate-float-slower"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-58.1C57.4,-48.2,66.6,-33.8,71.7,-17.7C76.9,-1.5,78.1,16.4,71.6,30.9C65.2,45.5,51.2,56.7,35.7,63.4C20.3,70,3.4,72.1,-12.5,69.2C-28.3,66.2,-42.9,58.3,-52.5,46.3C-62,34.3,-66.4,18.3,-66.4,2.2C-66.4,-13.9,-62,-30.1,-52.2,-41.1C-42.5,-52.1,-27.5,-58,-12.1,-61.6C3.3,-65.3,19.1,-66.7,32,-61.8C44.9,-57,55,-46,44.7,-58.1Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Gold blob bottom-left */}
      <svg
        className="absolute -bottom-32 -left-20 h-[340px] w-[340px] text-gold/30 animate-float-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M40.6,-57.1C53.1,-49.5,63.8,-38.9,69.1,-25.6C74.4,-12.4,74.4,3.4,69.2,17.2C64,31,53.7,42.7,41.5,52.1C29.3,61.5,15.2,68.7,0.1,68.6C-15.1,68.4,-30.2,60.9,-42.4,50.4C-54.7,39.9,-64.1,26.3,-67.8,10.9C-71.5,-4.6,-69.5,-21.9,-61.4,-34.4C-53.3,-46.8,-39,-54.5,-25.1,-60.6C-11.2,-66.8,2.3,-71.4,15.4,-69.6C28.4,-67.8,41,-59.6,40.6,-57.1Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Dotted arc */}
      <svg
        className="absolute right-[20%] top-[28%] hidden h-32 w-32 text-primary/40 md:block"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      </svg>
    </div>
  );
}

interface SvgProps {
  className?: string;
}

export function HandDrawnArrow({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 56 C 22 70, 38 70, 56 50 L 64 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M52 38 L 64 42 L 60 54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HandDrawnStar({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 4 C 21 13, 27 19, 36 20 C 27 21, 21 27, 20 36 C 19 27, 13 21, 4 20 C 13 19, 19 13, 20 4 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HandDrawnUnderline({ className }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 12"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 7 C 40 2, 80 11, 120 6 S 198 9, 198 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

