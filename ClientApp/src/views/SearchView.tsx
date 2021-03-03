import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import RecipeCard from "../components/RecipeCard";

const useStyles = makeStyles({
  root: {},
});

const SearchView: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4">Search for recipes...</Typography>
      <RecipeCard />
    </div>
  );
};

export default SearchView;
