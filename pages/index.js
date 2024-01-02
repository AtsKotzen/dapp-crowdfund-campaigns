import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Campaign from "../ethereum/campaign";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    // Adicione uma chamada para obter o nome da campanha e o nome do gerente aqui
    const campaignDetails = await Promise.all(
      campaigns.map(async (address) => {
        const campaign = Campaign(address);
        const summary = await campaign.methods.getSummary().call();
        return {
          address,
          campaignName: summary[5], // Retorne o nome da campanha
          managerName: summary[6], // Retorne o nome do gerente
        };
      })
    );

    return { campaignDetails };
  }

  renderCampaigns() {
    const items = this.props.campaignDetails.map((detail) => {
      return {
        header: detail.campaignName,
        meta: `Gerenciado por ${detail.managerName}`,
        description: (
          <Link route={`/campaigns/${detail.address}`}>
            <a>Ver Projeto</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Projetos</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Criar meu Projeto"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;