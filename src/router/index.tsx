import React from 'react';
import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../layouts/RootLayout';
import { HomePage } from '../pages/HomePage';
import { EquipmentPage } from '../pages/EquipmentPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'equipment',
        element: <EquipmentPage />,
      },
    ],
  },
]);
