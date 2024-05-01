import {useState , useEffect} from 'react'

const Api = () => {

    const [data, setData] = useState();
    // const [dataInput, setDataInput] = useState('hii');

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);

   const [filterData , setFilterData] = useState(data);

  

   const inputFill = () => {

        const mainProducts = filterData.filter( (e) => {
            return filterData(e.target.value)
        })

        setFilterData(mainProducts)
   }


  return (
    <div>
          <input type='text' onChange={inputFill} />

            {filterData && filterData.map((item , index) => {
                return (
                    <div key={index}>
                        
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.address.city}</p>
                    </div>
                )
            })}

            <p>{filterData}</p>
    </div>
  )
}

export default Api