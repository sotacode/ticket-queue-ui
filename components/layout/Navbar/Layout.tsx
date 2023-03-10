
import { FC, ReactNode } from "react";
import { Container } from "@nextui-org/react";
import { Box } from "./Box";

interface Props {
    children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
    
  >
    {children}
  </Box>
);
