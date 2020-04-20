import React from 'react';
import {Row,Col} from 'antd';
import {Modalwrap,Column,Card,Cardwrap,DIV,Edulogo,Cardlogo,Ul,INFO,Form,Inputnumber,Formgroup,Paybutton,DAtepicker,Selectbutton } from './modalcss';
import logo from './Images/Spark_Edulastic.svg';
import card from './Images/mastercard.png';
import Congratulations from '../Modal2/modal';


class Edupay extends React.Component {
  state = {

    modal2Visible: false,
  };


  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <div>
    
        <Selectbutton className="button"   onClick={() => this.setModal2Visible(true)}>
        SELECT PLAN
        </Selectbutton >
        <Modalwrap
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          footer={null}
        >
          <Row>
           <Column>
            <h5>Edulastic Payment Service</h5>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amen.</p>
           </Column>

           <Card>
            <Cardwrap>
            <DIV>
              <Edulogo src={logo}/>
              <Cardlogo src={card}/>
            </DIV>

            <Ul>
              <li>****</li>
              <li>****</li>
              <li>****</li>
              <li>1991</li>
            </Ul>


             <INFO>
              <div><h5>CARD HOLDER</h5>
              <h4>Rob Peterson</h4></div>
              <div><h5>EXPIRES</h5>
              <h4>06/26</h4></div>
              <div><h5>CVV</h5>
              <h4>091</h4></div>
            </INFO>
            </Cardwrap>
           </Card>

            <Form>
            <label >CARD NUMBER</label>
            <Inputnumber type="number" placeholder="Insert your card number"></Inputnumber>

            <Formgroup justify="space-between">

            <Col span={11} >
            <label >CARD HOLDER</label>
            <Inputnumber type="text"  placeholder="Insert Name On Card"></Inputnumber>
            </Col>

            <Col span={6}>
             <label >EXPIRES</label>
             < DAtepicker
             placeholder="MM/DD"
             format={"MM/DD"}
             suffixIcon
             className="card"
           />
             </Col>

            <Col span={6} >
            <label >CVV</label>
            <Inputnumber type="number" placeholder="Insert CVV"></Inputnumber>
            </Col>

            </Formgroup>
            <Paybutton>
            <Congratulations >PAY $99/YEAR</Congratulations >
            </Paybutton>
            </Form>
          </Row>
          
        </Modalwrap>
      </div>
    );
  }
}

export default  Edupay;

