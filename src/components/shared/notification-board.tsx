import { AlertCircleIcon, InfoIcon, TriangleAlertIcon } from 'lucide-react';
import React from 'react';

type NotificationType = 'info' | 'warning' | 'error';

interface NotificationBoardProps {
  type?: NotificationType;
  children?: React.ReactNode;
}

const styles: Record<
  NotificationType,
  { border: string; bg: string; icon: typeof InfoIcon; iconColor: string; textColor: string }
> = {
  info: {
    border: 'border-blue-700',
    bg: 'bg-blue-900',
    icon: InfoIcon,
    iconColor: 'text-blue-300',
    textColor: 'text-blue-100',
  },
  warning: {
    border: 'border-yellow-700',
    bg: 'bg-yellow-900',
    icon: TriangleAlertIcon,
    iconColor: 'text-yellow-200',
    textColor: 'text-yellow-50',
  },
  error: {
    border: 'border-red-700',
    bg: 'bg-red-900',
    icon: AlertCircleIcon,
    iconColor: 'text-red-300',
    textColor: 'text-red-50',
  },
};

export const NotificationBoard = ({
  type = 'info',
  children,
}: NotificationBoardProps): React.ReactElement => {
  const style = styles[type];
  const Icon = style.icon;

  return (
    <div
      role={type === 'error' ? 'alert' : 'status'}
      aria-live="polite"
      className={`flex rounded-lg border-2 ${style.border} ${style.bg} p-1.5 md:p-3`}
    >
      <Icon className={`h-4 w-4 shrink-0 ${style.iconColor}`} aria-hidden="true" />
      <span className={`ml-1 md:ml-2 text-sm ${style.textColor}`}>{children}</span>
    </div>
  );
};
