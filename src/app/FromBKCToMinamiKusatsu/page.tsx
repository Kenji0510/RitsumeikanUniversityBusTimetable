import Link from 'next/link';


export default function ReturnList() {

    return (
        <div>
            <h2 className='destination-list'>
                <Link className='link-button' href="/ToMinamiKusatsu">南草津駅行</Link><br></br>
                <Link className='link-button' href="/ToKusatsu">草津駅行</Link><br></br>
            </h2>
        </div>
    )
}