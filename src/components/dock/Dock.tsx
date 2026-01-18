import "./dock.css";

export type DockKey = string;

export type DockItem<K extends DockKey = DockKey> = {
  key: K;
  label: string;
  icon: string;
  url?: string;
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
              style={{ "--bg": `url(${it.icon})` } as React.CSSProperties}
              onClick={() => {
                if (it.url) {
                  window.open(it.url, "_blank");
                } else {
                  onActivate(it.key);
                }
              }}
              title={it.label}
              aria-label={it.label}
              type="button"
            >
              <div className="dockIcon">
                {it.icon.length > 3 ? "" : it.icon}
              </div>
              <div className={`dockDot ${open ? "dockDot--on" : ""}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
