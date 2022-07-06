import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout';

export default function Pricing() {
  return (
    <>
      <h1>Pricing Page</h1>

      <p className="description">
        Get started by editing <code className="code">pages/pricing/index.js</code>
      </p>
    </>
  );
}

Pricing.getLayout = function getLayout(page) {
  return(
    <MainLayout>
      {page}
    </MainLayout>
  )
}
