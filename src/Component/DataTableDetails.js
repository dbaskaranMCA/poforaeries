import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import 'datatables.net-dt/css/jquery.dataTables.css'
import 'datatables.net-buttons-dt/css/buttons.dataTables.css'


const $ = require('jquery');
$.Datatable = require('datatables.net');
require('datatables.net-buttons/js/dataTables.buttons.min');
const jzip = require('jzip');
require('datatables.net-buttons/js/buttons.html5.min');
require('datatables.net-buttons/js/buttons.flash.min.js');
window.JSZip = jzip;
export class DataTableDetails extends Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.DataTable({
      dom: 'Bfrtip',
      paging: true,
      data: this.props.data,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start date" },
        { title: "Salary" }
      ],
      responsive: true,
      buttons: [

        'excelHtml5',
        'csvHtml5',
        'pdfHtml5'
      ]

    });
  }

  componentWillUnmount() {

  }
  render() {
    return <div className="table-responsive">
      <table id="example" variant="success" className="display" width="100%" ref={el => this.el = el}></table>
    </div>


  }
}

