export const DATA_AVAILABLE = 'DATA_AVAILABLE';
import Data from '../../data/interests.json';

export function getData(){
    return (dispatch) => {
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

  };
}
