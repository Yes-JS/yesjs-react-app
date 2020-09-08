import * as React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import './header-styles.scss';
import { useHeaderStyles } from './Header.styles';

interface IHeaderProps {}

const HeaderTemp: React.FunctionComponent<IHeaderProps> = () => {
  const headerClasses = useHeaderStyles();

  return (
    <>
      <nav
        className={classNames(
          'flex-row flex-center header',
          headerClasses.header,
        )}
      >
        <span className={headerClasses.logo}>YesJS</span>
      </nav>
    </>
  );
};

export const Header = withRouter(HeaderTemp);
