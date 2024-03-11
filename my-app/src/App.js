
import React, {useState} from 'react';
import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill('empty');

function App() {
  const [isCross, setIsCross]= useState(false);
  const [winMeassage, setWinMessage]= useState('');

  const checkIsWinner=()=>{
          if(itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2] && itemArray[0] !="empty"){
            setWinMessage(`${itemArray[0]} wins`)
          }else if(itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5] && itemArray[3] !="empty"){
            setWinMessage(`${itemArray[3]} wins`)
          }else if(itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8] && itemArray[6] !="empty"){
            setWinMessage(`${itemArray[6]} wins`)
          }else if(itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6] && itemArray[0] !="empty"){
            setWinMessage(`${itemArray[0]} wins`)
          }else if(itemArray[1]===itemArray[4] && itemArray[4]===itemArray[7] && itemArray[1] !="empty"){
            setWinMessage(`${itemArray[1]} wins`)
          }else if(itemArray[2]===itemArray[5] && itemArray[5]===itemArray[8] && itemArray[2] !="empty"){
            setWinMessage(`${itemArray[2]} wins`)
          }else if(itemArray[0]===itemArray[4] && itemArray[4]===itemArray[8] && itemArray[0] !="empty"){
            setWinMessage(`${itemArray[0]} wins`)
          }else if(itemArray[2]===itemArray[4] && itemArray[4]===itemArray[6] && itemArray[2] !="empty"){
            setWinMessage(`${itemArray[2]} wins`)
          }
  };

  const  changeItem=(itemNumber)=>{
    if(winMeassage){
      return toast(winMeassage, {type:"success"});
    }
    if(itemArray[itemNumber]==="empty"){
        itemArray[itemNumber]= isCross? "cross":"circle"
        setIsCross(!isCross);
    }else{
      return toast("already filled", {type:"error"});
    }
    checkIsWinner();
  };
  const reloadGame=()=>{
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  };

  return (
    <Container className='p-5'>
        <ToastContainer position='bottom-center'/>
        <Row>
          <Col md={6} className='offset-mid-3'>
            {winMeassage? (
              <div className='mb-2 mt-2'>
                <h1 className='text-success text-uppercase text-center'>
                  {winMeassage}
                </h1>
                <Button color='success' block onClick={reloadGame}>Reload the Game</Button>
              </div>
            ):(
                    <h1 className='text-center text-warning'>
                      {isCross?"Cross": "Circle"} turns
                    </h1>
            )};
            <div className='grid'>
              {itemArray.map((item, index)=>(
                <Card color='warning' onClick={()=>changeItem(index)}>
                  <CardBody className='box'>
                    <Icon name={item}/>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
    </Container>
  );
}

export default App;
