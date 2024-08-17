import * as React from 'react';

import { ContactFormValues } from '@/components/pages/home/client/contact-form/contact-form';

import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '@react-email/components';

export interface InscriptionEmailProps {
  clientName: string;
  companyName: string;
}

export const NewEmailCustomer = ({ clientName, companyName }: InscriptionEmailProps) => (
  <Html>
    <Head />
    <Preview>Prosin Solutions HN</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Img width="170" src={"https://platinosoftware.blob.core.windows.net/develop/logo_black.png"} alt="Logo ceisa Hn" style={logo} /> */}
        <Text style={paragraph}>Hola {clientName},</Text>
        <Text style={paragraph}>Gracias por visitar nuestro sitio web</Text>
        <Text style={paragraph}></Text>
        <Section style={quotedProductsContainer}>
          <Text style={paragraph}>Nos estaremos comunicando contigo para brindarte más información sobre los servicios que te interesan.</Text>
        </Section>
        <Text style={paragraph}>Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</Text>
        <Text style={paragraph}>
          Saludos cordiales,
          <br />
          {companyName}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>prosinsolutions@gmail.com</Text>
        <Text style={footer}>+504-9652-1175</Text>
        <Text style={footer}>
          Sps, Cortes, Barrio Guamilito, 2 y 3 calle, 9 Avenida, media cuadra antes del centro Comercial NOVA PRISA. San Pedro Sula, Honduras. C.A C.A
        </Text>
      </Container>
    </Body>
  </Html>
);

export const CustomerRegisteredEmail = ({ email, lastname, message, name, phone, subject }: ContactFormValues) => (
  <Html>
    <Head />
    <Preview>Prosin Solutions HN</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* <Img width="170" src={"https://platinosoftware.blob.core.windows.net/develop/logo_black.png"} alt="Logo ceisa Hn" style={logo} /> */}
        <Text style={paragraph}>Hola Prosin Solutions,</Text>
        <Text style={paragraph}>Nuevo cliente ha tratado de contactarte atraves del sitio web</Text>
        <Text style={paragraph}></Text>
        <Section style={quotedProductsContainer}>
          <Text style={paragraph}>Nombre: {name}</Text>
          <Text style={paragraph}>Apellido: {lastname}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>Telefono: {phone}</Text>
          <Text style={paragraph}>Asunto: {subject}</Text>
          <Text style={paragraph}>Mensaje: {message}</Text>
        </Section>
        <Text style={paragraph}>
          Saludos cordiales,
          <br />
        </Text>
        <Hr style={hr} />
        <Text style={footer}>prosinsolutions@gmail.com</Text>
        <Text style={footer}>+504-9652-1175</Text>
        <Text style={footer}>
          Sps, Cortes, Barrio Guamilito, 2 y 3 calle, 9 Avenida, media cuadra antes del centro Comercial NOVA PRISA. San Pedro Sula, Honduras. C.A C.A
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  maxWidth: '600px',
  padding: '20px 0 48px',
};

const logo = {
  display: 'block',
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
};

const quotedProductsContainer = {
  marginBottom: '20px',
};

const btnContainer = {
  marginBottom: '20px',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#CF9E27',
  borderRadius: '3px',
  color: '#fff',
  display: 'inline-block',
  fontSize: '16px',
  padding: '12px 24px',
  textAlign: 'center' as const,
  textDecoration: 'none',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  display: 'block',
  fontSize: '12px',
  marginBottom: '10px',
  textAlign: 'center' as const,
};
