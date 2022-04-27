import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NFTDropPage() {
  // auth
  const connectWithMetamask = useMetamask()

  const address = useAddress()
  const disconnect = useDisconnect()
  console.log(address)
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500  lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-500 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png"
            />
          </div>
          <div className="space-y-5 p-5 text-center">
            <h1 className="text-4xl font-bold text-white"> STS Apes</h1>
            <h2 className="text-xl text-gray-300">
              Next generation NFT Collection
            </h2>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6 ">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The {''}
            <span className="font-extrabold underline decoration-pink-600/70">
              GenerativeSTS
            </span>{' '}
            {''}
            NFT marketplace
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {' '}
            {address ? 'Sign out' : 'Sign in'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-300">
            {' '}
            You are logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
          />
          <h1 className="lg:5xl text-3xl font-bold lg:font-extrabold">
            {' '}
            Generative STS | NFT Drop{' '}
          </h1>
          <p className="pt-2 text-xl text-green-500"> 13/21 NFT's claimed</p>
        </div>
        {/* Mint Button */}
        <button className="mt-10 h-16 w-full rounded-xl bg-red-600 font-bold text-white">
          {' '}
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
