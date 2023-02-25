import { NotiMessadge } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <div>
      <NotiMessadge>{message}</NotiMessadge>
    </div>
  );
};
