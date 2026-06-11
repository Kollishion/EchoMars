import { useEffect, useRef } from "react";
import FragmentCanvas from "fragment-canvas";
import type { ReactNode } from "react";

type SmokyButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

const SmokyButton = ({ children, onClick, disabled = false }: SmokyButtonProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fcRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const fragmentShader = `
    precision mediump float;

    uniform vec2 iResolution;
    uniform float iTime;

    float random(vec2 pos) {
        return fract(sin(dot(pos, vec2(12.9898, 78.233))) * 43758.5453);
    }

    float noise(vec2 pos) {
        vec2 i = floor(pos);
        vec2 f = fract(pos);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 pos) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
            v += a * noise(pos);
            pos *= 2.0;
            a *= 0.5;
        }
        return v;
    }

    void main(void) {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        float f = fbm(uv + iTime * 0.3);

        vec3 color = mix(
            vec3(0.0, 0.1, 0.4),
            vec3(0.0, 0.5, 1.0),
            f
        );

        gl_FragColor = vec4(color, 1.0);
    }
    `;

    fcRef.current = new FragmentCanvas(canvas, {
      fragmentShader,
    });

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;

      canvas.style.width = parent.clientWidth + "px";
      canvas.style.height = parent.clientHeight + "px";
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);

      if (fcRef.current && typeof fcRef.current.destroy === "function") {
        fcRef.current.destroy();
      }
    };
  }, []);

  return (
    <button
      onClick={onClick}
      className={`group relative rounded-[14px] overflow-hidden cursor-pointer ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      <div className="absolute inset-0 -z-10">
        <canvas
          ref={canvasRef}
          className="w-full h-full transition duration-300 group-hover:scale-110"
        />
      </div>

      <div className="px-6 py-2.5 rounded-[12px] bg-black/40 group-hover:bg-black/20 transition">
        <span className="text-white font-medium inline-block transition group-hover:scale-105">
          {children}
        </span>
      </div>
    </button>
  );
};

export default SmokyButton;
