import Image from 'next/image'
import Link from 'next/link';
import './globals.css'


export default function Home() { 

  return (
    <div>
      <h2 className='destination-list'>
        <Link className='link-button' href="FromMinamiKusatsuToBKC">南草津駅→BKC</Link><br></br>
        <Link className='link-button' href="FromBKCToMinamiKusatsu">BKC→南草津駅</Link><br></br>
      </h2>
    </div>
  );
}
