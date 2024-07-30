import React from 'react';
import { Card, Title, BarChart, Subtitle, Tooltip } from '@tremor/react';

const data = [
    {
      name: "Hospital Clínico Universidad de Chile",
      abbreviation: "HC Universidad de Chile",
      "Seguidores Totales": 2500000,
      Facebook: 800000,
      Twitter: 500000,
      Instagram: 700000,
      YouTube: 300000,
      TikTok: 200000
    },
    {
      name: "Fundación Cardiovascular de Colombia",
      abbreviation: "F Cardiovascular de Colombia",
      "Seguidores Totales": 2300000,
      Facebook: 750000,
      Twitter: 450000,
      Instagram: 650000,
      YouTube: 250000,
      TikTok: 200000
    },
    {
        name: "Hospital Israelita Albert Einstein",
        abbreviation: "H I. Albert Einstein",
        "Seguidores Totales": 2100000,
        Facebook: 700000,
        Twitter: 400000,
        Instagram: 600000,
        YouTube: 200000,
        TikTok: 200000
      },
      {
        name: "Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán",
        abbreviation: "I. N. C. M. N. S. Z.",
        "Seguidores Totales": 1900000,
        Facebook: 650000,
        Twitter: 350000,
        Instagram: 550000,
        YouTube: 200000,
        TikTok: 150000
      },
      {
        name: "Hospital Italiano de Buenos Aires",
        "Seguidores Totales": 1700000,
        Facebook: 600000,
        Twitter: 300000,
        Instagram: 500000,
        YouTube: 150000,
        TikTok: 150000
      },
      {
        name: "Clínica Alemana",
        "Seguidores Totales": 1500000,
        Facebook: 550000,
        Twitter: 250000,
        Instagram: 450000,
        YouTube: 150000,
        TikTok: 100000
      },
      {
        name: "Hospital São Paulo",
        "Seguidores Totales": 1300000,
        Facebook: 500000,
        Twitter: 200000,
        Instagram: 400000,
        YouTube: 100000,
        TikTok: 100000
      },
      {
        name: "Hospital de Clínicas José de San Martín",
        "Seguidores Totales": 1100000,
        Facebook: 450000,
        Twitter: 150000,
        Instagram: 350000,
        YouTube: 100000,
        TikTok: 50000
      },
      {
        name: "Instituto Nacional de Cancerología",
        "Seguidores Totales": 900000,
        Facebook: 400000,
        Twitter: 100000,
        Instagram: 300000,
        YouTube: 50000,
        TikTok: 50000
      },
      {
        name: "Hospital Universitario San Ignacio",
        "Seguidores Totales": 700000,
        Facebook: 350000,
        Twitter: 50000,
        Instagram: 250000,
        YouTube: 25000,
        TikTok: 25000
      }
  ];
  

const dataFormatter = (number) => {
  return Intl.NumberFormat("es").format(number).toString();
};

const TopHealthInstitutions = () => {
  return (
    <Card className="mt-8">
      <Title>Top 10 Instituciones de Salud en Latinoamérica</Title>
      <Subtitle>Por número total de seguidores en redes sociales</Subtitle>
      <BarChart
        className="mt-6"
        data={data.map(item => ({
          ...item,
          name: item.abbreviation // Usar la abreviatura para el gráfico
        }))}
        index="name"
        categories={["Seguidores Totales"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={120} // Ajusta el ancho del eje Y
        layout="vertical"
        yAxisProps={{
          style: {
            fontSize: '10px', // Reducir el tamaño de la fuente
          },
        }}
      >
        {data.map((item, index) => (
          <Tooltip key={index} label={item.name} placement="top">
            <div>
              {/* El contenido del tooltip puede ser personalizado aquí */}
            </div>
          </Tooltip>
        ))}
      </BarChart>
    </Card>
  );
};

export default TopHealthInstitutions;
