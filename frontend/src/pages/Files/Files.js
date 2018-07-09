import React, { Component } from 'react';
import TabbedFileBrowser from "Components/TabbedFileBrowser/TabbedFileBrowser";
import CardLayout from '../../physical_layout/CardLayout/CardLayout';

export default class Files extends Component {
  render() {
    return (
        <CardLayout>
          <TabbedFileBrowser />
        </CardLayout>
    );
  }
}