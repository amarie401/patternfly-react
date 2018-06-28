import React from 'react';
import ComponentDocs from '../../components/componentDocs';
import PropTypes from 'prop-types';
import { Alert, AlertVariant, Button } from '@patternfly/react-core';
import Example from '../../components/example';

const propTypes = {
  data: PropTypes.any.isRequired
};

// TODO:
// show certain icon depending on what variant it is (success, info, warning, danger)
// break down body/title?

const AlertDocs = ({ data }) => (
  <ComponentDocs data={data}>
    <Example title="Variants">
      {Object.values(AlertVariant).map(variant => (
        <Alert
          key={variant}
          variant={variant}
          label={`${variant} notification`}
        >
          <div className="pf-c-alert__body">
            <h4 className="pf-c-alert__title">
              <span className="sr-only">{variant} </span> {variant} notification
              title
            </h4>
            <p>This is a description of the notification content.</p>
          </div>
        </Alert>
      ))}
    </Example>
    <Example title="Variants with button">
      {Object.values(AlertVariant).map(variant => (
        <Alert
          key={variant}
          variant={variant}
          label={`${variant} notification`}
        >
          <div className="pf-c-alert__body">
            <h4 className="pf-c-alert__title">
              <span className="sr-only">{variant} </span> {variant} notification
              title
            </h4>
          </div>
          <div className="pf-c-alert__action">
            <Button className="pf-c-button pf-m-secondary">Button</Button>
          </div>
        </Alert>
      ))}
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
