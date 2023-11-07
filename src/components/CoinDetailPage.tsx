import React from 'react'
import { useParams } from 'react-router-dom';

export default function CoinDetailPage() {
    const { userId } = useParams();
    console.log(userId);
  return (
    <div>CoinDetailPage</div>
  )
}
