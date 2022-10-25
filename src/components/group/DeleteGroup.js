import React from "react";
import GroupApi from "../../api/GroupApi";

class DeleteGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  getListGroup = async () => {
    try {
      // call api
      const data = await GroupApi.getAll();
      // using data
      this.setState({
        groups: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getListGroup();
  }

  deleteGroupById = async (id) => {
    try {
      // call api
      await GroupApi.deleteByID(id);
      // reload list
      this.getListGroup();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const personList = this.state.groups.map((group) => (
      <li key={group.id} onClick={() => this.deleteGroupById(group.id)}>
        {group.name}
      </li>
    ));

    return <ul>{personList}</ul>;
  }
}

export default DeleteGroup;
