import React from 'react';
import PropTypes from 'prop-types';

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.mounted
    }
  }

  showState() {
    return "(" + this.state.show + ")";
  }
  setShow() {
    // console.log(this.props.page); // eslint-disable-line no-console
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: true})
    ));
  }
  unsetShow() {
    this.setState((prevState) => (
      Object.assign({}, prevState, {show: false})
    ));
  }

  componentDidMount() {
    if(this.props.mounted) { // show the element
      this.setShow();
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.mounted!=this.props.mounted) {
      if(newProps.mounted) { // show the element
        if(!this.state.show) {
          this.setShow();
        }
      } else {
        this.unsetShow();
      }
    }
  }

  render() {
    let className = (this.state.show)?"page-1":"page-0";
    return (
      <div className={"page-wrapper " + className}>
        {this.state.show && this.props.children}
      </div>
    );
  }

}

Animation.propTypes = {
  mounted: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
}

export default Animation;
