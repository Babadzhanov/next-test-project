import Layout from "../components/Layout.js";
import QuetionList from "../components/QuestionList";

export default props => (
  <Layout>
    <div id="app">
      <QuetionList />
      <div>Hello</div>
      {console.log(props)}
      <h1>Sample page</h1>
    </div>
  </Layout>
);

// const App = props => <div id="app"><Notification {...props.notification}/></div>
