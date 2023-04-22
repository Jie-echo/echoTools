import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'antd';

const App = () => {
  const [data, setData] = React.useState('');

  const fetchData = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    setData(result.data.title);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <Button type="primary" onClick={fetchData}>
        Fetch Data
      </Button>
      <p>{data}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
