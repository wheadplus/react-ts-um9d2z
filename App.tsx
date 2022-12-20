import * as React from 'react';
import './style.css';

interface Props {
  message: string;
}
interface State {
  n: number;
}

class App extends React.Component<Props, State> {
  static defaultProps = {
    message: 'default msg',
  };
  constructor(props) {
    super(props);
    this.state = {
      n: 1,
    };
  }
  x = () => {
    this.setState({
      n: 2,
    });
  };
  componentDidMount() {}
  render() {
    return <div>App</div>;
  }
}

export default App;
