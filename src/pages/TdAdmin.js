import React, { Component } from "react";

export default class TdAdmin extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container-full">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="d-flex align-items-center">
              <div className="me-auto">
                <h3 className="page-title">Form Input Admin</h3>
                <div className="d-inline-block align-items-center">
                  <nav>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="mdi mdi-home-outline"></i>
                        </a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Forms
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Form Input Admin
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
                  <div className="box-header">
                    <h4 className="box-title">Type options</h4>
                  </div>
                  <div className="box-body">
                    <div className="form-group row">
                      <label className="col-form-label col-md-2">
                        Datetime
                      </label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="datetime-local"
                          name="datetime"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="datetime-local"</code>{" "}
                          <code>
                            {" "}
                            type="datetime-local" is not supported in Firefox,
                            Safari or Internet Explorer 12 (or earlier).
                          </code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Date</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="date"
                          name="date"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="date"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Month</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="month"
                          name="month"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="month"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Time</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="time"
                          name="time"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="time"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Week</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="week"
                          name="week"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="week"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Number</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="number"
                          name="number"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="number"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Email</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="email"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">URL</label>
                      <div className="col-md-10">
                        <input className="form-control" type="url" name="url" />
                        <span className="form-text text-muted">
                          Using <code>input type="url"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Search</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="search"
                          name="search"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="search"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Tel</label>
                      <div className="col-md-10">
                        <input className="form-control" type="tel" name="tel" />
                        <span className="form-text text-muted">
                          Using <code>input type="tel"</code>
                        </span>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-2">Color</label>
                      <div className="col-md-10">
                        <input
                          className="form-control"
                          type="color"
                          name="color"
                        />
                        <span className="form-text text-muted">
                          Using <code>input type="color"</code>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* /.box-body */}
                </div>
                {/* /.box */}
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
