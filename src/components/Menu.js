import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div>
          <aside className="main-sidebar">
            {/* sidebar */}
            <section className="sidebar position-relative">
              <div className="multinav">
                <div className="multinav-scroll" style={{ height: "100%" }}>
                  {/* sidebar menu  */}
                  <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">Pengelola Klinik</li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Layout-4-blocks">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <span>Data Pengelola</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="index.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Admin
                          </a>
                        </li>
                        <li>
                          <a href="index2.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            HRD
                          </a>
                        </li>
                        <li>
                          <a href="index3.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Dokter
                          </a>
                        </li>
                        <li>
                          <a href="index4.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Apoteker
                          </a>
                        </li>
                        <li>
                          <a href="index4.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Pasien
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header">Ruangan Klinik </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Write">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <span>Rawat Inap</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="ui_grid.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Grid System
                          </a>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Card
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="box_cards.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                User Card
                              </a>
                            </li>
                            <li>
                              <a href="box_advanced.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Advanced Card
                              </a>
                            </li>
                            <li>
                              <a href="box_basic.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Basic Card
                              </a>
                            </li>
                            <li>
                              <a href="box_color.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Card Color
                              </a>
                            </li>
                            <li>
                              <a href="box_group.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Card Group
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="ui_badges.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Badges
                          </a>
                        </li>
                        <li>
                          <a href="ui_border_utilities.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Border
                          </a>
                        </li>
                        <li>
                          <a href="ui_buttons.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Buttons
                          </a>
                        </li>
                        <li>
                          <a href="ui_color_utilities.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Color
                          </a>
                        </li>
                        <li>
                          <a href="ui_dropdown.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Dropdown
                          </a>
                        </li>
                        <li>
                          <a href="ui_dropdown_grid.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Dropdown Grid
                          </a>
                        </li>
                        <li>
                          <a href="ui_progress_bars.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Progress Bars
                          </a>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Icons
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="icons_fontawesome.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Font Awesome
                              </a>
                            </li>
                            <li>
                              <a href="icons_glyphicons.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Glyphicons
                              </a>
                            </li>
                            <li>
                              <a href="icons_material.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Material Icons
                              </a>
                            </li>
                            <li>
                              <a href="icons_themify.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Themify Icons
                              </a>
                            </li>
                            <li>
                              <a href="icons_simpleline.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Simple Line Icons
                              </a>
                            </li>
                            <li>
                              <a href="icons_cryptocoins.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Cryptocoins Icons
                              </a>
                            </li>
                            <li>
                              <a href="icons_flag.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Flag Icons
                              </a>
                            </li>
                            <li>
                              <a href="icons_weather.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Weather Icons
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="ui_ribbons.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Ribbons
                          </a>
                        </li>
                        <li>
                          <a href="ui_sliders.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Sliders
                          </a>
                        </li>
                        <li>
                          <a href="ui_typography.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Typography
                          </a>
                        </li>
                        <li>
                          <a href="ui_tab.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Tabs
                          </a>
                        </li>
                        <li>
                          <a href="ui_timeline.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Timeline
                          </a>
                        </li>
                        <li>
                          <a href="ui_timeline_horizontal.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Horizontal Timeline
                          </a>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Components
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="component_bootstrap_switch.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Bootstrap Switch
                              </a>
                            </li>
                            <li>
                              <a href="component_date_paginator.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Date Paginator
                              </a>
                            </li>
                            <li>
                              <a href="component_media_advanced.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Advanced Medias
                              </a>
                            </li>
                            <li>
                              <a href="component_rangeslider.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Range Slider
                              </a>
                            </li>
                            <li>
                              <a href="component_rating.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Ratings
                              </a>
                            </li>
                            <li>
                              <a href="component_animations.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Animations
                              </a>
                            </li>
                            <li>
                              <a href="extension_fullscreen.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Fullscreen
                              </a>
                            </li>
                            <li>
                              <a href="extension_pace.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Pace
                              </a>
                            </li>
                            <li>
                              <a href="component_nestable.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Nestable
                              </a>
                            </li>
                            <li>
                              <a href="component_portlet_draggable.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Draggable Portlets
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-File">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                        <span>Poli</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Forms
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="forms_advanced.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Form Elements
                              </a>
                            </li>
                            <li>
                              <a href="forms_general.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Form Layout
                              </a>
                            </li>
                            <li>
                              <a href="forms_wizard.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Form Wizard
                              </a>
                            </li>
                            <li>
                              <a href="forms_validation.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Form Validation
                              </a>
                            </li>
                            <li>
                              <a href="forms_mask.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Formatter
                              </a>
                            </li>
                            <li>
                              <a href="forms_xeditable.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Xeditable Editor
                              </a>
                            </li>
                            <li>
                              <a href="forms_dropzone.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Dropzone
                              </a>
                            </li>
                            <li>
                              <a href="forms_code_editor.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Code Editor
                              </a>
                            </li>
                            <li>
                              <a href="forms_editors.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Editor
                              </a>
                            </li>
                            <li>
                              <a href="forms_editor_markdown.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Markdown
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Tables
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="tables_simple.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Simple tables
                              </a>
                            </li>
                            <li>
                              <a href="tables_data.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Data tables
                              </a>
                            </li>
                            <li>
                              <a href="tables_editable.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Editable Tables
                              </a>
                            </li>
                            <li>
                              <a href="tables_color.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Table Color
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="header">COLLECTIONS</li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Library">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <span>Widgets</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="widgets_blog.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="widgets_chart.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Chart
                          </a>
                        </li>
                        <li>
                          <a href="widgets_list.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            List
                          </a>
                        </li>
                        <li>
                          <a href="widgets_social.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Social
                          </a>
                        </li>
                        <li>
                          <a href="widgets_statistic.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Statistic
                          </a>
                        </li>
                        <li>
                          <a href="widgets_weather.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Weather
                          </a>
                        </li>
                        <li>
                          <a href="widgets.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Widgets
                          </a>
                        </li>
                        <li>
                          <a href="email_index.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Emails
                          </a>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Maps
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="map_google.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Google Map
                              </a>
                            </li>
                            <li>
                              <a href="map_vector.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Vector Map
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Modals
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="component_modals.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Modals
                              </a>
                            </li>
                            <li>
                              <a href="component_sweatalert.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Sweet Alert
                              </a>
                            </li>
                            <li>
                              <a href="component_notification.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Toastr
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Cart">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <span>Ecommerce</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="ecommerce_products.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Products
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce_cart.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Products Cart
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce_products_edit.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Products Edit
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce_details.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Product Details
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce_orders.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Product Orders
                          </a>
                        </li>
                        <li>
                          <a href="ecommerce_checkout.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Products Checkout
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-User">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <span>Pages</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="invoice.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Invoice
                          </a>
                        </li>
                        <li>
                          <a href="invoicelist.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Invoice List
                          </a>
                        </li>
                        <li>
                          <a href="extra_app_ticket.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Support Ticket
                          </a>
                        </li>
                        <li>
                          <a href="extra_profile.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            User Profile
                          </a>
                        </li>
                        <li>
                          <a href="contact_userlist_grid.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Userlist Grid
                          </a>
                        </li>
                        <li>
                          <a href="contact_userlist.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Userlist
                          </a>
                        </li>
                        <li>
                          <a href="sample_faq.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a href="sample_blank.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Blank
                          </a>
                        </li>
                        <li>
                          <a href="sample_coming_soon.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Coming Soon
                          </a>
                        </li>
                        <li>
                          <a href="sample_custom_scroll.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Custom Scrolls
                          </a>
                        </li>
                        <li>
                          <a href="sample_gallery.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a href="sample_lightbox.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Lightbox Popup
                          </a>
                        </li>
                        <li>
                          <a href="sample_pricing.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Pricing
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header">LOGIN & ERROR </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Chat-locked">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <span>Authentication</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="auth_login.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="auth_register.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Register
                          </a>
                        </li>
                        <li>
                          <a href="auth_lockscreen.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Lockscreen
                          </a>
                        </li>
                        <li>
                          <a href="auth_user_pass.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Recover password
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Chat-check">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        <span>Miscellaneous</span>
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="error_404.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Error 404
                          </a>
                        </li>
                        <li>
                          <a href="error_500.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Error 500
                          </a>
                        </li>
                        <li>
                          <a href="error_maintenance.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Maintenance
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <div className="sidebar-footer">
              <a
                href="javascript:void(0)"
                className="link"
                data-bs-toggle="tooltip"
                title="Settings"
              >
                <span className="icon-Settings-2"></span>
              </a>
              <a
                href="mailbox.html"
                className="link"
                data-bs-toggle="tooltip"
                title="Email"
              >
                <span className="icon-Mail"></span>
              </a>
              <a
                href="javascript:void(0)"
                className="link"
                data-bs-toggle="tooltip"
                title="Logout"
              >
                <span className="icon-Lock-overturning">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </span>
              </a>
            </div>
          </aside>
          <aside className="control-sidebar">
            <div className="rpanel-title">
              <span className="pull-right btn btn-circle btn-danger">
                <i
                  className="ion ion-close text-white"
                  data-toggle="control-sidebar"
                ></i>
              </span>
            </div>
            Create the tabs
            <ul className="nav nav-tabs control-sidebar-tabs">
              <li className="nav-item">
                <a
                  href="#control-sidebar-home-tab"
                  data-bs-toggle="tab"
                  className="active"
                >
                  <i className="mdi mdi-message-text"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#control-sidebar-settings-tab" data-bs-toggle="tab">
                  <i className="mdi mdi-playlist-check"></i>
                </a>
              </li>
            </ul>
            Tab panes
            <div className="tab-content">
              Home tab content
              <div className="tab-pane active" id="control-sidebar-home-tab">
                <div className="flexbox">
                  <a href="javascript:void(0)" className="text-grey">
                    <i className="ti-more"></i>
                  </a>
                  <p>Users</p>
                  <a href="javascript:void(0)" className="text-end text-grey">
                    <i className="ti-plus"></i>
                  </a>
                </div>
                <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                  <input
                    type="text"
                    name="s"
                    placeholder="Search"
                    className="w-p100"
                  />
                </div>
                <div className="media-list media-list-hover mt-20">
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="../images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Tyler</strong>
                        </a>
                      </p>
                      <p>Praesent tristique diam...</p>
                      <span>Just now</span>
                    </div>
                  </div>

                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-danger" href="#">
                      <img src="../images/avatar/2.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Luke</strong>
                        </a>
                      </p>
                      <p>Cras tempor diam ...</p>
                      <span>33 min ago</span>
                    </div>
                  </div>

                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-warning" href="#">
                      <img src="../images/avatar/3.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>

                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-primary" href="#">
                      <img src="/images/avatar/4.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>

                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="/images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Tyler</strong>
                        </a>
                      </p>
                      <p>Praesent tristique diam...</p>
                      <span>Just now</span>
                    </div>
                  </div>

                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-danger" href="#">
                      <img src="../images/avatar/2.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Luke</strong>
                        </a>
                      </p>
                      <p>Cras tempor diam ...</p>
                      <span>33 min ago</span>
                    </div>
                  </div>

                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-warning" href="#">
                      <img src="images/avatar/3.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>

                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-primary" href="#">
                      <img src="images/avatar/4.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>Evan</strong>
                        </a>
                      </p>
                      <p>In posuere tortor vel...</p>
                      <span>42 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              /.tab-pane Settings tab content
              <div className="tab-pane" id="control-sidebar-settings-tab">
                <div className="flexbox">
                  <a href="javascript:void(0)" className="text-grey">
                    <i className="ti-more"></i>
                  </a>
                  <p>Todo List</p>
                  <a href="javascript:void(0)" className="text-end text-grey">
                    <i className="ti-plus"></i>
                  </a>
                </div>
                <ul className="todo-list mt-20">
                  <li className="py-15 px-5 by-1">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_1"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_1"
                      className="mb-0 h-15"
                    ></label>
                    todo text
                    <span className="text-line">Nulla vitae purus</span>
                    Emphasis label
                    <small className="badge bg-danger">
                      <i className="fa fa-clock-o"></i> 2 mins
                    </small>
                    General tools such as edit or delete
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_2"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_2"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Phasellus interdum</span>
                    <small className="badge bg-info">
                      <i className="fa fa-clock-o"></i> 4 hours
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5 by-1">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_3"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_3"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Quisque sodales</span>
                    <small className="badge bg-warning">
                      <i className="fa fa-clock-o"></i> 1 day
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_4"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_4"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Proin nec mi porta</span>
                    <small className="badge bg-success">
                      <i className="fa fa-clock-o"></i> 3 days
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5 by-1">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_5"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_5"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Maecenas scelerisque</span>
                    <small className="badge bg-primary">
                      <i className="fa fa-clock-o"></i> 1 week
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_6"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_6"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Vivamus nec orci</span>
                    <small className="badge bg-info">
                      <i className="fa fa-clock-o"></i> 1 month
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5 by-1">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_7"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_7"
                      className="mb-0 h-15"
                    ></label>
                    todo text
                    <span className="text-line">Nulla vitae purus</span>
                    Emphasis label
                    <small className="badge bg-danger">
                      <i className="fa fa-clock-o"></i> 2 mins
                    </small>
                    General tools such as edit or delete
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_8"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_8"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Phasellus interdum</span>
                    <small className="badge bg-info">
                      <i className="fa fa-clock-o"></i> 4 hours
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5 by-1">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_9"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_9"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Quisque sodales</span>
                    <small className="badge bg-warning">
                      <i className="fa fa-clock-o"></i> 1 day
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    checkbox
                    <input
                      type="checkbox"
                      id="basic_checkbox_10"
                      className="filled-in"
                    />
                    <label
                      htmlFor="basic_checkbox_10"
                      className="mb-0 h-15"
                    ></label>
                    <span className="text-line">Proin nec mi porta</span>
                    <small className="badge bg-success">
                      <i className="fa fa-clock-o"></i> 3 days
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit"></i>
                      <i className="fa fa-trash-o"></i>
                    </div>
                  </li>
                </ul>
              </div>
              /.tab-pane
            </div>
          </aside>
          <div className="control-sidebar-bg"></div>
          {/* ./side demo panel   */}
          <div className="sticky-toolbar">
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Buy Now"
              className="waves-effect waves-light btn btn-success btn-flat mb-5 btn-sm"
              target="_blank"
            >
              <span className="icon-Money">
                <span className="path1"></span>
                <span className="path2"></span>
              </span>
            </a>
            <a
              href="https://themeforest.net/user/multipurposethemes/portfolio"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Portfolio"
              className="waves-effect waves-light btn btn-danger btn-flat mb-5 btn-sm"
              target="_blank"
            >
              <span className="icon-Image"></span>
            </a>
            <a
              id="chat-popup"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="Live Chat"
              className="waves-effect waves-light btn btn-warning btn-flat btn-sm"
            >
              <span className="icon-Group-chat">
                <span className="path1"></span>
                <span className="path2"></span>
              </span>
            </a>
          </div>
          Sidebar
          <div id="chat-box-body">
            <div
              id="chat-circle"
              className="waves-effect waves-circle btn btn-circle btn-lg btn-warning l-h-70"
            >
              <div id="chat-overlay"></div>
              <span className="icon-Group-chat fs-30">
                <span className="path1"></span>
                <span className="path2"></span>
              </span>
            </div>

            <div className="chat-box">
              <div className="chat-box-header p-15 d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    className="waves-effect waves-circle btn btn-circle btn-primary-light h-40 w-40 rounded-circle l-h-45"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <span className="icon-Add-user fs-22">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </span>
                  </button>
                  <div className="dropdown-menu min-w-200">
                    <a className="dropdown-item fs-16" href="#">
                      <span className="icon-Color me-15"></span>
                      New Group
                    </a>
                    <a className="dropdown-item fs-16" href="#">
                      <span className="icon-Clipboard me-15">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                      </span>
                      Contacts
                    </a>
                    <a className="dropdown-item fs-16" href="#">
                      <span className="icon-Group me-15">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </span>
                      Groups
                    </a>
                    <a className="dropdown-item fs-16" href="#">
                      <span className="icon-Active-call me-15">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </span>
                      Calls
                    </a>
                    <a className="dropdown-item fs-16" href="#">
                      <span className="icon-Settings1 me-15">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </span>
                      Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item fs-16" href="#">
                      <span className="icon-Question-circle me-15">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </span>
                      Help
                    </a>
                    <a className="dropdown-item fs-16" href="#">
                      <span className="icon-Notifications me-15">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </span>
                      Privacy
                    </a>
                  </div>
                </div>
                <div className="text-center flex-grow-1">
                  <div className="text-dark fs-18">Mayra Sibley</div>
                  <div>
                    <span className="badge badge-sm badge-dot badge-primary"></span>
                    <span className="text-muted fs-12">Active</span>
                  </div>
                </div>
                <div className="chat-box-toggle">
                  <a
                    id="chat-box-toggle"
                    className="waves-effect waves-circle btn btn-circle btn-danger-light h-40 w-40 rounded-circle l-h-45"
                    href="#"
                  >
                    <span className="icon-Close fs-22">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="chat-box-body">
                <div className="chat-box-overlay"></div>
                <div className="chat-logs">
                  <div className="chat-msg user">
                    <div className="d-flex align-items-center">
                      <span className="msg-avatar">
                        <img
                          src="images/avatar/2.jpg"
                          className="avatar avatar-lg"
                          alt="Foto profil pengguna John Doe"
                        />
                      </span>
                      <div className="mx-10">
                        <a href="#" className="text-dark hover-primary fw-bold">
                          Mayra Sibley
                        </a>
                        <p className="text-muted fs-12 mb-0">2 Hours</p>
                      </div>
                    </div>
                    <div className="cm-msg-text">
                      Hi there, I'm Jesse and you?
                    </div>
                  </div>
                  <div className="chat-msg self">
                    <div className="d-flex align-items-center justify-content-end">
                      <div className="mx-10">
                        <a href="#" className="text-dark hover-primary fw-bold">
                          You
                        </a>
                        <p className="text-muted fs-12 mb-0">3 minutes</p>
                      </div>
                      <span className="msg-avatar">
                        <img
                          src="../images/avatar/3.jpg"
                          className="avatar avatar-lg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="cm-msg-text">My name is Anne Clarc.</div>
                  </div>
                  <div className="chat-msg user">
                    <div className="d-flex align-items-center">
                      <span className="msg-avatar">
                        <img
                          src="../images/avatar/2.jpg"
                          className="avatar avatar-lg"
                          alt=""
                        />
                      </span>
                      <div className="mx-10">
                        <a href="#" className="text-dark hover-primary fw-bold">
                          Mayra Sibley
                        </a>
                        <p className="text-muted fs-12 mb-0">40 seconds</p>
                      </div>
                    </div>
                    <div className="cm-msg-text">
                      Nice to meet you Anne.
                      <br />
                      How can i help you?
                    </div>
                  </div>
                </div>
                chat-log
              </div>
              <div className="chat-input">
                <form>
                  <input
                    type="text"
                    id="chat-input"
                    placeholder="Send a message..."
                  />
                  <button
                    type="submit"
                    className="chat-submit"
                    id="chat-submit"
                  >
                    <span className="icon-Send fs-22"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
