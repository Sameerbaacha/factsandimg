import { useEffect, useState } from 'react'
import './App.css'
const factApi = "https://catfact.ninja/fact";
const imgApi = "https://api.thecatapi.com/v1/images/search";

function App() {
  const [facts, setfacts] = useState({})
  const [next, setnext] = useState(0)
  const [catimg, setcatimg] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imgRes, factsRes] = await Promise.all(
          [
            fetch(imgApi),
            fetch(factApi)
          ]
        );

        const imgData = await imgRes.json();
        const factsData = await factsRes.json();


        setcatimg(imgData)
        setfacts(factsData)
        // console.log(imgData)


      }
      catch (err) {
        console.log("facts m error aya h", err.message)
      }
    }
    fetchData();
  }, [next])


  return (
    <div className='m-0'>
      <div>
        <h1 >Cat Facts</h1>
      </div>
      <br />
      <br />
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex md:flex-row flex-col items-center"
          bis_skin_checked={1}
        >
          <div
            className=" md:w-96 w-5/6 "
            bis_skin_checked={1}
          >
            <img
              className="object-contain object-center rounded w-80 with"
              alt="hero"
              src={catimg[0]?.url}
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            bis_skin_checked={1}
          >
            <p className='font-medium text-2xl text-wrap txt'>{facts.fact}</p>
            <div className="mt-8 flex justify-center" bis_skin_checked={1}>
              <button onClick={() => { setnext(next + 1) }} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default App
