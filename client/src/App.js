import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Workouts from './pages/Workouts';
import Main from './pages/Main';
import ExercisesList from './pages/ExercisesList';
import ExerciseDetails from './pages/ExerciseDetails';
import AboutUs from './pages/AboutUs';
import Startpage from './pages/Startpage';
import Signup from './pages/Signup';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExerciseDetailsCard from './components/ExerciseDetailsCard/ExerciseDetailsCard'
import Logo from '../src/components/Logo/logo-main'
import { WorkoutDetails } from './pages/WorkoutDetails';
import ArmsExercises from './components/ArmsExercises'
import LegsExercises from './components/LegsExercises'
import ChestExercises from './components/ChestExercises'
import CalvesExercises from './components/CalvesExercises'
import BackExercises from './components/BackExercises'
import ShouldersExercises from './components/ShouldersExercises'
import AbsExercises from './components/AbsExercises'

function App(props) {

  const [user, setUser] = useState(props.user);
  // console.log('App js:', user);

  const addUser = user => {
    setUser(user);
  }

  return (
    <div className="App">

    <Switch>
      <Route exact path="/" component={Startpage} /> 
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />

      

      <div style={{zIndex: '3' }}>
      <NavBar />   <Logo />
      <Route exact path="/home" component={Main} render={props => <Main setUser={addUser} {...props} user={user} />}  />
      <Route exact path="/workouts" component={Workouts} />
      <Route exact path="/workouts/:id" component={WorkoutDetails} />
      <Route exact path="/exercises" component={ExercisesList}  />
      <Route exact path="/armsexercises" component={ArmsExercises}  />
      <Route exact path="/legsexercises" component={LegsExercises}  />
      <Route exact path="/chestexercises" component={ChestExercises}  />
      <Route exact path="/calvesexercises" component={CalvesExercises}  />
      <Route exact path="/backexercises" component={BackExercises}  />
      <Route exact path="/shouldersexercises" component={ShouldersExercises}  />
      <Route exact path="/absexercises" component={AbsExercises}  />
      {/* Make exercise detail url dynamic by exercise name  */}
      <Route exact path="/exercises/:id" component={ExerciseDetails} />
      <Route exact path="/aboutus" component={AboutUs} />
      </div>
    </Switch>
    </div>
  );
}

export default App;
