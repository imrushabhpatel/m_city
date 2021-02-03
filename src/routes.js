import React from 'react';
import Layout from './hoc/Layout';
import { Switch } from 'react-router-dom';

import Home from './components/Home';
import SignIn from './components/SignIn';
import TheTeam from './components/theTeam';
import TheMatches from './components/theMatches';
import Dashboard from './components/Admin/Dashboard'
import NotFound from './ui/not_found';

import PrivateRoutes from './components/authRoutes/privateRoutes'
import PublicRoutes from './components/authRoutes/publicRoutes'
import AdminMatches from './components/Admin/Matches/';
import AddEditMatch from './components/Admin/Matches/AddEditMatch';
import AdminPlayers from './components/Admin/Players';
import AddEditPlayers from './components/Admin/Players/AddEditPlayers';

const Routes = (props) =>{
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/admin_players/add_players/" exact component={AddEditPlayers}/>
        <PrivateRoutes {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
        <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers}/>
        <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches}/>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoutes {...props} restricted={true} path ="/sign_in" exact component={SignIn}/>
        <PublicRoutes {...props} restricted={false} path ="/" exact component={Home}/>
        <PublicRoutes {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
        <PublicRoutes {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
        <PublicRoutes {...props} restricted={false} component={NotFound}/>

      </Switch>
    </Layout>
  )
}

export default Routes;