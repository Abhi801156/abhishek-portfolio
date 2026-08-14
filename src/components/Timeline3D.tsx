import { useEffect } from "react";

type EducationNode = {
  index: string;
  title: string;
  subtitle: string;
  color: string;
  side: "left" | "right";
};

const education: EducationNode[] = [
  {
    index: "01",
    title: "HSC",
    subtitle: "Govt PU College for Girls, Athani",
    color: "#22c55e",
    side: "left",
  },
  {
    index: "02",
    title: "BCA",
    subtitle: "A S Patil College of Commerce, Vijayapur",
    color: "#8b5cf6",
    side: "right",
  },
  {
    index: "03",
    title: "MCA",
    subtitle: "RNS Institute of Technology, Bangalore",
    color: "#00eaff",
    side: "left",
  },
];

export default function Timeline3D() {
  useEffect(() => {
    const styleId = "education-3d-animation";

    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement("style");
    style.id = styleId;

    style.textContent = `
      @keyframes educationFloat {
        0%, 100% {
          transform:
            translate(-50%, -50%)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0);
        }

        50% {
          transform:
            translate(-50%, -50%)
            rotateX(8deg)
            rotateY(-8deg)
            translateY(-8px);
        }
      }

      @keyframes educationSpin {
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

      @keyframes educationGlow {
        0%, 100% {
          opacity: 0.55;
          transform: scale(0.96);
        }

        50% {
          opacity: 1;
          transform: scale(1.05);
        }
      }

      @keyframes educationLine {
        0% {
          transform: scaleY(0);
          transform-origin: top;
        }

        100% {
          transform: scaleY(1);
          transform-origin: top;
        }
      }

      .education-css-timeline {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 600px;
        overflow: hidden;
        perspective: 1200px;
      }

      .education-css-timeline::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 8%;
        width: 2px;
        height: 84%;
        transform: translateX(-50%);
        background:
          linear-gradient(
            to bottom,
            transparent,
            rgba(0, 234, 255, 0.75),
            rgba(0, 234, 255, 0.2),
            transparent
          );
        box-shadow:
          0 0 18px rgba(0, 234, 255, 0.35);
        animation: educationLine 1.2s ease forwards;
      }

      .education-css-node {
        position: absolute;
        left: 50%;
        transform-style: preserve-3d;
      }

      .education-css-node.node-1 {
        top: 18%;
      }

      .education-css-node.node-2 {
        top: 50%;
      }

      .education-css-node.node-3 {
        top: 82%;
      }

      .education-css-sphere {
        position: absolute;
        left: 0;
        top: 0;
        width: 92px;
        height: 92px;
        transform:
          translate(-50%, -50%)
          rotateX(0deg)
          rotateY(0deg);
        transform-style: preserve-3d;
        border-radius: 50%;
        background:
          radial-gradient(
            circle at 32% 28%,
            rgba(255, 255, 255, 0.95),
            var(--node-color) 20%,
            rgba(2, 5, 11, 0.95) 72%
          );
        border: 1px solid
          color-mix(
            in srgb,
            var(--node-color) 70%,
            transparent
          );
        box-shadow:
          0 0 18px var(--node-color),
          0 0 55px
            color-mix(
              in srgb,
              var(--node-color) 35%,
              transparent
            ),
          inset 0 0 25px
            color-mix(
              in srgb,
              var(--node-color) 45%,
              transparent
            );
        animation:
          educationFloat 4s ease-in-out infinite;
      }

      .education-css-sphere::before {
        content: "";
        position: absolute;
        inset: -9px;
        border-radius: 50%;
        border: 1px solid
          color-mix(
            in srgb,
            var(--node-color) 60%,
            transparent
          );
        box-shadow:
          0 0 16px
            color-mix(
              in srgb,
              var(--node-color) 45%,
              transparent
            );
        animation:
          educationSpin 7s linear infinite;
      }

      .education-css-sphere::after {
        content: "";
        position: absolute;
        inset: 11px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-shadow:
          inset 0 0 18px
            color-mix(
              in srgb,
              var(--node-color) 55%,
              transparent
            );
        animation:
          educationGlow 2.5s ease-in-out infinite;
      }

      .education-css-number {
        position: absolute;
        top: 61px;
        left: 0;
        transform: translateX(-50%);
        color: rgba(255, 255, 255, 0.72);
        font-size: 11px;
        letter-spacing: 2px;
      }

      .education-css-label {
        position: absolute;
        top: -22px;
        width: 210px;
        color: #ffffff;
      }

      .education-css-label.left {
        right: 58px;
        text-align: right;
      }

      .education-css-label.right {
        left: 58px;
        text-align: left;
      }

      .education-css-title {
        font-family:
          "Space Grotesk",
          sans-serif;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.2px;
      }

      .education-css-subtitle {
        margin-top: 5px;
        color: #7f8da1;
        font-size: 10px;
        line-height: 1.5;
      }

      .education-css-chip {
        position: absolute;
        padding: 6px 9px;
        border: 1px solid
          rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        background: rgba(2, 5, 11, 0.72);
        backdrop-filter: blur(10px);
        color: var(--node-color);
        font-size: 8px;
        letter-spacing: 1.5px;
        box-shadow:
          0 0 18px
            color-mix(
              in srgb,
              var(--node-color) 12%,
              transparent
            );
      }

      .education-css-node.node-1
        .education-css-chip {
        right: 95px;
        top: 72px;
      }

      .education-css-node.node-2
        .education-css-chip {
        left: 95px;
        top: 72px;
      }

      .education-css-node.node-3
        .education-css-chip {
        right: 95px;
        top: 72px;
      }

      @media (max-width: 900px) {
        .education-css-timeline {
          min-height: 470px;
        }

        .education-css-timeline::before {
          left: 42px;
          transform: none;
        }

        .education-css-node {
          left: 42px;
        }

        .education-css-label {
          left: 72px !important;
          right: auto !important;
          width: 220px;
          text-align: left !important;
        }

        .education-css-chip {
          display: none;
        }
      }

      @media (max-width: 600px) {
        .education-css-timeline {
          min-height: 430px;
        }

        .education-css-sphere {
          width: 72px;
          height: 72px;
        }

        .education-css-label {
          left: 58px !important;
          width: 185px;
        }

        .education-css-title {
          font-size: 16px;
        }

        .education-css-subtitle {
          font-size: 9px;
        }

        .education-css-number {
          top: 50px;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.getElementById(styleId)?.remove();
    };
  }, []);

  return (
    <div className="education-css-timeline">
      {education.map((item, index) => (
        <div
          key={item.index}
          className={`education-css-node node-${index + 1}`}
          style={
            {
              "--node-color": item.color,
            } as React.CSSProperties
          }
        >
          <div className="education-css-sphere"></div>

          <div className="education-css-number">
            {item.index}
          </div>

          <div
            className={`education-css-label ${item.side}`}
          >
            <div className="education-css-title">
              {item.title}
            </div>

            <div className="education-css-subtitle">
              {item.subtitle}
            </div>
          </div>

          <div className="education-css-chip">
            {item.title === "HSC"
              ? "FOUNDATION"
              : item.title === "BCA"
              ? "DEVELOPMENT"
              : "SPECIALIZATION"}
          </div>
        </div>
      ))}
    </div>
  );
}