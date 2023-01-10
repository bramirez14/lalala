import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Row, Col, Card, Tag, Tooltip, List } from "antd";
import {
  CreditCardOutlined,
  FileDoneOutlined,
  TransactionOutlined,
  KeyOutlined,
  CloudDownloadOutlined,
  PhoneOutlined,
  LinkOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
const inter = Inter({ subsets: ["latin"] });
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/*  <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}

        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> 
        </div>*/}
        {/*  <h1 className={styles.cinzel}> SAEL</h1> */}

        <Row gutter={[20, 10]}>
          <Col md={12} xl={12}>
            {" "}
            <Card className={styles.card2}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                <CreditCardOutlined
                  style={{ fontSize: 30, marginRight: 20, color: "#fa6400" }}
                />
                <h2 className={inter.className}>Tarjetas</h2>
              </div>
              <p style={{ fontSize: 18, color: "#a8a8a8" }}>
                Resumen, límites, débito automático...
              </p>
            </Card>
          </Col>

          <Col md={12} xl={12}>
            <Card className={styles.card2}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                <FileDoneOutlined
                  style={{ fontSize: 30, marginRight: 20, color: "#fa6400" }}
                />
                <h2 className={inter.className}>Cuentas</h2>
              </div>
              <p style={{ fontSize: 18, color: "#a8a8a8" }}>
                Movimientos, resumen, constancia de CBU, cheques.
              </p>
            </Card>
          </Col>

          <Col md={12} xl={12}>
            <Card className={styles.card2}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                <KeyOutlined
                  style={{ fontSize: 30, marginRight: 20, color: "#fa6400" }}
                />
                <h2 className={inter.className}>Claves</h2>
              </div>
              <p style={{ fontSize: 18, color: "#a8a8a8" }}>
                PIN Banelco, Token, Usuario, Clave Galicia.
              </p>
            </Card>
          </Col>

          <Col md={12} xl={12}>
            <Card className={styles.card2}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "nowrap",
                }}
              >
                <TransactionOutlined
                  style={{ fontSize: 30, marginRight: 20, color: "#fa6400" }}
                />
                <h2 className={inter.className}>Transferencias</h2>
              </div>
              <p style={{ fontSize: 18, color: "#a8a8a8" }}>
                Nacionales, Internacionales.
              </p>
            </Card>
          </Col>
        </Row>

      </main>
        <h1 style={{ textAlign:'center' }}>N4</h1>
      <div className={styles.main}>
        <Row gutter={[20, 10]}>
          <Col md={24} xl={24}>
            <Card
              className={styles.card2}
              style={{ width: "50vw" }}
            
            >
              <Title level={2}>
                ¿Cómo pido el certificado de asistencia en viaje?{" "}
              </Title>
              <Title level={3}>Visa</Title>

              <Paragraph>
                El certificado de asistencia es obligatorio con Visa para las
                tarjetas Platinum y Signature y tenés que generarlo antes del
                viaje.
              </Paragraph>
              <Paragraph>
                Podés hacerlo desde Online Banking {">"} Sección Tarjetas {">"}{" "}
                Hacé clic en la tarjeta Visa {">"} Más Opciones {">"}{" "}
                Certificado Seguro de Viaje.
              </Paragraph>

              <Paragraph>
                ☝️ Importante: Aplica para todas las personas que hayan abonado
                el 100% del pasaje con las tarjetas Visa Platinum o Visa
                Signature. Depende de la tarjeta de crédito que tengas.
              </Paragraph>

              <Title level={3}>MasterCard</Title>
              <Paragraph>
                El certificado de cobertura no es obligatorio con Mastercard.
                <div style={{ marginTop: 20 }}>
                  <Tag
                    color="#fa6400"
                    icon={<LinkOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel:">
                      Generar certificado
                    </a>
                  </Tag>
                  <Tag
                    color="#fa6400"
                    icon={<PhoneOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel:">
                      Llamar
                    </a>
                  </Tag>{" "}
                </div>
              </Paragraph>

              <Title level={3}>American Express</Title>

              <Paragraph>
                El certificado de asistencia no es obligatorio con American
                Express, pero podés generarlo igual.
                <div style={{ marginTop: 20 }}>
                  <Tag
                    color="#fa6400"
                    icon={<LinkOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel:">
                      Axa-Assistance
                    </a>
                  </Tag>{" "}
                </div>
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
      <div className={styles.main}>
        <Row gutter={[20, 10]}>
          <Col md={24} xl={24}>
            <Card className={styles.card2} style={{ width: "50vw" }}>
              <Title level={2}>
                ¿Cómo denuncio el robo o pérdida de mi tarjeta?
              </Title>
              <Title level={4}>Dentro del país</Title>
              <Paragraph>
                Vamos a bloquear tu tarjeta y te enviaremos una nueva.
              </Paragraph>
              <ul style={{ marginLeft: 16 }}>
                <li>
                  Tarjeta de crédito: te la enviaremos apróximadamente en 5 días
                  hábiles al domicilio que tenés registrado
                </li>
                <li>
                  Tarjeta de débito: te la enviaremos apróximadamente en 10 días
                  hábiles al domicilio que tenés registrado.
                </li>
              </ul>
              <Paragraph>
                ☝️ Recordá que podes contactarnos todos los días a cualquier
                hora por Whatsapp o via telefonica {">"} opción "Tarjetas" y
                también podés retirar efectivo sin la tarjeta de débito.
                <div style={{ marginTop: 20 }}>
                  <Tag
                    color="#fa6400"
                    icon={<LinkOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="https://ayuda.bancogalicia.com.ar/n4/no-tengo-tarjeta-de-debito" target='_blank'>
                      retirar efectivo
                    </a>
                  </Tag>
                  <Tag
                    color="#fa6400"
                    icon={<WhatsAppOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="https://api.whatsapp.com/send/?phone=5491144398558&text=%C2%A1Hola!%20Necesito%20la%20reposici%C3%B3n%20de%20mi%20tarjeta.&app_absent=0" target='_blank'>
                      reposición de mi tarjeta
                    </a>
                  </Tag>
                  <Tag
                    color="#fa6400"
                    icon={<PhoneOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel:0810-444-6500">
                      0810-444-6500
                    </a>
                  </Tag>
                </div>
              </Paragraph>{" "}
   
              <Title level={4}> En el exterior</Title>
              <Paragraph>
                <strong>Visa / Visa Business / Corporate</strong>: Desde EE:UU y
                Canadá podes llamar gratis.
                <div style={{ marginTop: 20 }}>
                  <Tag
                    color="#fa6400"
                    icon={<PhoneOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel:1-800-847-2911">
                      1-800-847-2911
                    </a>
                  </Tag>{" "}
                </div>
              </Paragraph>
              <Paragraph>
                Desde el resto del mundo podés llamar con cobro revertido.
                <div style={{ marginTop: 20 }}>
                  <Tag
                    color="#fa6400"
                    icon={<PhoneOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel: 1 (303) 967-1098">
                      1 (303) 967-1098
                    </a>
                  </Tag>{" "}
                </div>
              </Paragraph>
              <Paragraph>
                <strong>MasterCard:</strong> Desde cualquier lugar del mundo,
                podés llamar con cobro revertido.
                <div style={{ marginTop: 20 }}>
                  <Tag
                    color="#fa6400"
                    icon={<PhoneOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel:(54-11) 4340-5656">
                      (54-11) 4340-5656
                    </a>
                  </Tag>{" "}
                </div>
              </Paragraph>
              <Paragraph>
                <strong>American Express:</strong> Desde cualquier lugar del
                mundo, podés llamar con cobro revertido.
                <div style={{ marginTop: 20 }}>
                  <Tag
                    color="#fa6400"
                    icon={<PhoneOutlined style={{ fontSize: 20 }} />}
                  >
                    <a href="tel: (54-11) 4379-2300">
                      (54-11) 4379-2300
                    </a>
                  </Tag>{" "}
                </div>
              </Paragraph>
              <Title level={3}></Title>
              <Paragraph></Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
      <style>
        {" "}
        @import
        url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400&display=swap');
      </style>
    </>
  );
}
