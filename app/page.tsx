import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';



export default function Dashboard() {
  const router = useRouter();
  const [chain, setChain] = useState('ethereum');
  const [address, setAddress] = useState('0x1234567890abcdef1234567890abcdef12345678');
  
  const handleShowBubblemap = () => {
    router.push(`/${chain}/${address}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f0921] text-white">
      <div className="w-full max-w-md p-6 rounded-lg bg-[#1a103a] shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <span className="text-purple-300">Bubble</span>
          <span className="text-yellow-300">maps</span>
          <span className="ml-2 text-gray-400 text-sm">Dashboard</span>
        </h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-purple-300">Blockchain</label>
          <select 
            value={chain} 
            onChange={(e) => setChain(e.target.value)}
            className="w-full p-2 rounded bg-[#2a1d4a] border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="ethereum">Ethereum</option>
            <option value="bsc">Binance Smart Chain</option>
            <option value="polygon">Polygon</option>
            <option value="arbitrum">Arbitrum</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1 text-purple-300">Wallet Address</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 rounded bg-[#2a1d4a] border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter wallet address"
          />
        </div>
        
        <button 
          onClick={handleShowBubblemap}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="7" strokeWidth="2" />
            <circle cx="12" cy="12" r="3" strokeWidth="2" />
          </svg>
          Show Bubblemap
        </button>
      </div>
      
      <div className="absolute bottom-4 left-4 text-xs text-gray-500 flex items-center">
        <span>Powered by </span>
        <span className="text-purple-400 font-medium ml-1">Bubblemaps</span>
      </div>
      
      {/* Background decoration elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-purple-900 opacity-20"
              style={{
                width: Math.random() * 12 + 4 + 'px',
                height: Math.random() * 12 + 4 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-purple-700 rounded-full opacity-30" />
        </div>
      </div>
    </div>
  );
}