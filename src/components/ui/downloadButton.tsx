'use client';

import { Button } from "@/components/ui/button";   // ← 당신의 Button 경로

interface DownloadButtonProps {
  fileName: string;
  label?: string;
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function DownloadButton({
  fileName,
  label = "Download Portfolio",
  variant = "default",
  size = "default",
  className,
  ...props
}: DownloadButtonProps) {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/downloads/${fileName}`;
    link.download = fileName;           // 다운로드될 파일명 지정
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleDownload}
      {...props}
    >
      {label}
    </Button>
  );
}