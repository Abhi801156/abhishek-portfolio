import { useEffect } from "react";

type Skill = {
  name: string;
  color: string;
  angle: number;
};

const skills: Skill[] = [
  {
    name: "JavaScript",
    color: "#facc15",
    angle: -90,
  },
  {
    name: "C",
    color: "#8b5cf6",
    angle: -30,
  },
  {
    name: "CSS",
    color: "#3b82f6",
    angle: 30,
  },
  {
    name: "Database",
    color: "#22c55e",
    angle: 90,
  },
  {
    name: "HTML",
    color: "#ff7139",
    angle: 150,
  },
  {
    name: "Python",
    color: "#00eaff",
    angle: 210,
  },
];

export default function Skills3D() {
  useEffect(() => {
    const styleId = "skills-universe-styles";

    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;

    style.textContent = `
      /* ========================================
         CORE
      ======================================== */

      @keyframes skillsCorePulse {
        0%,
        100% {
          transform: translate(-50%, -50%) scale(0.98);
          box-shadow:
            0 0 28px rgba(0, 234, 255, 0.5),
            0 0 70px rgba(0, 234, 255, 0.16),
            inset 0 0 28px rgba(0, 234, 255, 0.25);
        }

        50% {
          transform: translate(-50%, -50%) scale(1.04);
          box-shadow:
            0 0 45px rgba(0, 234, 255, 0.8),
            0 0 110px rgba(0, 234, 255, 0.24),
            inset 0 0 38px rgba(0, 234, 255, 0.4);
        }
      }

      /* ========================================
         OUTER ORBIT ROTATION
      ======================================== */

      @keyframes outerOrbit {
        from {
          transform:
            translate(-50%, -50%)
            rotate(0deg);
        }

        to {
          transform:
            translate(-50%, -50%)
            rotate(360deg);
        }
      }

      /* ========================================
         NODE FLOAT
      ======================================== */

      @keyframes nodeFloat {
        0%,
        100% {
          transform: translate(-50%, -50%);
        }

        50% {
          transform:
            translate(-50%, -50%)
            translateY(-5px);
        }
      }

      @keyframes nodeGlow {
        0%,
        100% {
          opacity: 0.72;
        }

        50% {
          opacity: 1;
        }
      }

      /* ========================================
         MAIN UNIVERSE
      ======================================== */

      .skills-universe {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 600px;
        overflow: hidden;
        background:
          radial-gradient(
            circle at center,
            rgba(0, 234, 255, 0.05),
            transparent 42%
          );
      }

      .skills-universe::before {
        content: "";

        position: absolute;
        inset: 5%;

        background:
          linear-gradient(
            rgba(0, 234, 255, 0.04) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(0, 234, 255, 0.04) 1px,
            transparent 1px
          );

        background-size: 40px 40px;

        mask-image:
          radial-gradient(
            circle,
            black 15%,
            transparent 72%
          );

        -webkit-mask-image:
          radial-gradient(
            circle,
            black 15%,
            transparent 72%
          );

        pointer-events: none;
      }

      .skills-universe::after {
        content: "";

        position: absolute;

        width: 360px;
        height: 360px;

        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        background:
          radial-gradient(
            circle,
            rgba(0, 234, 255, 0.09),
            transparent 68%
          );

        filter: blur(14px);

        pointer-events: none;
      }

      /* ========================================
         CENTER CORE
      ======================================== */

      .skills-core {
        position: absolute;

        left: 50%;
        top: 50%;

        width: 145px;
        height: 145px;

        transform:
          translate(-50%, -50%);

        border-radius: 50%;

        background:
          radial-gradient(
            circle at 30% 25%,
            #e5feff 0%,
            #c3faff 11%,
            #00eaff 25%,
            #075066 44%,
            #02050b 73%
          );

        border:
          1px solid
          rgba(141, 245, 255, 0.8);

        box-shadow:
          0 0 35px rgba(0, 234, 255, 0.68),
          0 0 100px rgba(0, 234, 255, 0.22),
          inset 0 0 32px rgba(0, 234, 255, 0.38);

        animation:
          skillsCorePulse
          3.5s
          ease-in-out
          infinite;

        z-index: 20;
      }

      .skills-core::before {
        content: "";

        position: absolute;

        inset: 16px;

        border-radius: 50%;

        border:
          1px solid
          rgba(255, 255, 255, 0.72);

        box-shadow:
          inset 0 0 25px
          rgba(0, 234, 255, 0.9);
      }

      .skills-core::after {
        content: "SKILLS";

        position: absolute;

        left: 50%;
        top: 50%;

        transform:
          translate(-50%, -50%);

        color: #e2ffff;

        font-family:
          "Space Grotesk",
          sans-serif;

        font-size: 13px;

        font-weight: 700;

        letter-spacing: 3px;

        text-shadow:
          0 0 15px
          rgba(0, 234, 255, 0.8);
      }

      /* ========================================
         SINGLE OUTER ORBIT
      ======================================== */

      .skills-orbit {
        position: absolute;

        left: 50%;
        top: 50%;

        width: 440px;
        height: 440px;

        transform:
          translate(-50%, -50%);

        border:
          1px solid
          rgba(0, 234, 255, 0.24);

        border-radius: 50%;

        box-shadow:
          0 0 25px
          rgba(0, 234, 255, 0.04);

        animation:
          outerOrbit
          24s
          linear
          infinite;

        z-index: 5;
      }

      .skills-orbit-inner {
        position: absolute;

        left: 50%;
        top: 50%;

        width: 300px;
        height: 300px;

        transform:
          translate(-50%, -50%);

        border:
          1px solid
          rgba(139, 92, 246, 0.14);

        border-radius: 50%;

        pointer-events: none;
      }

      /* ========================================
         CONNECTION LINES
      ======================================== */

      .skill-line {
        position: absolute;

        left: 50%;
        top: 50%;

        width: 220px;
        height: 1px;

        transform-origin: left center;

        opacity: 0.18;

        pointer-events: none;

        z-index: 4;
      }

      /* ========================================
         SKILL NODE
      ======================================== */

      .skill-node {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 82px;
  height: 82px;

  transform:
    translate(-50%, -50%)
    rotate(var(--angle))
    translateY(-220px);

  z-index: 10;
}

      .skill-node-inner {
        position: absolute;

        inset: 0;

        border-radius: 50%;

        background:
          radial-gradient(
            circle at 30% 25%,
            rgba(255, 255, 255, 0.98),
            var(--skill-color) 22%,
            rgba(2, 5, 11, 0.95) 72%
          );

        border:
          1px solid
          color-mix(
            in srgb,
            var(--skill-color) 75%,
            transparent
          );

        box-shadow:
          0 0 22px
          color-mix(
            in srgb,
            var(--skill-color) 65%,
            transparent
          ),
          0 0 45px
          color-mix(
            in srgb,
            var(--skill-color) 22%,
            transparent
          ),
          inset 0 0 20px
          color-mix(
            in srgb,
            var(--skill-color) 35%,
            transparent
          );

        animation:
          nodeFloat
          4s
          ease-in-out
          infinite,
          nodeGlow
          3s
          ease-in-out
          infinite;
      }

      .skill-node-inner::before {
        content: "";

        position: absolute;

        inset: -9px;

        border-radius: 50%;

        border:
          1px solid
          color-mix(
            in srgb,
            var(--skill-color) 55%,
            transparent
          );
      }

      .skill-node-inner::after {
        content: "";

        position: absolute;

        inset: 13px;

        border-radius: 50%;

        border:
          1px solid
          rgba(255, 255, 255, 0.4);

        box-shadow:
          inset 0 0 15px
          color-mix(
            in srgb,
            var(--skill-color) 45%,
            transparent
          );
      }

      .skill-node-dot {
        position: absolute;

        left: 50%;
        top: 50%;

        width: 16px;
        height: 16px;

        transform:
          translate(-50%, -50%);

        border-radius: 50%;

        background: #ffffff;

        box-shadow:
          0 0 18px
          var(--skill-color),
          0 0 35px
          var(--skill-color);

        z-index: 2;
      }

      .skill-node-label {
  position: absolute;

  left: 50%;
  top: calc(100% + 10px);

  transform:
    translateX(-50%)
    rotate(calc(var(--angle) * -1));

  color: #eafcff;

  font-size: 12px;

  font-weight: 500;

  white-space: nowrap;

  text-shadow:
    0 0 12px
    rgba(0, 234, 255, 0.28);

  z-index: 12;
}
      /* ========================================
         MOBILE
      ======================================== */

      @media (max-width: 900px) {
  .skills-universe {
    min-height: 520px;
    overflow: visible;
  }

  .skills-orbit {
    width: 360px;
    height: 360px;
  }

  .skill-node {
    width: 64px;
    height: 64px;

    transform:
      translate(-50%, -50%)
      rotate(var(--angle))
      translateY(-180px);
  }
}

     @media (max-width: 600px) {
  .skills-universe {
    min-height: 430px;
    overflow: visible;
  }

  .skills-core {
    width: 105px;
    height: 105px;
  }

  .skills-core::before {
    inset: 12px;
  }

  .skills-core::after {
    font-size: 10px;
    letter-spacing: 2px;
  }

  /* Main outer ring */
  .skills-orbit {
    width: 270px;
    height: 270px;
  }

  /* Subtle inner ring */
  .skills-orbit-inner {
    width: 185px;
    height: 185px;
  }

  /* All 6 skills sit exactly on the outer ring */
  .skill-node {
    width: 50px;
    height: 50px;

    transform:
      translate(-50%, -50%)
      rotate(var(--angle))
      translateY(-135px);
  }

  .skill-node-label {
    top: calc(100% + 6px);
    font-size: 8px;
  }

  .skill-node-dot {
    width: 9px;
    height: 9px;
  }
}
      @media (prefers-reduced-motion: reduce) {
        .skills-core,
        .skills-orbit,
        .skill-node-inner {
          animation: none !important;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.getElementById(styleId)?.remove();
    };
  }, []);

  return (
    <div className="skills-universe">
      <div className="skills-orbit">
        <div className="skills-orbit-inner" />

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-node"
            style={
              {
                "--angle": `${skill.angle}deg`,
                "--skill-color": skill.color,
              } as React.CSSProperties
            }
          >
            <div className="skill-node-inner">
              <div className="skill-node-dot" />
            </div>

            <div className="skill-node-label">
              {skill.name}
            </div>
          </div>
        ))}
      </div>

      <div
        className="skills-core"
        aria-label="Technology skills universe"
      />
    </div>
  );
}