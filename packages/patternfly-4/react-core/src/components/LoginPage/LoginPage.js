import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';

import Login from './Login';
import LoginHeader from './LoginHeader';
import LoginHeaderBrand from './LoginHeaderBrand';
import LoginFooter from './LoginFooter';

import LoginBox from './LoginBox';
import LoginBoxHeader from './LoginBoxHeader';
import LoginBoxBody from './LoginBoxBody';
import LoginBoxFooter from './LoginBoxFooter';

import { BackgroundImage } from '../BackgroundImage';
import { Brand } from '../Brand';
import { Text, TextContent } from '../Text';
import { List } from '../List';

const ListVariant = {
  grid: 'grid',
  inline: 'inline'
};

const propTypes = {
  /** Anything that can be rendered inside of the LoginPage */
  children: PropTypes.node,
  /** Additional classes added to the LoginPage. */
  className: PropTypes.string,
  /** Attribute that specifies the URL of the brand image for the LoginPage */
  brandImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the brand image for the LoginPage. */
  brandImgAlt: PropTypes.string,
  /** Attribute that specifies the URL of the background image for the LoginPage */
  backgroundImgSrc: PropTypes.string,
  /** Attribute that specifies the alt text of the background image for the LoginPage. */
  backgroundImgAlt: PropTypes.string,
  /** Dropdown component for the LoginBox Header of the LoginPage */
  dropdown: PropTypes.node,
  /** Content rendered inside of the Text Component of the LoginPage */
  textContent: PropTypes.string,
  /** Title for the LoginBox Header of the LoginPage */
  title: PropTypes.string,
  /** Items rendered inside of the List Component of the LoginPage */
  listItems: PropTypes.node,
  /** Text for the LoginBox Header of the LoginPage */
  headerText: PropTypes.string,
  /** URL for the LoginBox Header of the LoginPage */
  headerUrl: PropTypes.string,
  /** Text for the URL of LoginBox Header of the LoginPage */
  headerUrlText: PropTypes.string,
  /** Content rendered inside of the */
  footerContent: PropTypes.node,
  /** Adds list variant styles */
  variant: PropTypes.oneOf(Object.values(ListVariant))
};

const defaultProps = {
  children: null,
  className: '',
  brandImgSrc: '',
  brandImgAlt: '',
  backgroundImgSrc: '',
  backgroundImgAlt: '',
  dropdown: null,
  title: '',
  headerText: '',
  headerUrl: '',
  headerUrlText: '',
  textContent: '',
  listItems: null,
  footerContent: null,
  variant: null
};

const LoginPage = ({
  className,
  children,
  brandImgSrc,
  brandImgAlt,
  backgroundImgSrc,
  backgroundImgAlt,
  dropdown,
  title,
  headerText,
  headerUrl,
  headerUrlText,
  textContent,
  listItems,
  footerContent,
  variant,
  ...props
}) => {
  const HeaderBrand = (
    <React.Fragment>
      <LoginHeaderBrand>
        <Brand src={brandImgSrc} alt={brandImgAlt} />
      </LoginHeaderBrand>
      <TextContent>
        <Text>{textContent}</Text>
      </TextContent>
    </React.Fragment>
  );
  const Header = <LoginHeader headerBrand={HeaderBrand} />;
  const Footer = (
    <LoginFooter>
      <List variant={variant}>{listItems}</List>
    </LoginFooter>
  );

  return (
    <React.Fragment>
      <BackgroundImage src={backgroundImgSrc} alt={backgroundImgAlt} />
      <Login header={Header} footer={Footer} {...props} className={css(className)}>
        <LoginBox>
          <LoginBoxHeader
            title={title}
            dropDown={dropdown}
            headerText={headerText}
            headerUrl={headerUrl}
            headerUrlText={headerUrlText}
          />
          <LoginBoxBody>{children}</LoginBoxBody>
          {footerContent && <LoginBoxFooter>{footerContent}</LoginBoxFooter>}
        </LoginBox>
      </Login>
    </React.Fragment>
  );
};

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;

export default LoginPage;
