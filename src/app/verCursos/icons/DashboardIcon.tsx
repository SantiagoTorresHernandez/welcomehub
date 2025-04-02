// app/verCursos/icons/DashboardIcon.tsx
import React from 'react';

interface DashboardIconProps {
  className?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M1.11111 11.1111H7.77778C8.39111 11.1111 8.88889 10.6144 8.88889 10V1.11111C8.88889 0.496667 8.39111 0 7.77778 0H1.11111C0.497778 0 0 0.496667 0 1.11111V10C0 10.6144 0.497778 11.1111 1.11111 11.1111ZM0 18.8889C0 19.5033 0.497778 20 1.11111 20H7.77778C8.39111 20 8.88889 19.5033 8.88889 18.8889V14.4444C8.88889 13.83 8.39111 13.3333 7.77778 13.3333H1.11111C0.497778 13.3333 0 13.83 0 14.4444V18.8889ZM11.1111 18.8889C11.1111 19.5033 11.6078 20 12.2222 20H18.8889C19.5033 20 20 19.5033 20 18.8889V11.1111C20 10.4967 19.5033 10 18.8889 10H12.2222C11.6078 10 11.1111 10.4967 11.1111 11.1111V18.8889ZM12.2222 7.77778H18.8889C19.5033 7.77778 20 7.28111 20 6.66667V1.11111C20 0.496667 19.5033 0 18.8889 0H12.2222C11.6078 0 11.1111 0.496667 11.1111 1.11111V6.66667C11.1111 7.28111 11.6078 7.77778 12.2222 7.77778Z"
    fill = "currentColor"
    />
  </svg>
);

export default DashboardIcon;
