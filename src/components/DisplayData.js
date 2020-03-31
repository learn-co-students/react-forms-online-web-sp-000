import React from 'react';

class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.formData.firstName}</h1>
        <h1>{this.props.formData.lastName}</h1>
      </div>
    )
  }
}

export default DisplayData
```

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './components/ParentComponent';

ReactDOM.render(
  <div>
    <ParentComponent/>
  </div>,
  document.getElementById('root')
);
