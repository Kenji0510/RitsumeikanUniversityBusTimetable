import '../globals.css'


export default async function FetchDBData({destination}) {
    const res = await fetch("http://192.168.0.25:5000/busTimeApi/" + destination, { cache: "no-cache" });
    const data = await res.json();

    const via: string = data[0].via;
    const times: string[] = data[0].times;

    

    /*
    return (
        <div>
            <h2 className='destination-title'>{destination}</h2>
            {data.map((time: any, index: any) => (
                <h3 className='bus-time' key={index}>・{time.timeOfBus}</h3>
            ))}
        </div>
    );
    */

    return (
        <div>
            <h2 className='destination-title'>{via}</h2>
            {times && times.map((time: any, index: any) => (
                <h3 className='bus-time' key={index}>・{time}  {via}</h3>
            ))}
        </div>
    );
}