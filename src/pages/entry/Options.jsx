import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import Row from 'react-bootstrap/Row';

const Options = ({ optionType }) => {

    const [ items, setItems ] = useState([]);

    //optionType is 'scope' or 'toppings'
    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then( response => setItems(response.data))
            .catch((error) => {
                // TODO: handle error response
            });
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

    const optionItems = items.map( item => (
        <ItemComponent 
            key={item.name}
            name={item.name}
            imagePath={item.imagePath} 
        />
    ));
    return(
        <Row>{optionItems}</Row>
    );
};

export default Options; 