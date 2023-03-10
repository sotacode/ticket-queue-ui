import React, { createContext, ReactNode } from 'react';
import { useSocket } from '../hooks/useSocket';
import { Socket } from 'socket.io-client';

interface SocketContextProps {
  children: ReactNode;
}

interface SocketContextValue {
  socket: Socket;
  online: boolean;
}

export const SocketContext = createContext<SocketContextValue>(
  {} as SocketContextValue
);

export const SocketProvider = ({ children }: SocketContextProps) => {
  const { socket, online } = useSocket({ serverUrl: 'http://localhost:8080' });

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
