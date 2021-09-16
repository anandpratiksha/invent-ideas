import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupInnovator from './components/signup/SignupInnovator.js';
import SignupInvestor from './components/signup/SignupInvestor';
import SigninInnovator from './components/signin/SigninInnovator';
import SigninInvestor from './components/signin/SigninInvester';
import Home from './components/Home/Home';
import InnovatorForm from './components/innovatorFormScreen/innovatorFormScreen';
import { SnackbarProvider } from 'notistack';
import InvestorProfile from './components/investorProfile/InvestorProfile.js';
import InnovatorProfile from './components/innovatorProfile/InnovatorProfile';
import InvestorPage from './components/investorsPage/InvestorPage';
import Ideapage from './components/idea/Ideapage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <Switch>
        <SnackbarProvider maxSnack={3}>
          <Route path='/' exact component={Home} />
          <Route path='/signup-innovator' component={SignupInnovator} />
          <Route path='/signup-investor' component={SignupInvestor} />
          <Route path='/signin-innovator' component={SigninInnovator} />
          <Route path='/signin-investor' component={SigninInvestor} />
          <Route path='/innovator-form' component={InnovatorForm} />
          <Route path='/investor-profile' component={InvestorProfile} />
          <Route path='/innovator-profile' component={InnovatorProfile} />
          <Route path='/investor-page' component={InvestorPage} />
          <Route path='/idea-page/:id' component={Ideapage} />
          <Route path='/contact-page/:id' exact component={ContactPage} />
        </SnackbarProvider>
      </Switch>
    </Router>
  );
}

export default App;
