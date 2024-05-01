import {useEffect , useState , useRef} from 'react'

const Scroll = () => {

const [dataApi, setDataApi] = useState();

 const useOfRef = useRef()

try {
    useEffect(() => {
        fetch("https://dummyjson.com/products")
          .then((res) => res.json())
          .then((dataApi) => setDataApi(dataApi));
      }, []);
} catch (error) {
    if (error) {
        return <h1>please w8</h1>
    }
}

function handleEventTop(params) {
    window.scrollTo({
        top:0,left:0, behavior:'smooth'
    })
}


function handleBottom(params) {

    window.scrollTo({
        top:100,left:0, behavior:'smooth'
    })
}

  return (
    <div>
        <h2>Scroll to tab and botton ferature </h2>
        <h3>this is a top section </h3>

        <button onClick={handleBottom}>
            Scroll to bottom
        </button>

        <ul>
            {dataApi && dataApi.products &&  dataApi.products.length ? dataApi.products.map( (items , index) => {
                 return <li key={index}>{items.title}</li>
            }) :null}
        </ul>

        <button  onClick={handleEventTop}>
            Scroll to top
        </button>
    </div>
  )
}

export default Scroll