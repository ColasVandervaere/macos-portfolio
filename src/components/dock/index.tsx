// src/components/Dock.tsx
import type { ReactNode } from "react";

export type DockKey = string;

export type DockItem<K extends DockKey = DockKey> = {
  key: K;
  label: string;
  icon: ReactNode;
};

type Props<K extends DockKey = DockKey> = {
  items: DockItem<K>[];
  isOpen?: (key: K) => boolean;
  isFocused?: (key: K) => boolean;
  onActivate: (key: K) => void;
};

export function Dock<K extends DockKey>({
  items,
  isOpen,
  isFocused,
  onActivate,
}: Props<K>) {
  return (
    <div className="dockWrap" aria-label="Dock">
      <div className="dock">
        {items.map((it) => {
          const open = isOpen?.(it.key) ?? false;
          const focused = isFocused?.(it.key) ?? false;

          return (
            <button
              key={String(it.key)}
              className={`dockItem ${focused ? "dockItem--focused" : ""}`}
              onClick={() => onActivate(it.key)}
              title={it.label}
              aria-label={it.label}
              type="button"
            >
              <div className="dockIcon">{it.icon}</div>
              <div className={`dockDot ${open ? "dockDot--on" : ""}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}