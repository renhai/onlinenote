import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'bulma/css/bulma.css';
import {Header, Footer } from '../components/index';
import messages from '../messages/index';

const stateToProps = state => ({
  locale: state.locale.locale,
});

@connect(stateToProps)
export default class App extends React.Component {
  props: {
    children: any,
    locale: string
  };

  render() {
    const { children, locale } = this.props;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div>
          <div>
            <Header />
            <section className="section">
              <div className="container">
                {children}
              </div>
            </section>
            <Footer />
          </div>
          <ToastContainer
            autoClose={3000}
            hideProgressBar
            closeButton={false}
            style={{width: 'auto', maxWidth: '320px'}}
            position={toast.POSITION.BOTTOM_RIGHT}
          />
        </div>
      </IntlProvider>
    );
  }
}
