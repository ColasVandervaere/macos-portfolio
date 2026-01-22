import { useEffect, useRef, useState } from "react";
import "./App.css";
import linkedinIcon from "./assets/linkedin_logo.png";
import { Dock } from "./components/dock/Dock";
import { MobilePage } from "./components/mobile/MobilePage";
import { type ResizeDirection, Window } from "./components/window/Window";
import { About } from "./components/windows/About";
import { Contact } from "./components/windows/Contact";
import { Me } from "./components/windows/Me";
import { PositionFit } from "./components/windows/Position";
import { useIsMobile } from "./helpers/isMobile";

type WindowKey = "about" | "positionFit" | "me" | "contact" | "linkedin";

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
  const draggingKey = useRef<WindowKey | null>(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizingKey = useRef<WindowKey | null>(null);
  const resizeDirection = useRef<ResizeDirection | null>(null);
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0, mx: 0, my: 0 });

  const [windows, setWindows] = useState<Record<WindowKey, WindowState>>({
    about: {
      key: "about",
      isOpen: true,
      z: 0,
      x: 280,
      y: 150,
      width: 920,
      height: 630,
    },
    positionFit: {
      key: "positionFit",
      isOpen: false,
      z: 0,
      x: 140,
      y: 120,
      width: 1124,
      height: 720,
    },
    me: {
      key: "me",
      isOpen: false,
      z: 0,
      x: 360,
      y: 140,
      width: 1040,
      height: 720,
    },
    contact: {
      key: "contact",
      isOpen: false,
      z: 0,
      x: 200,
      y: 160,
      width: 780,
      height: 460,
    },
    linkedin: {
      key: "linkedin",
      isOpen: false,
      z: 0,
      x: 240,
      y: 180,
      width: 480,
      height: 360,
    },
  });

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

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

  const startDrag = (key: WindowKey, e: React.MouseEvent) => {
    focusWindow(key);

    draggingKey.current = key;

    dragOffset.current = {
      x: e.clientX - windows[key].x,
      y: e.clientY - windows[key].y,
    };
  };

  const startResize = (
    key: WindowKey,
    direction: ResizeDirection,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    focusWindow(key);
    resizingKey.current = key;
    resizeDirection.current = direction;
    const w = windows[key];
    resizeStart.current = {
      x: w.x,
      y: w.y,
      w: w.width,
      h: w.height,
      mx: e.clientX,
      my: e.clientY,
    };
  };

  const onMouseMove = (e: MouseEvent) => {
    if (draggingKey.current) {
      const key = draggingKey.current;
      setWindows((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        },
      }));
    }

    if (resizingKey.current && resizeDirection.current) {
      const key = resizingKey.current;
      const dir = resizeDirection.current;
      const start = resizeStart.current;
      const dx = e.clientX - start.mx;
      const dy = e.clientY - start.my;

      let newX = start.x;
      let newY = start.y;
      let newW = start.w;
      let newH = start.h;

      if (dir.includes("e")) newW = Math.max(200, start.w + dx);
      if (dir.includes("s")) newH = Math.max(200, start.h + dy);
      if (dir.includes("w")) {
        newW = Math.max(200, start.w - dx);
        newX = start.x + (start.w - newW);
      }
      if (dir.includes("n")) {
        newH = Math.max(200, start.h - dy);
        newY = start.y + (start.h - newH);
      }

      setWindows((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          x: newX,
          y: newY,
          width: newW,
          height: newH,
        },
      }));
    }
  };

  const onMouseUp = () => {
    draggingKey.current = null;
    resizingKey.current = null;
    resizeDirection.current = null;
  };

  const focusedZ =
    Object.values(windows)
      .filter((w) => w.isOpen)
      .sort((a, b) => b.z - a.z)[0]?.z ?? null;

  const isMobile = useIsMobile()
  return isMobile ? <MobilePage /> : (
     <div className="desktop">
      {windows.about.isOpen && (
        <Window
          title="About"
          isFocused={windows.about.z === focusedZ}
          style={{
            left: windows.about.x,
            top: windows.about.y,
            width: windows.about.width,
            height: windows.about.height,
            zIndex: windows.about.z,
          }}
          onFocus={() => focusWindow("about")}
          onClose={() => closeWindow("about")}
          onDragStart={(e) => startDrag("about", e)}
          onResizeStart={(dir, e) => startResize("about", dir, e)}
        >
          <About />
        </Window>
      )}

      {windows.positionFit.isOpen && (
        <Window
          title="Position Fit"
          isFocused={windows.positionFit.z === focusedZ}
          style={{
            left: windows.positionFit.x,
            top: windows.positionFit.y,
            width: windows.positionFit.width,
            height: windows.positionFit.height,
            zIndex: windows.positionFit.z,
          }}
          onFocus={() => focusWindow("positionFit")}
          onClose={() => closeWindow("positionFit")}
          onDragStart={(e) => startDrag("positionFit", e)}
          onResizeStart={(dir, e) => startResize("positionFit", dir, e)}
        >
          <PositionFit />
        </Window>
      )}

      {windows.me.isOpen && (
        <Window
          title="Resume"
          isFocused={windows.me.z === focusedZ}
          style={{
            left: windows.me.x,
            top: windows.me.y,
            width: windows.me.width,
            height: windows.me.height,
            zIndex: windows.me.z,
          }}
          onFocus={() => focusWindow("me")}
          onClose={() => closeWindow("me")}
          onDragStart={(e) => startDrag("me", e)}
          onResizeStart={(dir, e) => startResize("me", dir, e)}
        >
          <Me />
        </Window>
      )}

      {windows.contact.isOpen && (
        <Window
          title="Contact"
          isFocused={windows.contact.z === focusedZ}
          style={{
            left: windows.contact.x,
            top: windows.contact.y,
            width: windows.contact.width,
            height: windows.contact.height,
            zIndex: windows.contact.z,
          }}
          onFocus={() => focusWindow("contact")}
          onClose={() => closeWindow("contact")}
          onDragStart={(e) => startDrag("contact", e)}
          onResizeStart={(dir, e) => startResize("contact", dir, e)}
        >
          <Contact />
        </Window>
      )}

      <Dock
        items={[
          { key: "about", label: "About", icon: "👋" },
          { key: "positionFit", label: "Position Fit", icon: "🪢" },
          { key: "me", label: "Me", icon: "👨" },
          { key: "contact", label: "Contact", icon: "📞" },
          {
            key: "linkedin",
            label: "LinkedIn",
            icon: linkedinIcon,
            url: "https://linkedin.com/in/colas-vandervaere",
          },
        ]}
        isOpen={(k) => windows[k].isOpen}
        isFocused={(k) => focusedZ === windows[k].z}
        onActivate={openWindow}
      />
    </div>
  );
}
