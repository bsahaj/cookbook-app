import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { ApplicationState } from "../store";
import * as PersonStore from "../store/Person";

type PersonProps = PersonStore.PersonState & typeof PersonStore.actionCreators;

const Person: React.FC<PersonProps> = (props) => {
  const { isLoading, persons, requestPerson } = props;

  const ensureDataFetched = () => {
    requestPerson();
  };

  useEffect(() => {
    if(!isLoading) ensureDataFetched()
}, []);

  return (
    <div>
      <Typography>Persons</Typography>
      <div>
        {isLoading && <div>is loading....</div>}
        {persons.map((d) => (
          <div>
            <p>{d.id}</p>
            <p>{d.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(
    (state: ApplicationState) => state.person,
    PersonStore.actionCreators
)(Person as any);
