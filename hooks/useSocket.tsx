import { useEffect, useMemo, useState } from 'react';
import io, { Socket } from 'socket.io-client';

interface UseSocketProps {
  serverUrl: string;
}

interface UseSocketReturn {
  socket: Socket;
  online: boolean;
}

export const useSocket = ({ serverUrl }: UseSocketProps): UseSocketReturn => {
  const socket = useMemo(() => io(serverUrl, { transports: ['websocket'] }), [
    serverUrl,
  ]);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
  };
};
