import Link from 'next/link';
//import './globals.css'


export default function GoingList() { 

  return (
    <div>
      <h2 className='destination-list'>
        <Link className='link-button' href="/ToRitsumeikan">立命館大学行（直通）</Link><br></br>
        <Link className='link-button' href="/ToRitsumeikanViaPanasonic">立命館大学行（パナソニック方面経由）</Link><br></br>
        <Link className='link-button' href="/ToRitsumeikanViaPanasonicEast">立命館大学行（パナソニック東口方面）</Link><br></br>
        <Link className='link-button' href="/ToRitsumeikanViaKagayaki">立命館大学行（かがやき通り/笠山経由）</Link><br></br>
        <Link className='link-button' href="/ToWelfareViaRitsumeikan">福祉センター（立命館大学経由）</Link><br></br>
        <Link className='link-button' href="/DirectToRitsumeikan">立命館大学行</Link>
      </h2>
    </div>
  );
}
