import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/styles.css';

export const AlertVariant = {
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info'
};

const propTypes = {
  /** content rendered inside the alert */
  children: PropTypes.node,
  /** additional classes added to the alert */
  className: PropTypes.string,
  /* Aria label used to indicate alert variant */
  label: PropTypes.string,
  /** Adds alert variant styles */
  variant: PropTypes.oneOf(Object.keys(AlertVariant))
};

const defaultProps = {
  children: '',
  className: '',
  label: '',
  variant: AlertVariant.success
};

const Alert = ({ children, className, label, variant, ...props }) => (
  <alert
    {...props}
    aria-label={variant === AlertVariant.success ? label : null}
    className={css(
      styles.alert,
      getModifier(styles.modifiers, variant),
      className
    )}
  >
    {children}
  </alert>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
