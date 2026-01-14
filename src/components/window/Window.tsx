import type { ReactNode } from "react";
import "./Window.css";

type Props = {
  title: string;
  children: ReactNode;

  style?: React.CSSProperties; // position/size/zIndex from App
  isFocused?: boolean;

  onFocus?: () => void;
  onClose?: () => void;
  onDragStart?: (e: React.MouseEvent) => void;
  onResizeStart?: (direction: ResizeDirection, e: React.MouseEvent) => void;
};

export type ResizeDirection = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export function Window({
  title,
  children,
  style,
  isFocused = false,
  onFocus,
  onClose,
  onDragStart,
  onResizeStart,
}: Props) {
  return (
    <div
      className={`window ${isFocused ? "window--focused" : ""}`}
      style={style}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={title}
    >
      <div className="window__titlebar" onMouseDown={onDragStart}>
        <div className="window__traffic">
          <button
            className="dot dot--red"
            type="button"
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
          />
          <button
            className="dot dot--grey"
            type="button"
            aria-label="Minimize"
            onClick={(e) => e.stopPropagation()}
            disabled
          />
          <button
            className="dot dot--grey"
            type="button"
            aria-label="Zoom"
            onClick={(e) => e.stopPropagation()}
            disabled
          />
        </div>

        <div className="window__title">{title}</div>
        <div className="window__spacer" />
      </div>

      <div className="window__content">{children}</div>

      {onResizeStart && (
        <>
          <div
            className="window__resize-handle window__resize-handle--n"
            onMouseDown={(e) => onResizeStart("n", e)}
          />
          <div
            className="window__resize-handle window__resize-handle--s"
            onMouseDown={(e) => onResizeStart("s", e)}
          />
          <div
            className="window__resize-handle window__resize-handle--e"
            onMouseDown={(e) => onResizeStart("e", e)}
          />
          <div
            className="window__resize-handle window__resize-handle--w"
            onMouseDown={(e) => onResizeStart("w", e)}
          />
          <div
            className="window__resize-handle window__resize-handle--ne"
            onMouseDown={(e) => onResizeStart("ne", e)}
          />
          <div
            className="window__resize-handle window__resize-handle--nw"
            onMouseDown={(e) => onResizeStart("nw", e)}
          />
          <div
            className="window__resize-handle window__resize-handle--se"
            onMouseDown={(e) => onResizeStart("se", e)}
          />
          <div
            className="window__resize-handle window__resize-handle--sw"
            onMouseDown={(e) => onResizeStart("sw", e)}
          />
        </>
      )}
    </div>
  );
}
