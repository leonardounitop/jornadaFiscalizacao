
import Carousel from "./Carousel";
import styles from './App.module.css'
import './index.css'
import { useEffect, useState } from "react";
import { differenceInDays } from 'date-fns'

function App() {
  // Usar um useEffect para posteriormente colocar em um estado e renderizar os dados de cada cliente

  const [clientes, setClientes] = useState(null);
  const [motoristasSemFolga, setMotoristasSemFolga] = useState(null);


  // Verificar quantas placas estao sem posicao
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:8001/apiJornada.php?dados=posicao', {
        cache: "no-cache",
      });


      console.log(response);

      const json = await response.json();

      console.log(json);


      const arrayJsonClientes = json[0] || null;
      const arrayJsonPosicaoPlaca = json[1] || null;
      let objClientes = {};

      if (arrayJsonClientes.length) {
        arrayJsonClientes.forEach(({ nome_cliente, id_cliente }) => {
          objClientes = { ...objClientes, [id_cliente]: { nome: nome_cliente, placas: 0 } }
        });
      }

      arrayJsonPosicaoPlaca.forEach(({ id_cliente, data_evento }) => {
        const diff = differenceInDays(new Date(), data_evento) >= 7;

        if (diff || !data_evento) {
          const totalSemPosicao = objClientes[id_cliente].placas + 1;
          objClientes = { ...objClientes, [id_cliente]: { nome: objClientes[id_cliente].nome, placas: totalSemPosicao } };
        }
      });


      const arrayClientesTotal = Object.values(objClientes);
      const arrayClientes = [];

      arrayClientesTotal.forEach(({ nome, placas }) => {

        arrayClientes.push([nome, placas]);
      });

      if (arrayClientes.length) {
        setClientes(arrayClientes);
      }
    })()
  }, []);



  useEffect(() => {


    (async () => {
      const response = await fetch('http://localhost:8001/apiJornada.php?dados=folga', {
        cache: "no-cache",
      });

      const json = await response.json();

      // const arrayFolga = [];

      console.log(json);


    })()


  }, [])


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Unitop</h1>
        <div className={styles.containerFlex}>
          <Carousel titulo={'Veículos sem comunicação'} items={clientes ? clientes : [['Carregando...']]} />
          {/* <Carousel titulo={'Motoristas sem descanso'} items={clientes ? clientes : ['Carregando...']} /> */}
        </div>

      </div>
    </>
  )
}

export default App
