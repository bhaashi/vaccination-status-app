import React from 'react';

import { Link } from 'react-router-dom';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from '@material-ui/core';
import {useSelector} from "react-redux";


const ViewCityTable = () =>{
    const cities = useSelector((state) => state.cityLists);

    return(
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell numeric>Population</TableCell>
            <TableCell numeric>Vaccinated</TableCell>
            <TableCell numeric>Doses Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cities.map(({ _id, name, population, vaccinated, dosesAvailable }) => (
            <TableRow key={_id}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell numeric>{population}</TableCell>
              <TableCell numeric>{vaccinated}</TableCell>
              <TableCell numeric>{dosesAvailable}</TableCell>
              <TableCell>
              <Link to={`/city/${_id}/edit`}>
                <Button variant='light' className='btn-sm'>
                    <i className='fas fa-edit'></i>
                </Button>
              </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </Paper>
    )
}

export default ViewCityTable;