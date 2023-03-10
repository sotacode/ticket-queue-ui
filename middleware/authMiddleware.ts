// Importe las dependencias necesarias
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';

interface AuthDataProps {
  agente: string;
  escritorio: string
}

// Define su middleware
const authMiddleware = (handler: GetServerSideProps): GetServerSideProps => {
  return async (context) => {
    // Obtenga la información de la solicitud y la respuesta
    const { req, res } = context;
    let authData: string | null = null;

    let isAuthenticated = false;
    if (typeof window !== 'undefined') {
      const authData: AuthDataProps = JSON.parse(localStorage.getItem('@datauser') || "{'agente':'', 'escritorio':''}");

      if(
        authData.agente !== undefined && 
        authData.agente !== "" &&
        authData.escritorio !== undefined &&
        authData.escritorio !== "") isAuthenticated = true;
      else isAuthenticated = false
    } else {
      isAuthenticated = false
    }
    

    // Si el usuario no está autenticado, redirija al usuario a la página de inicio de sesión
    if (!isAuthenticated) {
      res.writeHead(302, { Location: '/ingreso' });
      res.end();
      return { props: {} };
    }

    // Si el usuario está autenticado, continúe con la solicitud
    return await handler(context);
  };
};

export default authMiddleware;