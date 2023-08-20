import React from 'react'
import './Transactions.css'

import TransContent from "./shared/TransContent"
import TransHeader from './shared/TransHeader'

const Transactions = () => {
  return (
    <section className="trans">
      <TransHeader />
      <TransContent />
    </section>
  )
}

export default Transactions