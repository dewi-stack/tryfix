import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  render() {
    return (
      <Fragment>
        <div className="content-wrapper">
          <div className="container-full">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="d-flex align-items-center">
                <div className="me-auto">
                  <h3 className="page-title">Data Tables</h3>
                  <div className="d-inline-block align-items-center">
                    <nav>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="_blank">
                            <i className="mdi mdi-home-outline"></i>
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Tables
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Data Tables
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <section className="content">
              <div className="row">
                <div className="col-12">
                  <div className="box">
                    <div className="box-header with-border">
                      <h3 className="box-title">
                        Data Table With Full Features <br />
                        <Link to="/tambah-data-admin" className="btn btn-primary mr-2">
                          Tambah Data
                        </Link>
                      </h3>
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                      <div className="table-responsive">
                        <table
                          id="example1"
                          className="table table-bordered table-striped"
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Position</th>
                              <th>Office</th>
                              <th>Age</th>
                              <th>Start date</th>
                              <th>Salary</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Tiger Nixon</td>
                              <td>System Architect</td>
                              <td>Edinburgh</td>
                              <td>61</td>
                              <td>2011/04/25</td>
                              <td>$320,800</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Garrett Winters</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                              <td>63</td>
                              <td>2011/07/25</td>
                              <td>$170,750</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Ashton Cox</td>
                              <td>Junior Technical Author</td>
                              <td>San Francisco</td>
                              <td>66</td>
                              <td>2009/01/12</td>
                              <td>$86,000</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Cedric Kelly</td>
                              <td>Senior Javascript Developer</td>
                              <td>Edinburgh</td>
                              <td>22</td>
                              <td>2012/03/29</td>
                              <td>$433,060</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Airi Satou</td>
                              <td>Accountant</td>
                              <td>Tokyo</td>
                              <td>33</td>
                              <td>2008/11/28</td>
                              <td>$162,700</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Brielle Williamson</td>
                              <td>Integration Specialist</td>
                              <td>New York</td>
                              <td>61</td>
                              <td>2012/12/02</td>
                              <td>$372,000</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Herrod Chandler</td>
                              <td>Sales Assistant</td>
                              <td>San Francisco</td>
                              <td>59</td>
                              <td>2012/08/06</td>
                              <td>$137,500</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Rhona Davidson</td>
                              <td>Integration Specialist</td>
                              <td>Tokyo</td>
                              <td>55</td>
                              <td>2010/10/14</td>
                              <td>$327,900</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Colleen Hurst</td>
                              <td>Javascript Developer</td>
                              <td>San Francisco</td>
                              <td>39</td>
                              <td>2009/09/15</td>
                              <td>$205,500</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>Sonya Frost</td>
                              <td>Software Engineer</td>
                              <td>Edinburgh</td>
                              <td>23</td>
                              <td>2008/12/13</td>
                              <td>$103,600</td>
                              <td>
                                <button className="btn btn-warning">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <></>
                                <button className="btn btn-danger">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Name</th>
                              <th>Position</th>
                              <th>Office</th>
                              <th>Age</th>
                              <th>Start date</th>
                              <th>Salary</th>
                              <th>Action</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    {/* /.box-body */}
                  </div>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </section>
            {/* /.content */}
          </div>
        </div>
      </Fragment>
    );
  }
}
