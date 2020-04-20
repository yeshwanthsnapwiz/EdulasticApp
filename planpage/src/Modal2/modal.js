import React from 'react';
import {Modalwrap ,Selectbutton,Column,Year,Content,Proceedbutton} from './modalcss';
;


class Congratulations extends React.Component {
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
        </Selectbutton>
        <Modalwrap
           style={{ top: 100, right:5 }}
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
          footer={null}
  
         
        >
          <Content>
           <Column>
            <h5>Congratulations!</h5>
            <p>Your account is upgraded to Premium version for a year and the subscription will expire on</p>
           </Column>
           <Year>
            <p>03/21/2021</p>
           </Year>
           <Proceedbutton>PROCEED</Proceedbutton>
          </Content>


          
        </Modalwrap>
      </div>
    );
  }
}

export default  Congratulations ;

