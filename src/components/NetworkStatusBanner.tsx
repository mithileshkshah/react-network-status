import React from "react";
import { useNetworkStatus } from "../hooks/userNetworkStatus";

export interface NetworkStatusBannerProps {
  onlineText?: string;
  offlineText?: string;
  className?: string;
  style?: React.CSSProperties;
  showOnlyWhenOffline?: boolean;
}

export const NetworkStatusBanner: React.FC<NetworkStatusBannerProps> = ({
  onlineText = "You're back online.",
  offlineText = "You're offline. Check your internet connection.",
  className = "",
  style = {},
  showOnlyWhenOffline = true,
}) => {
  const isOnline = useNetworkStatus();

  if (showOnlyWhenOffline && isOnline) return null;

  return (
    <div
      className={className}
      style={{
        backgroundColor: isOnline ? "#d4edda" : "#f8d7da",
        color: isOnline ? "#155724" : "#721c24",
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        ...style,
      }}
    >
      {isOnline ? onlineText : offlineText}
    </div>
  );
};
