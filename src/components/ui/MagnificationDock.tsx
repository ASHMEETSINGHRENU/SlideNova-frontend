"use client";

/**
 * MagnificationDock Component
 *
 * A premium macOS-inspired dock component with fluid magnification effects,
 * spring physics, and tooltips. Built with Framer Motion and styled for NOVA.
 */

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from "framer-motion";
import React, { Children, cloneElement, useEffect, useMemo, useRef, useState } from "react";

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
  isActive?: boolean;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
  labelPosition?: "top" | "bottom";
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
  labelPosition?: "top" | "bottom";
  isActive?: boolean;
};

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  labelPosition = "bottom",
  isActive = false,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-2xl md:rounded-full transition-colors cursor-pointer select-none ${
        isActive
          ? "bg-[#7655F6]/30 border-[#B5A1FF] text-white shadow-[0_0_15px_rgba(118,85,246,0.6)]"
          : "bg-[#181820]/90 border-[#B5A1FF]/20 text-[#E8E8F0]/80 hover:text-white hover:bg-[#20202B] hover:border-[#B5A1FF]/50 hover:shadow-[0_0_20px_rgba(118,85,246,0.35)]"
      } border backdrop-blur-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {/* Active Dot Indicator */}
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B5A1FF] shadow-[0_0_8px_#B5A1FF]" />
      )}

      {Children.map(children, (child) =>
        React.isValidElement(child)
          ? cloneElement(
              child as React.ReactElement<{
                isHovered?: MotionValue<number>;
                labelPosition?: "top" | "bottom";
              }>,
              { isHovered, labelPosition }
            )
          : child
      )}
    </motion.div>
  );
}

type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
  labelPosition?: "top" | "bottom";
};

function DockLabel({
  children,
  className = "",
  isHovered,
  labelPosition = "bottom",
}: DockLabelProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  const isBottom = labelPosition === "bottom";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: isBottom ? -4 : 4 }}
          animate={{ opacity: 1, y: isBottom ? 8 : -10 }}
          exit={{ opacity: 0, y: isBottom ? -4 : 4 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className={`${className} absolute ${
            isBottom ? "top-full" : "-top-9"
          } left-1/2 w-fit whitespace-pre rounded-lg border border-[#B5A1FF]/30 bg-[#09090D]/95 px-2.5 py-1 text-[11px] font-mono font-medium text-[#E8E8F0] shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_12px_rgba(118,85,246,0.3)] backdrop-blur-md pointer-events-none z-50`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type DockIconProps = {
  className?: string;
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
};

function DockIcon({ children, className = "" }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center transition-transform duration-200 ${className}`}>
      {children}
    </div>
  );
}

export function MagnificationDock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 58,
  distance = 140,
  panelHeight = 52,
  dockHeight = 68,
  baseItemSize = 40,
  labelPosition = "bottom",
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + 8),
    [dockHeight, magnification]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height }}
      className="flex max-w-full items-center justify-center overflow-visible"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} flex items-center w-fit gap-2 sm:gap-2.5 rounded-full border border-[#B5A1FF]/20 bg-[#181820]/75 backdrop-blur-xl p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(118,85,246,0.15)] relative overflow-visible`}
        style={{ minHeight: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            labelPosition={labelPosition}
            isActive={item.isActive}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel labelPosition={labelPosition}>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default MagnificationDock;
