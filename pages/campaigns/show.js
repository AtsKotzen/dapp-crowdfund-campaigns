import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();    
    
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      campaignName: summary[5],
      managerName: summary[6]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
      managerName          
      } = this.props;

    const items = [      
      {
        header: managerName,
        meta: "Responsável",
        description: "Endereço: " + manager,
        style: { overflowWrap: "break-word" },
      },
      {
        header: web3.utils.fromWei(minimumContribution, "ether"),
        meta: "Valor mínimo (ETH)",
        description:
          "Valor mínimo de contribuição para se tornar um aprovador.",
      },
      {
        header: parseInt(requestsCount),
        meta: "Demandas",
        description:
          "As Demandas são registros de produtos ou serviços necessários. A liberação dos recursos está sujeita à aprovação dos contribuidores.",
      },
      {
        header: parseInt(approversCount),
        meta: "Doadores / Aprovadores",
        description:
          "Pessoas que já doaram para esse projeto e podem aprovar as Demandas",
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Saldo (ETH)",
        description:
          "O Saldo é a quantidade de fundos disponíveis para pagar as demandas.",
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>{this.props.campaignName}</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>Ver Demandas</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
