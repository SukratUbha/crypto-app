import React from 'react'
import { useParams } from 'react-router-dom';

export default function DetailPage() {
    const { userId } = useParams();
    console.log(userId);
  return (
    <div>CoinDetailPage</div>
  )
}
