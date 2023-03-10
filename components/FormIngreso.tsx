import useLocalStorage from '@/hooks/useLocalStorage';
import { Button, Card, Checkbox, Container, Input, Row, Spacer, Text, useInput } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const FormIngreso = () => {

    const router = useRouter();
    const [data, setData] = useLocalStorage("@datauser", {"agente":"", "escritorio":""});

    const [nombre, setNombre] = useState("")
    const [escritorio, setEscritorio] = useState("")

    const onChangeName = (e: any)=>{
        if(!e.defaultPrevented) e.preventDefault();
        let value = e.target.value;
        setNombre(value)  
    }

    const onChangeEscritorio = (e: any)=>{
        if(!e.defaultPrevented) e.preventDefault();
        let value = e.target.value;
        setEscritorio(value)  
    }

    const toDesktop = ()=>{
      if(nombre==="" || escritorio==="") return;
      setData({"agente": nombre, "escritorio": escritorio })
      router.push("/escritorio");
    }


  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: 'calc(100vh - 50px)' }}
      >
        <Card css={{ mw: '420px', p: '20px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            Ingresa
          </Text>
          <Input
                clearable
                bordered
                value={nombre}
                onChange={onChangeName}
                label='Nombre'
                initialValue=""
            />
          <Spacer y={1} />
          <Input.Password
                clearable
                bordered
                value={escritorio}
                onChange={onChangeEscritorio}
                label='Escritorio'
                initialValue=""
            />
          <Spacer y={2} />
          <Button
            onPress={toDesktop}
          >Ingresar</Button>
        </Card>
      </Container>
    </div>
  )
}




export default FormIngreso