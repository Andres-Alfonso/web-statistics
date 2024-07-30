"use client";

import { Card, Title, Text, Select, SelectItem, Legend, LineChart, BarChart } from '@tremor/react';
import React, { useState } from 'react';
import { RiCalendarLine } from 'react-icons/ri';
import {LineChartHero} from '@/components/staticLineChart';
import TopHealthInstitutions from '@/components/instGrahp/ComponentIntsTop';

const dataFormatter = (value) => `${value}`;

const DashboardPage = () => {
  const stats = [
    { label: "Total Seguidores", value: 123456 },
    { label: "Nuevos Seguidores", value: 4567 },
    { label: "Posts", value: 89 },
    { label: "Comentarios", value: 234 },
  ];

  return (
    <div className="dashboard min-h-screen bg-gray-100 py-10">
      <div className="max-w-full mx-auto px-2">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center">Dashboard</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 shadow-lg rounded-lg bg-white text-center">
              <Text className="text-2xl font-semibold">{stat.value}</Text>
              <Text className="text-gray-500">{stat.label}</Text>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="shadow-lg p-6 rounded-lg bg-white">
            <LineChartHero/>
          </div>
          <div className="shadow-lg p-6 rounded-lg bg-white">
            <TopHealthInstitutions/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
