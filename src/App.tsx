import { useRef, useState } from "react";
import { Dock } from "./components/dock";
//import { Window } from "./components/Window";

// Window identifiers
type WindowKey = "about" | "projects" | "resume" | "contact";

// Window state shape
type WindowState = {
  key: WindowKey;
  isOpen: boolean;
  z: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function App() {
  const zCounter = useRef(10);

  const [windows, setWindows] = useState<Record<WindowKey, WindowState>>({
    about: {
      key: "about",
      isOpen: false,
      z: 0,
      x: 80,
      y: 100,
      width: 520,
      height: 420,
    },
    projects: {
      key: "projects",
      isOpen: false,
      z: 0,
      x: 140,
      y: 120,
      width: 720,
      height: 520,
    },
    resume: {
      key: "resume",
      isOpen: false,
      z: 0,
      x: 160,
      y: 140,
      width: 700,
      height: 520,
    },
    contact: {
      key: "contact",
      isOpen: false,
      z: 0,
      x: 200,
      y: 160,
      width: 480,
      height: 360,
    },
  });


  const openWindow = (key: WindowKey) => {
    zCounter.current += 1;

    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        isOpen: true,
        z: zCounter.current,
      },
    }));
  };

  const focusWindow = (key: WindowKey) => {
    zCounter.current += 1;

    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        z: zCounter.current,
      },
    }));
  };

  const closeWindow = (key: WindowKey) => {
    setWindows((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        isOpen: false,
      },
    }));
  };

  const focusedKey =
    Object.values(windows)
      .filter((w) => w.isOpen)
      .sort((a, b) => b.z - a.z)[0]?.key ?? null;

  return (
    <div className="desktop">
      {/* Windows will go here next */}

      <Dock
        items={[
          { key: "about", label: "About", icon: "👋" },
          { key: "projects", label: "Projects", icon: "🗂️" },
          { key: "resume", label: "Resume", icon: "📄" },
          { key: "contact", label: "Contact", icon: "✉️" },
        ]}
        isOpen={(k) => windows[k].isOpen}
        isFocused={(k) => focusedKey === k}
        onActivate={openWindow}
      />
    </div>
  );
}