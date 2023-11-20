import { Steps } from 'antd';
import 'antd/dist/antd.css'
import './App.css';

function App() {
  const description = 'This is a description.';
  return (
    <div className="App">
      <Steps
          current={1}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
              subTitle: 'Left 00:00:08',
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
      />
    </div>
  );
}

export default App;
