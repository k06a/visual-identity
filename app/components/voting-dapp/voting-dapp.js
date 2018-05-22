import web3 from "Embark/web3"
import EmbarkJS from 'Embark/EmbarkJS';
import React from 'react';

import ProposalForm from './proposal-form';
import ProposalContainer from './proposal-container';
import StatusBar from './status-bar';

class VotingDapp extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          
      };
    }

    render(){
        return <div>
            <StatusBar />
            <ProposalContainer />
            <ProposalForm />
        </div>;
    }

}

export default VotingDapp;