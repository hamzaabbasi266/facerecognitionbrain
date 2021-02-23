import react from 'react';
import tachyons from 'tachyons';
const Rank = ({name,enteries})=>{
    return(
                <div className="f3 white">
                {`${name} , your current entries count is...`}
        <div className='white f1 '>
            {enteries}
        </div>

            </div>
    )
}
export default Rank;