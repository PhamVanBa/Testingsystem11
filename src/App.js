import React, { useEffect } from "react";
import GroupList from "./components/group/GroupList";
import { getListGroupAsyncAction } from "./redux/reducers/groupSlide";
import {
  selectListGroups,
  selectLoading,
} from "./redux/selectors/groupSelector";
import WithLoading from "./hoc/withLoading";
import { connect } from "react-redux";
import Home from "./components/Home";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import CreateGroup from "./components/group/CreateGroup";
import DeleteGroup from "./components/group/DeleteGroup";

function App(props) {
  const getListGroup = props.getListGroupAsyncAction;

  useEffect(() => {
    getListGroup();
  }, [getListGroup]);

  const GroupListWithLoading = WithLoading(GroupList);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/groups">Group List</Link>
          </li>
          <li>
            <Link to="/creategroup">Create Group</Link>
          </li>
          <li>
            <Link to="/deletegroup">Delete Group</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/groups"
          component={() => (
            <GroupListWithLoading
              groups={props.groups}
              isLoading={props.isLoading}
            />
          )}
          exact
        />
        <Route path="/creategroup" component={CreateGroup} exact />
        <Route path="/deletegroup" component={DeleteGroup} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

const mapGlobalStateToProps = (state) => {
  return {
    groups: selectListGroups(state),
    isLoading: selectLoading(state),
  };
};

export default connect(mapGlobalStateToProps, { getListGroupAsyncAction })(App);
