import { useState }from 'react';
import * as  C from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item;
}

export const ListItem = ({item}: Props) => {

    const [isChecked, setIsChecked] = useState(item.done);

    const handleDone = (done: boolean) => {
        if (done === true ){
            item.done = true;
            setIsChecked(true);
        }else{
            item.done = false;
            setIsChecked(false);
        }
    }

    return(
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => handleDone(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    );
}