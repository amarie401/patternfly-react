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
  title: PropTypes.string,
  action: PropTypes.bool,
  /** Adds alert variant styles */
  variant: PropTypes.oneOf(Object.keys(AlertVariant))
};

const defaultProps = {
  children: '',
  className: '',
  label: '',
  title: '',
  action: false,
  variant: AlertVariant.success
};

const Alert = ({
  children,
  className,
  label,
  title,
  action,
  variant,
  ...props
}) => (
  <div
    {...props}
    aria-label={label}
    className={css(
      styles.alert,
      getModifier(styles.modifiers, variant),
      className
    )}
  >
    <div className={css(styles.alertBody)}>
      <h4 className={css(styles.alertTitle)}>
        <span className="sr-only">{variant}</span>
        {title}
      </h4>
      <p>{children}</p>
      {Boolean(action) && (
        <div className={css(styles.alertAction)}>{action}</div>
      )}
    </div>
  </div>
);

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
