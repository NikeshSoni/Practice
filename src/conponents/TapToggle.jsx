import { useState} from 'react';


const TapToggle = () => {

    const [tabOne , setTapOne] = useState('i am one')

    console.log(tabOne);
  return (
    <div>
        <div>
            <button onClick={ () => {setTapOne('hello')}}>
                Btn One
            </button>

            <button onClick={ () => {setTapOne('i am ')}}>
                Btn One
            </button>

            <button onClick={ () => {setTapOne('nikesh')}}>
                Btn One
            </button>
        </div>

        <div>
            {tabOne}

            
        </div>
    </div>
  )
}

export default TapToggle