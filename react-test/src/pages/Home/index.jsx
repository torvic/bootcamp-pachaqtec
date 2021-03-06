import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Button } from 'antd';
import { Divider } from 'antd';

const { Header, Content, Footer } = Layout;

const Home = () => {
  const [data, setData] = useState(null);
  const [nombreMascota, setNombreMascota] = useState('');
  const [tipoMascota, setTipoMascota] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get('http://localhost:5000/mascotas');
      let data = await res.data;
      console.log(data);
      setData(data);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (nombreMascota === '') {
      isValid = false;
    }
    if (tipoMascota === '') {
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post('http://localhost:5000/mascotas', {
        id: Math.random() * 100,
        nombre: nombreMascota,
        tipo: tipoMascota,
      });
      console.log('response', response);
      setNombreMascota('');
      setTipoMascota('');
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#fff' }}>
        <Row justify="end" gutter={[8, 16]}>
          <Col>
            <Button type="primary">Iniciar Sesion</Button>
          </Col>
          <Col>
            <Button type="primary">Registrarse</Button>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Content>
          <div className="hero-image">
            <div className="carousel">
              <Carousel autoplay>
                <div className="hero-image-1">
                  <div></div>
                </div>
                <div className="hero-image-2">
                  <div></div>
                </div>
                <div className="hero-image-3">
                  <div></div>
                </div>
              </Carousel>
            </div>
            <div className="content-front">
              <h2>Unete a nuestra comunidad y planea tu viaje a la medida</h2>
              <Button type="primary">Comienza tu viaje </Button>
            </div>
          </div>
        </Content>
        <Content>
          <div style={{ height: '25%' }}>Hello</div>
        </Content>
        <Content style={{ height: '450px' }}>
          <div className="site-layout-content">
            <div className="home">
              <h1>Home</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/contacto">Contacto</Link>
                  </li>
                </ul>
              </nav>
              <h2>Agregar mascotas</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={nombreMascota}
                  onChange={(e) => setNombreMascota(e.target.value)}
                  placeholder="Nombre de mascota"
                />
                <br />
                <input
                  type="text"
                  value={tipoMascota}
                  onChange={(e) => setTipoMascota(e.target.value)}
                  placeholder="Tipo de mascota"
                />
                <br />
                <input type="submit" value="Registrar mascota" />
              </form>
              <h3>Lista de Mascotas</h3>
              <div>
                <ol>
                  {data &&
                    data.map((el) => (
                      <li key={el.id}>
                        {el.nombre} - {el.tipo}
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center', backgroundColor: '#1890ff' }}>
        Ant Design ??2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
