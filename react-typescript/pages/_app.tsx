import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [])


  return (
    <div>
      <button onClick={ () => setCount(count +1 )}>klik</button>
      <div>Counter: {count}</div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
