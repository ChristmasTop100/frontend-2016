import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Background from './components/Background';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <AppBar
          title="Christmas Top 100"
          showMenuIconButton={false}
          style={{backgroundColor: 'rgba(213, 0, 0, 0.9)'}}
        />
        <div style={{maxWidth: '1100px', margin: '40px auto', padding: '0 15px'}}>
          <Table style={{backgroundColor: 'rgba(255,255,255,0.9)'}}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
