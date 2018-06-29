import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Alert, Button } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

// TODO:
// show certain icon depending on what variant it is (success, info, warning, danger)

const AlertDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Alert">
      <Alert variant="success" title="Success Notification">
        This is a description of the notification content.
      </Alert>
    </Example>

    <Example title="Alert with button">
      <Alert
        variant="success"
        title="Success Notification"
        action={<Button variant="secondary">Button</Button>}
      />
    </Example>
  </ComponentDocs>
);

AlertDocs.propTypes = propTypes;

export const query = graphql`
  query AlertDocsQuery {
    componentMetadata(displayName: { eq: "Alert" }) {
      ...ComponentDocs
    }
  }
`;

export default AlertDocs;
