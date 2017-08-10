// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

// Local Helper Files
import { animations } from '../../stylesheets/Animations.js';
import { brotherInfo } from './brotherhood_constants';
import { BROTHERS_PATH } from '../reusable_components/Navbar/navbar_constants.jsx';

export class BrotherImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    let { brother } = this.props;
    var bro = brotherInfo[brother];

    if (!bro) {
      return null;
    }

    return (
      <Link
        to={BROTHERS_PATH + '/' + brother}
        className={css(styles.broLink)}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => {
          this.setState({ hover: false });
        }}
      >
        <div className={css(styles.broContainer)}>
          <img src={bro.img} className={css(styles.broImg)} alt={bro.name} />
          {this.state.hover &&
            <div className={css(styles.overlay)}>
              <p className={css(styles.broName, animations.slideInLeft)}>
                {bro.name}
              </p>
              <hr className={css(styles.hr)} />
              <p className={css(styles.broPosition, animations.slideInRight)}>
                {bro.position}
              </p>
            </div>}
        </div>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  broLink: {
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none'
  },

  broContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },

  broImg: {
    width: '100%',
    height: '100%'
  },

  overlay: {
    position: 'absolute',
    bottom: '0',
    zIndex: '2',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },

  broName: {
    color: '#FFF',
    fontFamily: 'Lato, sans-serif',
    fontSize: '1.25em',
    letterSpacing: '0.025em'
  },

  hr: {
    color: '#FFF',
    border: '1px solid #895FAD',
    width: '60%'
  },

  broPosition: {
    color: '#FFF',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '0.9em',
    fontWeight: '500',
    letterSpacing: '0.025em',
    padding: '0 10px',
    textTransform: 'uppercase'
  }
});