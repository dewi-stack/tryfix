import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="container-full">
          {/* Main content */}
          <section className="content">
            <div className="row">
              <div className="col-xl-8 col-12">
                <div className="box bg-primary-light">
                  <div className="box-body d-flex px-0">
                    <div
                      className="flex-grow-1 p-30 flex-grow-1 bg-img dask-bg bg-none-md"
                      style={{
                        backgroundPosition: "right bottom",
                        backgroundSize: "auto 100%",
                        backgroundImage:
                          "url('../images/svg-icon/color-svg/custom-1.svg')",
                      }}
                    >
                      <div className="row">
                        <div className="col-12 col-xl-7">
                          <h2>
                            Welcome back, <strong>John!</strong>
                          </h2>

                          <p className="text-dark my-10 fs-16">
                            Your students complated{" "}
                            <strong className="text-warning">80%</strong> of the
                            tasks.
                          </p>
                          <p className="text-dark my-10 fs-16">
                            Progress is{" "}
                            <strong className="text-warning">very good!</strong>
                          </p>
                        </div>
                        <div className="col-12 col-xl-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <div className="box">
                      <div className="box-header with-border">
                        <h4 className="box-title">Students Progress </h4>
                        <ul className="box-controls pull-right d-md-flex d-none">
                          <li className="dropdown">
                            <button
                              className="btn btn-primary px-10 "
                              data-bs-toggle="dropdown"
                              href="#"
                            >
                              View List
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="box-body">
                        <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
                          <div className="d-flex align-items-center fw-500">
                            <div className="me-15 w-50 d-table">
                              <img
                                src="../images/avatar/avatar-1.png"
                                className="avatar avatar-lg rounded10 bg-primary-light"
                                alt=""
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark hover-primary mb-5 d-block fs-16"
                              >
                                Amelia
                              </a>
                              <div className="w-200">
                                <div className="progress progress-sm mb-0">
                                  <div
                                    className="progress-bar progress-bar-primary progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: "75%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h5 className="fw-600 mb-0 badge badge-pill badge-primary">
                              75%
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
                          <div className="d-flex align-items-center fw-500">
                            <div className="me-15 w-50 d-table">
                              <img
                                src="../images/avatar/avatar-2.png"
                                className="avatar avatar-lg rounded10 bg-primary-light"
                                alt=""
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark hover-primary mb-5 d-block fs-16"
                              >
                                Johen
                              </a>
                              <div className="w-200">
                                <div className="progress progress-sm mb-0">
                                  <div
                                    className="progress-bar progress-bar-warning progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuenow="64"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: "64%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h5 className="fw-600 mb-0 badge badge-pill badge-warning">
                              64%
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
                          <div className="d-flex align-items-center fw-500">
                            <div className="me-15 w-50 d-table">
                              <img
                                src="../images/avatar/avatar-1.png"
                                className="avatar avatar-lg rounded10 bg-primary-light"
                                alt=""
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark hover-primary mb-5 d-block fs-16"
                              >
                                Micheal
                              </a>
                              <div className="w-200">
                                <div className="progress progress-sm mb-0">
                                  <div
                                    className="progress-bar progress-bar-info progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuenow="59"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: "59%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h5 className="fw-600 mb-0 badge badge-pill badge-info">
                              59%
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-30 gap-items-3 justify-content-between">
                          <div className="d-flex align-items-center fw-500">
                            <div className="me-15 w-50 d-table">
                              <img
                                src="../images/avatar/avatar-1.png"
                                className="avatar avatar-lg rounded10 bg-primary-light"
                                alt=""
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark hover-primary mb-5 d-block fs-16"
                              >
                                Amanda
                              </a>
                              <div className="w-200">
                                <div className="progress progress-sm mb-0">
                                  <div
                                    className="progress-bar progress-bar-danger progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuenow="45"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: "45%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h5 className="fw-600 mb-0 badge badge-pill badge-danger">
                              45%
                            </h5>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-items-3 justify-content-between">
                          <div className="d-flex align-items-center fw-500">
                            <div className="me-15 w-50 d-table">
                              <img
                                src="../images/avatar/avatar-1.png"
                                className="avatar avatar-lg rounded10 bg-primary-light"
                                alt=""
                              />
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark hover-primary mb-5 d-block fs-16"
                              >
                                Tyler
                              </a>
                              <div className="w-200">
                                <div className="progress progress-sm mb-0">
                                  <div
                                    className="progress-bar progress-bar-primary progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: "20%" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h5 className="fw-600 mb-0 badge badge-pill badge-primary">
                              20%
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="box">
                      <div className="box-header with-border">
                        <h4 className="box-title">Working Hours</h4>
                        <ul className="box-controls pull-right d-md-flex d-none">
                          <li className="dropdown">
                            <button
                              className="dropdown-toggle btn btn-warning-light px-10"
                              data-bs-toggle="dropdown"
                              href="#"
                            >
                              Today
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item active" href="#">
                                Today
                              </a>
                              <a className="dropdown-item" href="#">
                                Yesterday
                              </a>
                              <a className="dropdown-item" href="#">
                                Last week
                              </a>
                              <a className="dropdown-item" href="#">
                                Last month
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="box-body">
                        <div id="revenue5" className="min-h-325"></div>
                        <div className="d-flex justify-content-center">
                          <p className="d-flex align-items-center fw-600 mx-20">
                            <span className="badge badge-xl badge-dot badge-warning me-20"></span>{" "}
                            Progress
                          </p>
                          <p className="d-flex align-items-center fw-600 mx-20">
                            <span className="badge badge-xl badge-dot badge-primary me-20"></span>{" "}
                            Done
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6">
                    <div className="box">
                      <div className="box-body d-flex p-0">
                        <div
                          className="flex-grow-1 bg-danger p-30 flex-grow-1 bg-img"
                          style={{
                            backgroundPosition: "calc(100% + 0.5rem) bottom",
                            backgroundSize: "auto 100%",
                            backgroundImage:
                              "url('../images/svg-icon/color-svg/custom-3.svg')",
                          }}
                        >
                          <h4 className="fw-400">User Activity</h4>

                          <p className="my-10 fs-16">
                            Grow marketing &amp; sales
                            <br />
                            through product.
                          </p>

                          <a href="#" className="btn btn-danger-light">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="box">
                      <div className="box-body d-flex p-0">
                        <div
                          className="flex-grow-1 bg-primary p-30 flex-grow-1 bg-img"
                          style={{
                            backgroundPosition: "calc(100% + 0.5rem) bottom",
                            backgroundSize: "auto 100%",
                            backgroundImage:
                              "url('../images/svg-icon/color-svg/custom-4.svg')",
                          }}
                        >
                          <h4 className="fw-400">Based On</h4>

                          <div className="mt-5">
                            <div className="d-flex mb-10 fs-16">
                              <span className="icon-Arrow-right mt-5 me-10">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                              <span className="text-white">Activities</span>
                            </div>

                            <div className="d-flex mb-10 fs-16">
                              <span className="icon-Arrow-right mt-5 me-10">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                              <span className="text-white">Sales</span>
                            </div>

                            <div className="d-flex mb-10 fs-16">
                              <span className="icon-Arrow-right mt-5 me-10">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                              <span className="text-white">Releases</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box bg-transparent no-shadow mb-0">
                  <div className="box-header no-border">
                    <h4 className="box-title">Media Files</h4>
                    <div className="box-controls pull-right d-md-flex d-none">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="box-body py-0">
                    <div className="table-responsive">
                      <table className="table no-border mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <div className="bg-danger h-50 w-50 l-h-50 rounded text-center">
                                <p className="mb-0 fs-20 fw-600">A1</p>
                              </div>
                            </td>
                            <td className="fw-600">Biology Course</td>
                            <td className="text-fade">
                              StarterReplacement.pdf
                            </td>
                            <td className="fw-500">
                              <span className="badge badge-sm badge-dot badge-warning me-10"></span>
                              Only view
                            </td>
                            <td className="text-fade">78 members</td>
                            <td className="fw-600">47 MB</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="bg-info h-50 w-50 l-h-50 rounded text-center">
                                <p className="mb-0 fs-20 fw-600">B1</p>
                              </div>
                            </td>
                            <td className="fw-600">Contemporary Art</td>
                            <td className="text-fade">Loremipsum.doc</td>
                            <td className="fw-500 text-warning">
                              <span className="badge badge-sm badge-dot badge-warning me-10"></span>
                              Edit available
                            </td>
                            <td className="text-fade">78 members</td>
                            <td className="fw-600">78 MB</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="bg-primary h-50 w-50 l-h-50 rounded text-center">
                                <p className="mb-0 fs-20 fw-600">C1</p>
                              </div>
                            </td>
                            <td className="fw-600">Programming Language</td>
                            <td className="text-fade">phpcore.mp3</td>
                            <td className="fw-500">
                              <span className="badge badge-sm badge-dot badge-primary me-10"></span>
                              Only view
                            </td>
                            <td className="text-fade">48 members</td>
                            <td className="fw-600">12 MB</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="bg-success h-50 w-50 l-h-50 rounded text-center">
                                <p className="mb-0 fs-20 fw-600">A2</p>
                              </div>
                            </td>
                            <td className="fw-600">Geometry Course</td>
                            <td className="text-fade">dummyabz.pdf</td>
                            <td className="fw-500">
                              <span className="badge badge-sm badge-dot badge-primary me-10"></span>
                              Only view
                            </td>
                            <td className="text-fade">24 members</td>
                            <td className="fw-600">18 MB</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div className="box">
                  <div className="box-body">
                    <div className="box no-shadow mb-0">
                      <div className="box-body px-0 pt-0">
                        <div
                          id="calendar"
                          className="dask evt-cal min-h-400"
                        ></div>
                      </div>
                    </div>

                    <div className="box no-shadow mb-0">
                      <div className="box-header no-border">
                        <h4 className="box-title">Lessons</h4>
                        <div className="box-controls pull-right d-md-flex d-none">
                          <a href="#">View All</a>
                        </div>
                      </div>
                    </div>
                    <div className="px-5">
                      <div className="box bt-5 border-danger rounded">
                        <div className="box-body">
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center pe-2 justify-content-between">
                              <h4 className="fw-500">Programming</h4>
                              <div className="dropdown">
                                <a
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  className="px-10 pt-5"
                                >
                                  <i className="ti-more-alt"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-import"></i> Import
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-export"></i> Export
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-printer"></i> Print
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-settings"></i> Settings
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p className="fs-16">Every Day 10am to 11am</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-10">
                            <div className="d-flex">
                              <a
                                href="#"
                                className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden"
                              >
                                <img
                                  src="../images/avatar/avatar-1.png"
                                  className="h-50 align-self-end"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden"
                              >
                                <img
                                  src="../images/avatar/avatar-3.png"
                                  className="h-50 align-self-end"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden"
                              >
                                <img
                                  src="../images/avatar/avatar-4.png"
                                  className="h-50 align-self-end"
                                  alt=""
                                />
                              </a>
                            </div>
                            <button
                              type="button"
                              className="waves-effect waves-circle btn btn-circle btn-dark"
                            >
                              <i className="mdi mdi-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="box bt-5 border-primary rounded">
                        <div className="box-body">
                          <div className="flex-grow-1">
                            <div className="d-flex align-items-center pe-2 justify-content-between">
                              <h4 className="fw-500">Core Language</h4>
                              <div className="dropdown">
                                <a
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  className="px-10 pt-5"
                                >
                                  <i className="ti-more-alt"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-import"></i> Import
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-export"></i> Export
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-printer"></i> Print
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item" href="#">
                                    <i className="ti-settings"></i> Settings
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p className="fs-16">Every Day 12pm to 01pm</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-10">
                            <div className="d-flex">
                              <a
                                href="#"
                                className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden"
                              >
                                <img
                                  src="../images/avatar/avatar-2.png"
                                  className="h-50 align-self-end"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden"
                              >
                                <img
                                  src="../images/avatar/avatar-5.png"
                                  className="h-50 align-self-end"
                                  alt=""
                                />
                              </a>
                              <a
                                href="#"
                                className="me-15 bg-lightest h-50 w-50 l-h-50 rounded-circle text-center overflow-hidden"
                              >
                                <img
                                  src="../images/avatar/avatar-6.png"
                                  className="h-50 align-self-end"
                                  alt=""
                                />
                              </a>
                            </div>
                            <button
                              type="button"
                              className="waves-effect waves-circle btn btn-circle btn-dark"
                            >
                              <i className="mdi mdi-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="box no-shadow mb-0">
                      <div className="box-header no-border">
                        <h4 className="box-title">Lessons</h4>
                        <div className="box-controls pull-right d-md-flex d-none">
                          <a href="#"> View All </a>
                        </div>
                      </div>
                    </div>
                    <div className="px-5">
                      <div className="box mb-15">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 bg-warning h-50 w-50 l-h-60 rounded text-center">
                                <span className="icon-Book-open fs-24">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a
                                  href="#"
                                  className="text-dark hover-primary mb-1 fs-16"
                                >
                                  Informatic Course
                                </a>
                                <span className="text-fade">
                                  Johen Doe, 19 April
                                </span>
                              </div>
                            </div>
                            <a href="#">
                              <span className="icon-Arrow-right fs-24">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-15">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 bg-primary h-50 w-50 l-h-60 rounded text-center">
                                <span className="icon-Mail fs-24"></span>
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a
                                  href="#"
                                  className="text-dark hover-primary mb-1 fs-16"
                                >
                                  Live Drawing
                                </a>
                                <span className="text-fade">
                                  Micak Doe, 12 June
                                </span>
                              </div>
                            </div>
                            <a href="#">
                              <span className="icon-Arrow-right fs-24">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-0">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 bg-danger h-50 w-50 l-h-60 rounded text-center">
                                <span className="icon-Book-open fs-24">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a
                                  href="#"
                                  className="text-dark hover-primary mb-1 fs-16"
                                >
                                  Contemporary Art
                                </a>
                                <span className="text-fade">
                                  Potar doe, 27 July
                                </span>
                              </div>
                            </div>
                            <a href="#">
                              <span className="icon-Arrow-right fs-24">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
